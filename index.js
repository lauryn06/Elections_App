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
app.get("/PollingStation",(req,res)=>{
    res.sendFile(path.join(__dirname, "/Polling Station.html"));
});
app.get("/PoliticalParty",(req,res)=>{
    res.sendFile(path.join(__dirname, "/Political Party.html"));
});

//Fetching data from database 

app.get("/api/candidate",(req,res)=>{
    const sql="SELECT c.CandidateID, p.FName, p.LName, pp.Name AS PoliticalParty, pos.Name AS Position, con.Name AS Constituency, d.Name AS District, w.Name AS Ward FROM Candidate c JOIN Person p ON c.PersonID = p.PersonID JOIN PoliticalParty pp ON c.PartyID = pp.PartyID JOIN Position pos ON c.PositionID = pos.PositionID LEFT JOIN Constituency con ON c.ConstituencyID = con.ConstituencyID LEFT JOIN District d ON con.DistrictID = d.DistrictID LEFT JOIN Ward w ON c.WardID = w.WardID WHERE p.PersonID BETWEEN 100 AND 120 ORDER BY pos.Name, c.CandidateID;";
    connection.query(sql,(err,results)=>{
        if(err){
        console.error("Error fetching candidates");
        return;
        }
        res.json(results);
    });
});

app.get("/api/Vote",(req,res)=>{
    const sql="";
    connection.query(sql,(err,results)=>{
        if(err){
        console.error("Error fetching Votes");
        return;
        }
        res.json(results);
    });
});
app.get("/api/Officer", (req, res) => {
    connection.query("SELECT * FROM PresidingOfficer", (err, presiding) => {
        if (err) return res.status(500).send("Error fetching Presiding Officers");

        connection.query("SELECT * FROM ReturningOfficer", (err, returning) => {
            if (err) return res.status(500).send("Error fetching Returning Officers");

            connection.query("SELECT * FROM ElectionOfficer", (err, election) => {
                if (err) return res.status(500).send("Error fetching Election Officers");

                res.json({ presiding, returning, election });
            });
        });
    });
});


app.get("/api/Voter",(req,res)=>{
    const sql="";
    connection.query(sql,(err,results)=>{
        if(err){
            console.error("Failed to fetch voters");
            return;
        }
        res.json(results);
    });
});
app.get("/api/Winner", (req, res) => {
    // Fetch president
    connection.query("SELECT * FROM PresidingOfficer", (err, president) => {
        if (err) {
            console.error("Error fetching president:", err);
            return res.status(500).send("Error fetching president data");
        }

        // Fetch Member of Parliament
        connection.query("SELECT * FROM ReturningOfficer", (err, MemberOfParliament) => {
            if (err) {
                console.error("Error fetching Member of Parliament:", err);
                return res.status(500).send("Error fetching MP data");
            }

            // Fetch Counsellor
            connection.query("SELECT * FROM ElectionOfficer", (err, Counsellor) => {
                if (err) {
                    console.error("Error fetching Counsellor:", err);
                    return res.status(500).send("Error fetching Counsellor data");
                }

                // Send all results as JSON
                res.json({
                    president,
                    MemberOfParliament,
                    Counsellor
                });
            });
        });
    });
});

app.get("/api/Monitoring", (req, res) => {
    // Fetch VotingActivity
    connection.query("SELECT * FROM PresidingOfficer", (err, VotingActivity) => {
        if (err) {
            console.error("Error fetching Voting Activity:", err);
            return res.status(500).send("Error fetching Voting Activity");
        }

        // Fetch BallotMaterials
        connection.query("SELECT * FROM ReturningOfficer", (err, BallotMaterials) => {
            if (err) {
                console.error("Error fetching Ballot Materials:", err);
                return res.status(500).send("Error fetching Ballot Materials");
            }

            // Fetch IncidentsReported
            connection.query("SELECT * FROM ElectionOfficer", (err, IncidentsReported) => {
                if (err) {
                    console.error("Error fetching Incidents Reported:", err);
                    return res.status(500).send("Error fetching Incidents Reported");
                }

                // Fetch Results
                connection.query("SELECT * FROM ElectionOfficer", (err, Results) => {
                    if (err) {
                        console.error("Error fetching Results:", err);
                        return res.status(500).send("Error fetching Results");
                    }

                    // Send all results as JSON
                    res.json({
                        VotingActivity,
                        BallotMaterials,
                        IncidentsReported,
                        Results
                    });
                });
            });
        });
    });
});


app.get("/api/PollingStation",(req,res)=>{
    const sql="";
    connection.query(sql,(err,results)=>{
        if(err){
        console.error("Error fetching Voters");
        return;
        }
        res.json(results);
    });
});
app.get("/api/PoliticalParty",(req,res)=>{
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
