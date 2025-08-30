const express = require("express");
const path=require("path");

const SERVER="localhost";
const Port=3000;

const app =express();
app.use(express.static(__dirname));

app.get("/",(req,res)=>{
    res.sendFile("\ index.html", { root: __dirname });
});

app.get("/candidate.html",(req,res)=>{
    res.sendFile(__dirname + "\candidate.html");
});

app.get("/Vote.html",(req,res)=>{
    res.sendFile(__dirname + "\Vote.html");
});
app.get("/Voter.html",(req,res)=>{
    res.sendFile(__dirname + "\Voter.html");
});

app.get("/style.css",(req,res)=>{
    res.sendFile(__dirname + "\style.css");
});
app.get("/script.js",(req,res)=>{
    res.sendFile(__dirname + "\script.js");
});

app.listen(Port,SERVER,()=>{
console.log(`Server running at port:${Port}`)
});