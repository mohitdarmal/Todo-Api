const MongoClient = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser : true}, (err, db) => {
    if(err){
        return console.log(err);
    }

    const mydb = db.db('Todos');
    const objectId = require('mongodb').ObjectID;
    mydb.collection('Todos').find({_id : objectId('5c6ad94da837452320f549a9')}).toArray().then((err, result) => {
        if(err){
            return console.log(err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    mydb.collection('Todos').find().count().then((err, result) => {
        if(err){
            return console.log(err);
        }
        console.log(`Count : ${result.ops}`);
    });

    console.log('Connected to the Mongodb Server!!');
});

