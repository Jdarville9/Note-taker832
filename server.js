const express = require('express');
const app = express();
const path = require('path');
const { notes } = require('./db/db');
const notesHtml = require('./public/notes.html');
const indexhtml = require('./public/index.html');

app.get('/notes', (req, res) => {
    res.json(notes);
});

app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
});