//requiring express server
const express=require('express');

const express_layout=require('express-ejs-layouts');

//port is 8000
const port=8000;

//required mongoose and models
const db= require('./config/mongoose');
const Task= require('./models/task');

const ejs=require('ejs');

//app is used to launch express
const app =express();

//rendring static files like home.ejs and style.css
 app.use(express.static("./views"));

 //adding to encrypt the form
 app.use(express.urlencoded());

 //setting view engine as ejs
app.set('view engine','ejs');

app.set('views','./views');

//on url '/' fetching data from server and rendring it to the template
app.get('/',function(req,res){
    Task.find({}).then(function(task){
        console.log("done");
        return res.render('home',{
            title:"home",
            Task:task
        });
        
    }).catch(function(err){
        console.log("error ",err);
    });
    
    });
//taking data from form and then putting it into the database,by Task create
app.post('/create-task',function(req,res){
    Task.create({
        description:req.body.description,
        category:req.body.category,
        date:req.body.date,
    }).then(function(task){
        console.log("done");
        return res.redirect('back');
        }).catch(function(err){
            console.log("error ",err);
        });

    });
//deleting task
app.get('/delete-task',function(req,res){
    var id=req.query;
    var count=Object.keys(id).length;
    for(let i=0;i<count;i++){
        Task.findByIdAndDelete(Object.keys(id)[i]).then(function(task){
            console.log("done");
            return res.redirect('back');
            }).catch(function(err){
                console.log("error ",err);
            });
        };
        //redirecting it to back means to the page after deleting
    return res.redirect('back');
});

//listen on port 8000,means server will run on port 8000
app.listen(port,function(err){
    if(err){
        console.log(`error: ${error}`);
    }
    console.log(`server is running on port:${port}`);
});