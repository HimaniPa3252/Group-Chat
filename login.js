const express= require("express")
const router=express.Router()
router.get("/login",(req,res,next)=>{
    res.send(`<form action="/login" method="POST" onsubmit='localStorage.setItem("Username", document.getElementById("Username").value)'>
    <input type="text" name="Username" id="Username"><button type="Submit">Submit</button></form>`)
})
router.post("/login",(req,res,next)=>{
    //console.log(req.body.Username)
    res.redirect("/msg")
})
module.exports=router