const express=require("express")
const router=express.Router()
const fs=require("fs")
router.get("/msg",(req,res)=>{
    fs.readFile("message.txt",(err,data)=>{
        if (err) {
            data="No chats found";
        } else {
        res.send(`<h4>${data}</h4><form action="/msg" method="POST" onsubmit='document.getElementById("Username").value=localStorage.getItem("Username")'>
            <input type="hidden" name="Username" id="Username"><input type="text" name="msg" id="msg"><button type="Submit">Send</button></form>`)
        }
    })
    
})
router.post("/msg",(req,res)=>{
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
module.exports=router