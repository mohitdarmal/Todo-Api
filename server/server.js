var express = require('express');
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser : true});

var Todos = mongoose.model('Todos', {
    text : {
        type : String,
        required : true,
        trim : true,
        minlength : 1,
    },
    completed : {
        type : Boolean,
        default : false,
    },
    
        completedAt : {
            type : Number,
            default : null,
        }
});

var newTodo = new Todos({
    text : "Can you wait a little longer for me?",
    /* completed : false,
    completedAt : 3, */
});

newTodo.save().then((err, result) => {
    if(err){
        return console.log(err);
    }
    console.log(result);
});

app.listen(3000, () => {
    console.log('Server Connected on 3000 PORT!!');
});