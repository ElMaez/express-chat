import express from 'express';

//      To Do:
// Install NPM. done.
// Install Express. done.
// Hello World. done med, HUH?!
// Lav et hardcoded array med message data. done.
// Man skal kunne læse beskederne.
// Man skal kunne sende sin egen besked.

const app = express();
const port = 3000;

const chat = [
    { 
    id: "1",
    user: "Jeff",
    text: "den tekst der er skrevet",
    timestamp: "dato her",
    },
    { 
    id: "2",
    user: "Hreff",
    text: "den tekst der er skrevet",
    timestamp: "dato her",
    }
]

app.get('/',(req,res)=>{
        res.json(chat);
});

app.post('/chat',(req,res)=>{
    const {user, text} = req.body ?? {};

    const message = {
        id: nextId++,
        user: user,
        text: text,
        timestamp: new Date().timestamp()
    }
})

// app.patch('/',(req,res)=>{

// });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})
