const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

var {mongoose} = require('./db/mongoose');
var {Todos} = require('./models/todo');
const {ObjectID} = require('mongodb');
const port = process.env.PORT || 3000;

app.use(bodyParser.json());


app.post('/todos', (req, res) => {
   var todo = new Todos({
       text : req.body.text,
   });

   todo.save().then((err, result) => {
       if(err){
           return res.send(err);
       }
       res.send(result);
   });
});

app.get('/todos', (req, res) => {
    Todos.find().then((err, result) => {
        if(err){
            return res.send(err);
        }
        res.send(result);
    });
});


app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    console.log(id);
   /*  if(!ObjectID.isValid(id)){
        return console.log('Id is not valid');
    }
    console.log('Id is valid'); */

    Todos.findById(id).then((todo, err) => {
        if(todo){
           return res.send(todo);
        }
        res.send(err);
        
    }).catch((e) => {
        // console.log(err);
        res.send(e);
        
    });
});


app.delete('/todos/:id', (req, res) => {
    var id = req.params.id;
    
    if(!ObjectID.isValid(id)){
       return console.log('ID is not valid!!');
    }

    Todos.findByIdAndDelete(id).then((todo) => {
        if(!todo){
            res.send('There is nothing to delete');
            console.log('There is nothing to delete');
        }
        res.send(todo);
        console.log(todo);
    }).catch((err) => {
        console.log(err);
    })
});


app.patch('/todos/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['text', 'completed']);
    console.log(body);
    if(!ObjectID.isValid(id)){
        return console.log('ID is not valid');
    }

    if(_.isBoolean(body.completed) && body.completed){
        body.completedAt = new Date().getTime();
    }else{
        body.completedAt = null
    }

    Todos.findByIdAndUpdate(id, {$set : body}, {new : true}).then((todo) => {
        res.send(todo);
        console.log(todo);
    }).catch((e) => {
        res.send(e)
    })
});
// var newTodo = new Todos({
//     text : "Can you wait a little longer for me?",
//     /* completed : false,
//     completedAt : 3, */
// });

/* newTodo.save().then((err, result) => {
    if(err){
        return console.log(err);
    }
    console.log(result);
}); */

app.listen(port, () => {
    console.log(`Server has started on port ${port}`);
});