const {mongoose} = require('./../server/db/mongoose');
const {Todos} = require('./../server/models/todo');
const {ObjectID} = require('mongodb');

/* Todos.deleteMany({}).then((todo) => {
    console.log(todo);
}); */

/* Todos.findByIdAndDelete('5c7e65d99c8e4303404da2f0').then((todo) => {
    console.log(todo);
}); */

Todos.findOneAndDelete({_id : "5c7e64e49c8e4303404da2ef"}).then((todo) => {
    console.log(todo);
});