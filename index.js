const express = require("express");
const connection= require('./Database');
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
app.get("/Officer",(req,res)=>{
    res.sendFile(path.join(__dirname, "/Officer.html"));
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

//Fetching data from database 

app.get("/candidate",(req,res)=>{
    const sql="";
    connection.query(sql,(err,results)=>{
        if(err){
        console.err("Error fetching candidates");
        return;
        }
        res.json(results);
    });
});

app.get("/Vote",(req,res)=>{
    const sql="";
    connection.query(sql,(err,results)=>{
        if(err){
        console.err("Error fetching Votes");
        return;
        }
        res.json(results);
    });
});
app.get("/Officer", async (req, res) => {
    try {
        const [presiding] = await pool.query("SELECT * FROM PresidingOfficer");
        const [returning] = await pool.query("SELECT * FROM ReturningOfficer");
        const [election] = await pool.query("SELECT * FROM ElectionOfficer");

        res.json({
            presiding,
            returning,
            election
        });
    } catch (err) {
        res.status(500).send("Error fetching officer data");
    }
});


app.get("/Voter",(req,res)=>{
    const sql="";
    connection.query(sql,(err,results)=>{
        if(err){
            console.err("Failed to fetch voters");
            return;
        }
        res.json(results);
    });
});
app.get("/Winner", async (req, res) => {
    try {
        const [president] = await pool.query("SELECT * FROM PresidingOfficer");
        const [MemberOfParliament] = await pool.query("SELECT * FROM ReturningOfficer");
        const [Counsellor] = await pool.query("SELECT * FROM ElectionOfficer");

        res.json({
            president,
            MemberOfParliament,
            Counsellor
        });
    } catch (err) {
        res.status(500).send("Error fetching winner data");
    }
});
app.get("/Monitoring", async (req, res) => {
    try {
        const [VotingActivity] = await pool.query("SELECT * FROM PresidingOfficer");
        const [BallotMaterials] = await pool.query("SELECT * FROM ReturningOfficer");
        const [IncidentsReported] = await pool.query("SELECT * FROM ElectionOfficer");
        const [Results] = await pool.query("SELECT * FROM ElectionOfficer");


        res.json({
            VotingActivity,
            BallotMaterials,
            IncidentsReported,
            Results
        });
    } catch (err) {
        res.status(500).send("Error fetching winner data");
    }
});

app.get("/Polling Station",(req,res)=>{
    const sql="";
    connection.query(sql,(err,results)=>{
        if(err){
        console.err("Error fetching Voters");
        return;
        }
        res.json(results);
    });
});
app.get("/Political Party",(req,res)=>{
    const sql="";
    connection.query(sql,(err,results)=>{
        if(err){
        console.err("Error fetching Voters");
        return;
        }
        res.json(results);
    });
});

app.listen(Port,SERVER,()=>{
console.log(`Server running at http://localhost:${Port}`)
});
