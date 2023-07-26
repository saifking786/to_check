const mongoose= require('mongoose');
//creating schema ,should be added in the database
const taskSchema = new mongoose.Schema({
    description:{
     type: String, 
     required: true
     },
     category:{
        type: String, 
        required: true
     },
     date:{
        type: String, 
        required: true
     }
    });
    
    const Task = mongoose.model('Task', taskSchema);
    //exporting task
    module.exports=Task;