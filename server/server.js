var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var {mongoose} = require('./db/mongoose');
var {Todos} = require('./models/todo');

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

app.listen(3000, () => {
    console.log('Server Connected on 3000 PORT!!');
});