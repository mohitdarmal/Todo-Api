var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

const {mongoose} = require('./db/mongoose');
const {mongoosePrac1} = require('./models/mongooseprac');

app.post('/todos', (req, res) => {
    var newMongoosePrac1 = new mongoosePrac1({
        text : req.body.text,
        completed : req.body.completed,
    });
    newMongoosePrac1.save().then((err, result) => {
        if(err){
            return res.send(err);
        }
        res.send(result);
    });
});

app.get('/todos', (req, res) => {
    mongoosePrac1.find().then((err, result) => {
        if(err){
            return res.send(err);
        }
        res.send(result);
    });
});

app.listen(3000, () => {
    console.log('Connected to the Mongoose Server on PORT 3000!!');
});

/* 
var newMongoosePrac1 = new mongoosePrac1({
    text : 'Do you wnat to go to ride with me?',
    completed : true,
});

newMongoosePrac1.save().then((err, result) => {
    if(err){
        return console.log(err);
    }
    console.log(result);
}); */