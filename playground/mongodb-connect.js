const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser : true}, (err, db)  => {
    if(err){
        return console.log(err);
    }

 /* =========================== Todos Collection Start========================== */   
    const mydb = db.db('Todos');
    mydb.collection('Todos').insertOne({
        text : 'Can i drop you?',
        completed : false,
    }, (err, result) => {
        if(err){
            return console.log(err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });
/* =========================== Todos Collection End========================== */  


/* =========================== Users Collection Start========================== */  
/* const mydb = db.db('Users');
mydb.collection('Users').insertOne({
   name : 'Champ',
   age : 22,
   location : 'Delhi',
}, (err, result) => {
    if(err){
        return console.log(err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
}); */

/* =========================== Users Collection End========================== */  

    console.log('Connected to the MongoDB Server');
});