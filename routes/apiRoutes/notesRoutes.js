const router = require('express').Router();
const { findById, createNewNote } = require('../../lib/notes');
const { notes } = require('../../db/db.json');

router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});

router.get('/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes);
    if (result) {
        consonle.log(result);
        res.json(result);
    } else {
        res.send(404)
    }
});

router.post('/notes', (req, res) => {
    let results = notes;

    req.body.id = results.length.toString();
    const note = createNewNote(req.body, notes)

    res.json(note);
});

module.exports = router;