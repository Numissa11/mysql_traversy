import express from 'express';
import {createNote, getNote, getNotes} from './database.js'

const app = express();
const port = 8080;

app.get('/notes', async(req, res) => {
    const notes = await getNotes();
    res.send(notes)
})



app.listen(port, () => {
    console.log('app listen on', port);
})

