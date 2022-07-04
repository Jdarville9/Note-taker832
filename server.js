const express = require('express');
const PORT = process.env.PORT || 3001
const app = express();
const { notes } = require('./db/db');
const fs = require('fs');
//node API makes working with fs more predictable
// provides utils for working with file and dir paths
const path = require('path');

app.use(express.urlencoded({ extended: true}));
app.use(express.json());


function createNewNote(body, notesArray) {
    const newNote = body;
    notesArray.push(newNote)
    fs.writeFileSync(
        path.join(__dirname, './db/db.json'),
        JSON.stringify({ notes: notesArray}, null, 2)
    );
    return newNote;
};

app.get('/notes', (req, res) => {
    res.json(notes);
});

app.post('/notes', (req, res) => {
    const newNote = createNewNote(req.body, notes)

    res.json(req.body);
});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});