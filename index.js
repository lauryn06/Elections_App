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

app.get("/BallotPaper",(req,res)=>{
    res.sendFile(path.join(__dirname, "/BallotPaper.html"));
});

//Fetching data from database 

app.get("/api/candidate",(req,res)=>{
    const sql="SELECT c.CandidateID, p.FName, p.LName, pp.Name AS PoliticalParty, pos.Name AS Position, con.Name AS Constituency, d.Name AS District, w.Name AS Ward FROM Candidate c JOIN Person p ON c.PersonID = p.PersonID JOIN PoliticalParty pp ON c.PartyID = pp.PartyID JOIN Position pos ON c.PositionID = pos.PositionID LEFT JOIN Constituency con ON c.ConstituencyID = con.ConstituencyID LEFT JOIN District d ON con.DistrictID = d.DistrictID LEFT JOIN Ward w ON c.WardID = w.WardID WHERE p.PersonID BETWEEN 100 AND 120 ORDER BY pos.Name, c.CandidateID";
    connection.query(sql,(err,results)=>{
        if(err){
        console.error("Error fetching candidates");
        return;
        }
        res.json(results);
    });
});

app.get("/api/Vote",(req,res)=>{
    const sql="SELECT c.CandidateID, p.FName, p.LName, pp.Name AS PoliticalParty, pos.Name AS Position, d.Name AS District, COUNT(v.CandidateID) AS VoteCount FROM Candidate c JOIN Person p ON c.PersonID = p.PersonID JOIN PoliticalParty pp ON c.PartyID = pp.PartyID JOIN Position pos ON c.PositionID = pos.PositionID LEFT JOIN Constituency con ON c.ConstituencyID = con.ConstituencyID LEFT JOIN District d ON con.DistrictID = d.DistrictID LEFT JOIN Vote v ON c.CandidateID = v.CandidateID WHERE p.PersonID BETWEEN 100 AND 120 GROUP BY c.CandidateID, p.FName, p.LName, pp.Name, pos.Name, d.Name ORDER BY pos.Name, c.CandidateID";
    connection.query(sql,(err,results)=>{
        if(err){
        console.error("Error fetching Votes");
        return;
        }
        res.json(results);
    });
});
app.get("/api/Officer", (req, res) => {
    connection.query("SELECT po.OfficerID AS PresidingOfficerID, p.FName AS FirstName, p.LName AS LastName, ps.Name AS PollingStationName, po.Status, po.Contact FROM PresidingOfficer po JOIN Person p ON po.PersonID = p.PersonID LEFT JOIN PollingStation ps ON po.PollingStationID = ps.StationID ", (err, presiding) => {
        if (err) return res.status(500).send("Error fetching Presiding Officers");

        connection.query("SELECT ro.OfficerID AS ReturningOfficerID, p.FName AS FirstName, p.LName AS LastName, c.Name AS Constituency, d.Name AS District, ro.ContactInfo AS Contact FROM ReturningOfficer ro JOIN Person p ON ro.PersonID = p.PersonID JOIN Constituency c ON ro.ConstituencyID = c.ConstituencyID LEFT JOIN District d ON c.DistrictID = d.DistrictID", (err, returning) => {
            if (err) return res.status(500).send("Error fetching Returning Officers");

            connection.query("SELECT eo.ElectionOfficerID, p.FName AS FirstName, p.LName AS LastName, ps.Name AS PollingStationName, eo.Contact FROM ElectionOfficer eo JOIN Person p ON eo.PersonID = p.PersonID LEFT JOIN PollingStation ps ON eo.PollingStationID = ps.StationID", (err, election) => {
                if (err) return res.status(500).send("Error fetching Election Officers");

                res.json({ presiding, returning, election });
            });
        });
    });
});


app.get("/api/Voter",(req,res)=>{
    const sql="SELECT v.VoterID, p.FName AS FirstName, p.LName AS LastName, p.NRC, p.Gender FROM Voter v JOIN Person p ON v.PersonID = p.PersonID";
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
    connection.query("SELECT w.WinnerID, p.FName AS FirstName, p.LName AS LastName, pp.Name AS PoliticalParty, w.VotesReceived AS TotalVotes, YEAR(e.Date) AS ElectionYear, w.DeclarationDate FROM Winner w JOIN Candidate c ON w.CandidateID = c.CandidateID JOIN Person p ON c.PersonID = p.PersonID JOIN PoliticalParty pp ON c.PartyID = pp.PartyID JOIN Election e ON w.ElectionID = e.ElectionID WHERE c.PositionID = 1", (err, president) => {
        if (err) {
            console.error("Error fetching president:", err);
            return res.status(500).send("Error fetching president data");
        }

        // Fetch Member of Parliament
        connection.query("SELECT w.WinnerID, p.FName AS FirstName, p.LName AS LastName, pp.Name AS PoliticalParty, con.Name AS Constituency, d.Name AS District, w.VotesReceived AS TotalVotes, YEAR(e.Date) AS ElectionYear, w.DeclarationDate FROM Winner w JOIN Candidate c ON w.CandidateID = c.CandidateID JOIN Person p ON c.PersonID = p.PersonID JOIN PoliticalParty pp ON c.PartyID = pp.PartyID LEFT JOIN Constituency con ON w.ConstituencyID = con.ConstituencyID LEFT JOIN District d ON con.DistrictID = d.DistrictID JOIN Election e ON w.ElectionID = e.ElectionID WHERE c.PositionID = 2", (err, MemberOfParliament) => {
            if (err) {
                console.error("Error fetching Member of Parliament:", err);
                return res.status(500).send("Error fetching MP data");
            }

            // Fetch Counsellor
            connection.query("SELECT w.WinnerID, p.FName AS FirstName, p.LName AS LastName, pp.Name AS PoliticalParty, wa.Name AS Ward, con.Name AS Constituency, d.Name AS District, w.VotesReceived AS TotalVotes, YEAR(e.Date) AS ElectionYear, w.DeclarationDate FROM Winner w JOIN Candidate c ON w.CandidateID = c.CandidateID JOIN Person p ON c.PersonID = p.PersonID JOIN PoliticalParty pp ON c.PartyID = pp.PartyID LEFT JOIN Ward wa ON w.WardID = wa.WardID LEFT JOIN Constituency con ON w.ConstituencyID = con.ConstituencyID LEFT JOIN District d ON con.DistrictID = d.DistrictID JOIN Election e ON w.ElectionID = e.ElectionID WHERE c.PositionID = 3", (err, Counsellor) => {
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
    connection.query("SELECT 120 AS RegisteredVoters, 107 AS VotersVoted, 7 AS SpoiledBallots,  100 AS ValidVotes", (err, VotingActivity) => {
        if (err) {
            console.error("Error fetching Voting Activity:", err);
            return res.status(500).send("Error fetching Voting Activity");
        }

        // Fetch BallotMaterials
        connection.query("SELECT SUM(bb.TotalBallots) AS BallotPapersIssued, COUNT(bp.BallotPaperID) AS BallotPapersUsed, SUM(bb.TotalBallots) - COUNT(bp.BallotPaperID) AS RemainingBallots, CASE WHEN SUM(bb.TotalBallots) - COUNT(bp.BallotPaperID) > 0 THEN 'Not Full' ELSE 'Full' END AS BallotBoxStatus FROM BallotBox bb LEFT JOIN BallotPaper bp ON bb.ConstituencyID = bp.ConstituencyID;", (err, BallotMaterials) => {
            if (err) {
                console.error("Error fetching Ballot Materials:", err);
                return res.status(500).send("Error fetching Ballot Materials");
            }

            // // Fetch IncidentsReported
            // connection.query("SELECT * FROM ElectionOfficer", (err, IncidentsReported) => {
            //     if (err) {
            //         console.error("Error fetching Incidents Reported:", err);
            //         return res.status(500).send("Error fetching Incidents Reported");
            //     }

            //     // Fetch Results
            //     connection.query("SELECT * FROM ElectionOfficer", (err, Results) => {
            //         if (err) {
            //             console.error("Error fetching Results:", err);
            //             return res.status(500).send("Error fetching Results");
            //         }

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
    


app.get("/api/PollingStation",(req,res)=>{
    const sql="SELECT ps.StationID, ps.Name AS StationName, c.Name AS Constituency, d.Name AS District FROM PollingStation ps LEFT JOIN Constituency c ON ps.ConstituencyID = c.ConstituencyID LEFT JOIN District d ON c.DistrictID = d.DistrictID";
    connection.query(sql,(err,results)=>{
        if(err){
        console.error("Error fetching Voters");
        return;
        }
        res.json(results);
    });
});
app.get("/api/PoliticalParty",(req,res)=>{
    const sql="SELECT PartyID, Name AS PartyName, Abbreviation, Leader_FName AS LeaderFirstName, Leader_LName AS LeaderLastName, FounderYear, Location, Contact_Info AS Contact FROM PoliticalParty";
    connection.query(sql,(err,results)=>{
        if(err){
        console.error("Error fetching Voters");
        return;
        }
        res.json(results);
    });
});
app.get("/api/BallotPaper",(req,res)=>{
    const sql="SELECT bp.BallotPaperID,bp.WardID,bp.ConstituencyID,bp.PositionID,bp.CandidateID,bp.Status,bp.TimeStampFROM BallotPaper bp;";
    connection.query(sql,(err,results)=>{
        if(err){
        console.error("Error fetching BallotPapers");
        return;
        }
        res.json(results);
    });
});

app.listen(Port,SERVER,()=>{
console.log(`Server running at http://localhost:${Port}`)
});
