const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser : true}, (err, db) => {
    if(err){
        return console.log(err);
    }
    
    /* =========================== DeleteMany Start ========================== */  
   /*  const mydb = db.db('Todos');
    mydb.collection('Todos').deleteMany({text : 'What are you doing?'}).then((err, result) => {
        if(err){
            return console.log(err);
        }
        console.log(result);
    }); */
    /* =========================== DeleteMany End ============================ */  





     /* =========================== deleteOne Start ========================== */  
    /*  const mydb = db.db('Todos');
     const objectId = require('mongodb').ObjectID;  
     mydb.collection('Todos').deleteOne({_id : objectId('5c6ae1967b5c8fadfcc87565')}).then((err, result) => {
         if(err){
             return console.log(err);
         }
         console.log(result);
     }); */
     /* =========================== DeleteMany End ============================ */  





       /* =========================== findOneAndDelete Start ========================== */  
       const mydb = db.db('Todos');
       const objectId = require('mongodb').ObjectID;  
       mydb.collection('Todos').findOneAndDelete({_id : objectId('5c6ae2427b5c8fadfcc875d7')}).then((err, result) => {
           if(err){
               return console.log(err);
           }
           console.log(result);
       });
       /* =========================== findOneAndDelete End ============================ */  

    console.log('Connected to the Mongodb Server!!');
});