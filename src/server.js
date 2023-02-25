import express from 'express';


const app = express()
const port = 3000

const users = [
    { user: "Edson", email: "edson@costa.com" },
    { user: "Maria", email: "maria@costa.com" },
    { user: "Tadao", email: "Tadao@costa.com" }
]

// post, get, put, delete, patch

app.get('/', (req, res) => {
    res.send('Hello World!')
})
// explicação aula de revisão da aula 33 aos 0:42m

app.get('/test', (req, res) => {
    res.send('<h1> Pagina de teste</h1>')
});

app.get('/user', (req, res) => {
    res.send(JSON.stringify(users));
});

app.post('/user', (req, res) => {
    res.send('<h1>First post done</h1>');
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})