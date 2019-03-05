var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Mohit:Mohit321@todoapp-xcjbi.mongodb.net/test?retryWrites=true || mongodb://localhost:27017/TodoApp', {useNewUrlParser : true});

module.exports = {
    mongoose
}