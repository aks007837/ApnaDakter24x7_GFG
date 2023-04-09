const express=require("express");
const app=express();

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/Frontend/index.html");
});
app.get("/about", (req, res)=>{
    res.sendFile(__dirname + "/Frontend/about.html");
});
app.get("/contact_us", (req, res)=>{
    res.sendFile(__dirname + "/Frontend/contactus.html");
});
app.get("/login", (req, res)=>{
    res.sendFile(__dirname + "/Frontend/login.html");
});

app.listen(3000, function(){
    console.log("server is running on 3000");
})