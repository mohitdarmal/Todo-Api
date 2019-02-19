var mongoose = require('mongoose');

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

module.exports = {Todos}