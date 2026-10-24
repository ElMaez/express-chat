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
    id: "fortløbende nummer",
    user: "Jeff",
    text: "den tekst der er skrevet",
    timestamp: "dato her",
    },
    { 
    id: "fortløbende nummer",
    user: "Hreff",
    text: "den tekst der er skrevet",
    timestamp: "dato her",
    }
]

app.get('/',(req,res)=>{
    chat.forEach(message => {
        res.send(`${message.id},${message.user}`);
    });
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})