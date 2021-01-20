const express = require('express');
const { findOneAndUpdate } = require('./todo.model');
const { findByIdRemove } = require('./todo.models');
const mongoose = require('mongoose'), Admin = mongoose.mongo.Admin;

const DragonBall = express();
DragonBall.use(express.json());
let Todo = require ('./todo.model');
mongoose.connect('mongodb+srv://https://cloud.mongodb.com/v2/5ff41ef69e0dd161a9ae6704#clusters' {
userNewUrlParser: true 

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
    todo.save()
    .then(todo => {
        console.log(todo);
    })
    .catch(err => {
        console.log(err);
    });
    res.send({data: ' Major DATA'});
    });
    let todo = new Todo(exampleTod1);
    Todo.findOneAndUpdate({})
    console.log('Updated', todo);
    res.send(todo)
DragonBall.post('/', function(req, res){
    res.send({ data: 'hit post request'});
})


DragonBall.listen(3000, () => {console.log('Server is running')});