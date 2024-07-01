import express from 'express'

const app = express();


app.get('/', (req, res) => {
    res.json({"hola": 'Hello World!'})
})

app.listen(3000, () => {
    console.log('server online on 3000');
})