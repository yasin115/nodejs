const express = require('express');
const os = require('os');
const app = express();
app.use(express.json());
var userr="";
let users = require('./user');
app.get('/api/users/:id',(req,res)=>{
    for (var i = 0; i < users.length; i++) {
        if(users[i].id==req.params.id){
        var userr = users[i];
        res.send(`<img src="${userr.avatar}"><h3> <b>id </b>: ${userr.id}</h3><p><b>first name</b> : ${userr.first_name}<br> <b>last name</b> : ${userr.last_name} </p><p><b>email : </b>${userr.email}</p>`);
        }
    }if(!userr){
        res.status(404);
        res.json({data:null,message:"no"});
        }
});
app.post("/api/users",(req,res)=>{
    users.push({id:users.length,...req.body});    
    res.json({data:users,message:"added"});
 });
const port = process.env.PORT || 1414;
app.listen(port,()=>console.log(`listening in port ${port}  | | on ${os.type()}{${os.arch()}} | | by user ${os.hostname()} | | base system: ${os.release()} | \n|Date :${os.version()} | \n \n your system info \n all memory ${os.totalmem()}\n free space ram ${os.freemem()} `));