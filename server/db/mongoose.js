var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Mohit:Mohit321@todoapp-xcjbi.mongodb.net/test?retryWrites=true', {useNewUrlParser : true});

module.exports = {
    mongoose
}