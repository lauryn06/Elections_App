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

// app.get("/Officer",(req,res)=>{
//     try{
//         const[presiding]=awai
//     }

//     // const sql="";
//     // connection.query(sql,(err,results)=>{
//     //     if(err){
//     //         console.err("Failed to fetch data");
//     //         return;
//     //     }
//     //     res.json(results);
//     // });
// });
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
app.get("/Winner",(req,res)=>{
    const sql="";
    connection.query(sql,(err,results)=>{
        if(err){
            console.err("Failed to fetch winners");
            return;
        }
        res.json(results);
    });
});
app.get("/Monitoring",(req,res)=>{
    const sql="";
    connection.query(sql,(err,results)=>{
        if(err){
        console.err("Error fetching Voters");
        return;
        }
        res.json(results);
    });
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
