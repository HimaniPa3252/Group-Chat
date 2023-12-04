const fs=require("fs")
const express= require("express");
const app= express();
app.use(express.urlencoded({extended:false}))
app.get("/login",(req,res,next)=>{
    res.send(`<form action="/login" method="POST" onsubmit='localStorage.setItem("Username", document.getElementById("Username").value)'>
    <input type="text" name="Username" id="Username"><button type="Submit">Submit</button></form>`)
})
app.post("/login",(req,res,next)=>{
    //console.log(req.body.Username)
    res.redirect("/msg")
})
app.get("/msg",(req,res)=>{
    fs.readFile("message.txt",(err,data)=>{
        if (err) {
            data="No chats found";
        } else {
        res.send(`<h4>${data}</h4><form action="/msg" method="POST" onsubmit='document.getElementById("Username").value=localStorage.getItem("Username")'>
            <input type="hidden" name="Username" id="Username"><input type="text" name="msg" id="msg"><button type="Submit">Send</button></form>`)
        }
    })
    
})
app.post("/msg",(req,res)=>{
    console.log(req.body.msg)
    console.log(req.body.Username)
    fs.writeFile("message.txt",`${req.body.Username}:${req.body.msg}, `,{flag:"a"},(err)=>{
        if(err){
            console.log("error")
        }else{
            res.redirect("/msg") 
        }
    })
    
})
app.listen(3000)


