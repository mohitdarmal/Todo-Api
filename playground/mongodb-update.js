const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser : true}, (err, db) => {
    if(err){
        return console.log(err);
    }

    const mydb = db.db('Todos');
    const objectId = require('mongodb').ObjectID;
    mydb.collection('Todos').findOneAndUpdate({_id : objectId('5c6ad94da837452320f549a9')}, {
        $set : {
            text : 'Have you done your school work?',
        }
    }, {
        returnOriginial : false,
    }).then((err, result) => {
        if(err){
            return console.log(err);
        }
        console.log(result);
    })

    console.log('Connected to the MongoDB Server');
});