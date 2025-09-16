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
    res.sendFile(path.join(__dirname, "/voter.html"));
});

app.get("/Winner",(req,res)=>{
    res.sendFile(path.join(__dirname, "/Winner.html"));
});
app.get("/Monitoring",(req,res)=>{
    res.sendFile(path.join(__dirname, "/Monitoring.html"));
});
app.get("/Polling Station",(req,res)=>{
    res.sendFile(path.join(__dirname, "/Polling Station.html"));
});
app.get("/Political Party",(req,res)=>{
    res.sendFile(path.join(__dirname, "/Political Party.html"));
});
app.listen(Port,SERVER,()=>{
console.log(`Server running at http://localhost:${Port}`)
});
