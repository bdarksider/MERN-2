const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

var bugs = [
    {id:1, priority:"P1", status:"Open", owner:"Ravan", title:"App crashes on open"},
    {id:2, priority:"P2", status:"New", owner:"Eddie", title:"Misaligned border on panel"}
];


app.use(express.static('static'))

app.get('/api/bugs', function (req, res) {
  res.status(200).json(bugs);
});

app.post('/api/bugs', function(req, res) {
    var bug = {
        owner: req.body.owner,
        title: req.body.title,
        priority: "P1", 
        status: "New",
        id: bugs.length + 1
    }

    bugs.push(bug);
    res.json(bug);
})

app.listen(3000, function() {
    console.log('running at 3000');
});



