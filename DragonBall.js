const express = require('express');
const todoModel = require('./TodoModel/todo.model');
const mongoose = require('mongoose'), Admin = mongoose.mongo.Admin;

const DragonBall = express();
DragonBall.use(express.json());
let Todo = require ('/models/todo.model');
mongoose.connect('mongodb+srv://programmer:Programmer1991@crud.uywi9.mongodb.net/<dbname>?retryWrites=true&w=majority',{
userNewUrlParser: true} )

});
const connection = mongoose.conenction;
connection.once('open', function() {
    console.log("MONGODB database connection established!");
})
DragonBall.get('/', function(req,res) {
   let Todo = {
       todo_description: "Publish application",
       todo_responsible: "Gabriel",
       todo_priority: " High",
       todo_completed:  False,

   };
   let DragonBall = new Todo(exampleTodo);
    console.log(DragonBall);
    res.send({data: ' Major DATA'});

})
DragonBall.post('/', function(req, res){
    res.send({ data: 'hit post request'});
})
// DragonBall.get('delete', function (req,res){
//     Todo.remove({ todo_responsible:"Gabriel"} 
//         if(err){
//         console.log(err);
        
//     }
//     else {
//         res.send(data);
//     }) ;   




DragonBall.listen(3000, () => {console.log('Server is running')});