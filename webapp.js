const url = 'mongodb://localhost:27017/bugsdb';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect(url);
const db = mongoose.connection;

db.on('error', err => {
    console.error(`Connection error: ${err}`);
    process.exit(1);
});

db.once('open', () => {
    console.log('Connected to MongoDB server.');
});

const bugSchema = new mongoose.Schema({
    title: String,
    status: String,
    owner: String,
    priority: String,
    id: Number
});

const bugModel = mongoose.model('bug', bugSchema);

const app = express();
app.use(bodyParser.json());

app.use(express.static('static'));

app.get('/api/bugs', function(req, res) {
    bugModel.find({}, (err, bugs) => {
        if (err) {
            return console.error(err);
        }
        return res.json(bugs);
    });
});

app.post('/api/bugs', function(req, res) {
    var bug = {
        owner: req.body.owner,
        title: req.body.title,
        priority: 'P1',
        status: 'New',
        id: bugs.length + 1
    };

    bugs.push(bug);
    res.json(bug);
});

app.listen(3000, function() {
    console.log('running at 3000');
});
