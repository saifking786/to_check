const mongoose = require('mongoose');
//connecting mongodb with the server
mongoose.connect('mongodb://127.0.0.1:27017/todos');

//acquiring connection on db
const db=mongoose.connection;

db.on('error',console.error.bind('eroor in connecting'));

db.once('open',function(){
    console.log('connected to database');
});
//exporting db
module.exports =db;