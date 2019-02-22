const {mongoose} = require('./../server/db/mongoose');
const {Todos} = require('./../server/models/todo');
const {ObjectID} = require('mongodb');

var id = "5c6be6448f2aec2e30cc8b45";

if(!ObjectID.isValid(id)){
return console.log('ID is Invalid');
}

/* Todos.find({_id : id}).then((err, result) => {
    if(err){
        return console.log('err');
    }
    console.log(result);
});

Todos.findOne({_id : id}).then((err, result) => {
    if(err){
        return console.log('err');
    }
    console.log(result);
}); */

Todos.findById(id).then((err, result) => {
    if(err){
        return console.log(err);
    }
    console.log(result);
}).catch((e) => {
    console.log(e);
});