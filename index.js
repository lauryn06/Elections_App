const express = require("express");
const path =require("path");

const SERVER="localhost";
const Port=3000;

const app =express();
app.use(express.static(__dirname));

app.get("/",(req, res)=>{
    res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/candidate",(req,res)=>{
    res.sendFile(path.join(__dirname, "/candidate.html"));
});

app.get("/Vote",(req,res)=>{
    res.sendFile(path.join(__dirname, "/Vote.html"));
});
app.get("/Voter",(req,res)=>{
    res.sendFile(path.join(__dirname, "/Voter.html"));
});

app.get("/Results",(req,res)=>{
    res.sendFile(path.join(__dirname, "/Results.html"));
});
app.listen(Port,SERVER,()=>{
console.log(`Server running at http://localhost:${Port}`)
});
