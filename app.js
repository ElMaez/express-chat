import express from 'express';
import { pool } from './database.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = 3000;


app.get('/',(req,res)=>{
        res.sendFile('index.html', { root: import.meta.dirname });
});

app.get('/chat', async (req, res) => {
    let db;

    try {
        db = await pool.getConnection();

        const [messages] = await db.query(
            'SELECT * FROM messages ORDER BY id'
        );

        return res.json(messages);
    } catch (error) {
        console.error('Database error:', error.message);
        return res.status(500).json({ error: 'Could not load messages' });
    } finally {
        if (db) {
            db.release();
        }
    }
});


app.post('/chat', async (req, res) => {
    const { user, text } = req.body ?? {};

    if (typeof user !== 'string' || typeof text !== 'string' ||
        !user.trim() || !text.trim()) {
        return res.status(400).json({ error: 'User and text are required' });
    }

    let db;

    try {
        db = await pool.getConnection();

        await db.query(
            'INSERT INTO messages (`user`, `text`) VALUES (?, ?)',
            [user, text]
        );

        const [messages] = await db.query(
            'SELECT * FROM messages ORDER BY id'
        );

        return res.redirect(303, '/');
    } catch (error) {
        console.error('Database error:', error.message);
        return res.status(500).json({ error: 'Database request failed' });
    } finally {
        if (db) {
            db.release();
        }
    }
});

    app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})
