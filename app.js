import express from 'express';
import {createNote, getNote, getNotes} from './database.js';

const app = express();
const port = 8080;

app.use(express.json());

app.get('/notes', async(req, res) => {
    const notes = await getNotes();
    res.status(200).send(notes)
})

app.get('/notes/:id', async(req, res) => {
    const id = req.params.id;
    const note = await getNote(id);
    res.status(200).send(note)
})

app.post('/notes', async(req, res) =>
{
    const {title, contents} = req.body;
    const note = await createNote(title, contents);
    res.status(200).send(note.insertId)
})


app.listen(port, () => {
    console.log('app listen on', port);
})

