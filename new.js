const express = require('express');
const {body,validationResult} =require('express-validator');
const app = express();
const os = require('os');
app.use(express.json());
let users = require('./user');
app.post("/api/users",[
body('email','email must be valid').isEmail(),
body('first_name','firstname must be valid').notEmpty(),
body('last_name','last name must be valid').notEmpty(),

],(req,res)=>{
	const errors = validationResult(req);
    if (!errors.isEmpty()) {
		return res.status(400).json({data:null,errors:errors.array(),message:'validation error'});
	}
    users.push({id:users.length,...req.body});    
    res.json({data:users,message:"added"});
 });
	
const port = process.env.PORT || 1414;
app.listen(port,()=>console.log(`listening in port ${port}  | | on ${os.type()}{${os.arch()}} | | by user ${os.hostname()} | | base system: ${os.release()} | \n|Date :${os.version()} | \n \n your system info \n all memory ${os.totalmem()}\n free space ram ${os.freemem()} `));
