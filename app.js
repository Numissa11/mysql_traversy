import express from 'express';
const app = express();
const port = 8080;

app.get('/notes', (req, res) => {
    res.send('Hello DARKNESS MY OLD FRIEND')
})

app.listen(port, () => {
    console.log('app listen on', port);
})