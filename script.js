fetch("/api/candidate")
.then(response =>response.json())
.then(data=>{
    const tableBody=document.querySelector(".candidateTable");
    data.forEach(Candidate => {
        const row=`<tr>
        <td>${Candidate.CandidateID}</td>
        <td>${Candidate.FName}</td>
        <td>${Candidate.LName}</td>
        <td>${Candidate.PoliticalParty}</td>
        <td>${Candidate.Position}</td>
        <td>${Candidate.Constituency}</td>
        <td>${Candidate.District}</td>
        <td>${Candidate.Ward}</td>
        </tr>`;
        tableBody.innerHTML+=row;
        
    });
});


fetch("/api/Voter")
.then(response =>response.json())
.then(data=>{
    const tableBody=document.querySelector(".voterTable");
    data.forEach(voter => {
        const row=`<tr>
        <td>${voter.VoterID}</td>
        <td>${voter.FirstName}</td>
        <td>${voter.LastName}</td>
        <td>${voter.NRC}</td>
        <td>${voter.Gender}</td>
        </tr>`;
        tableBody.innerHTML +=row;
        
    });
});

fetch("/api/Vote")
.then(response =>response.json())
.then(data=>{
    const tableBody=document.querySelector(".voteTable");
    data.forEach(vote => {
        const row=`<tr>
        <td>${vote.CandidateID}</td>
        <td>${vote.FirstName}</td>
        <td>${vote.LastName}</td>
        <td>${vote.PoliticalParty}</td>
        <td>${vote.Position}</td>
        <td>${vote.District}</td>
        <td>${vote.VoteCount}</td>
        </tr>`;
        tableBody.innerHTML+=row;
        
    });
});
fetch("/api/Winner")
.then(response => response.json())
.then(data => {
    // President Table
    const presidentTable = document.querySelector(".p-winner");
    data.president.forEach(p => {
        const row = `<tr>
            <td>${p.WinnerID}</td>
            <td>${p.FirstName}</td>
            <td>${p.LastName}</td>
            <td>${p.PoliticalParty}</td>
            <td>${p.TotalVotes}</td>
            <td>${p.ElectionYear}</td>
            <td>${p.DateDeclared}</td>
        </tr>`;
        presidentTable.innerHTML += row;
    });
});

fetch("/api/Winner")
.then(response =>response.json())
.then(data=>{
    const tableBody=document.querySelector(".m-Winner");
    data.MemberOfParliament.forEach(mp => {
        const row=`<tr>
        <td>${mp.WinnerID}</td>
        <td>${mp.FirstName}</td>
        <td>${mp.LastName}</td>
        <td>${mp.PoliticalParty}</td>
         <td>${mp.Constituency}</td>
          <td>${mp.District}</td>
        <td>${mp.TotalVotes}</td>
        <td>${mp.ElectionYear}</td>
        <td>${mp.DateDeclared}</td>
        </tr>`;
        tableBody.innerHTML +=row;
    });
});

fetch("/api/Winner")
.then(response =>response.json())
.then(data=>{
    const tableBody=document.querySelector(".w-winner");
    data.Counsellor.forEach(w => {
        const row=`<tr>
        <td>${w.WinnerID}</td>
        <td>${w.FirstName}</td>
        <td>${w.LastName}</td>
        <td>${w.PoliticalParty}</td>
        <td>${w.Ward}</td>
         <td>${w.Constituency}</td>
          <td>${w.District}</td>
        <td>${w.TotalVotes}</td>
        <td>${w.ElectionYear}</td>
        <td>${w.DateDeclared}</td>
        </tr>`;
        tableBody.innerHTML +=row;
    });
});
fetch("/api/PollingStation")
.then(response =>response.json())
.then(data=>{
    const tableBody=document.querySelector(".pollingTable");
    data.forEach(station => {
        const row=`<tr>
        <td>${station.StationID}</td>
        <td>${station.StationName}</td>
        <td>${station.Constituency}</td>
        <td>${station.Ward}</td>
        <td>${station.District}</td>
        </tr>`;
        tableBody.innerHTML +=row;
        
    });
});

fetch("/api/PoliticalParty")
.then(response =>response.json())
.then(data=>{
    const tableBody=document.querySelector(".partyTable");
    data.forEach(party => {
        const row=`<tr>
        <td>${party.PartyID}</td>
        <td>${party.PartyName}</td>
        <td>${party.Abbreviation}</td>
        <td>${party.LeaderFirstName}</td>
        <td>${party.LeaderLastName}</td>
        <td>${party.FoundedYear}</td>
        <td>${party.Location}</td>
        <td>${party.Contact}</td>
        </tr>`;
        tableBody.innerHTML +=row;
        
    });
});
fetch("/api/Monitoring")
.then(response =>response.json())
.then(data=>{
    const tableBody=document.querySelector(".monitorVotes");
    data.VotingActivity.forEach(v => {
        const row=`<tr>
        <td>${v.RegisteredVoters}</td>
        <td>${v.VotersVoted}</td>
        <td>${v.SpoiledBallots}</td>
        <td>${v.ValidVotes}</td>
        </tr>`;
        tableBody.innerHTML +=row;
        
    });
});
fetch("/api/Monitoring")
.then(response =>response.json())
.then(data=>{
    const tableBody=document.querySelector(".monitorBallot");
    data.BallotMaterials.forEach(b => {
        const row=`<tr>
        <td>${b.BallotPapersIssued}</td>
        <td>${b.BallotPapersUsed}</td>
        <td>${b.RemainingBallots}</td>
        <td>${b.BallotBoxStatus}</td>
        </tr>`;
        tableBody.innerHTML +=row;
    });
});
fetch("/api/Monitoring")
.then(response =>response.json())
.then(data=>{
    const tableBody=document.querySelector(".monitorIncidents");
    data.IncidentsReported.forEach(i => {
        const row=`<tr>
        <td>${i.Time}</td>
        <td>${i.IncidentDescription}</td>
        <td>${i.Status}</td>
        </tr>`;
        tableBody.innerHTML +=row;
    });
});
fetch("/api/Monitoring")
.then(response =>response.json())
.then(data=>{
    const tableBody=document.querySelector(".monitorStatus");
    data.Results.forEach(s => {
        const row=`<tr>
        <td>${s.StationID}</td>
        <td>${s.TransmissionTime}</td>
        <td>${s.Status}</td>
        </tr>`;
        tableBody.innerHTML +=row;
    });
});
fetch("/api/Officer")
.then(response =>response.json())
.then(data=>{
    const tableBody=document.querySelector(".electionTable");
    data.election.forEach(e => {
        const row=`<tr>
        <td>${e.ElectionOfficerID}</td>
        <td>${e.FirstName}</td>
        <td>${e.LastName}</td>
         <td>${e.PollingStationName}</td>
          <td>${e.Status}</td>
           <td>${e.Contact}</td>
        </tr>`;
        tableBody.innerHTML +=row;
    });
});
fetch("/api/Officer")
.then(response =>response.json())
.then(data=>{
    const tableBody=document.querySelector(".returningTable");
    data.returning.forEach(r => {
        const row=`<tr>
        <td>${r.ReturningOfficerID}</td>
        <td>${r.FirstName}</td>
        <td>${r.LastName}</td>
         <td>${r.Constituency}</td>
          <td>${r.District}</td>
           <td>${r.Contact}</td>
        </tr>`;
        tableBody.innerHTML +=row;
    });
});
fetch("/api/Officer")
.then(response =>response.json())
.then(data=>{
    const tableBody=document.querySelector(".presidingTable");
    data.presiding.forEach(p=> {
        const row=`<tr>
        <td>${p.PresidingOfficerID}</td>
        <td>${p.FirstName}</td>
        <td>${p.LastName}</td>
         <td>${p.PollingStationName}</td>
          <td>${p.Status}</td>
           <td>${p.Contact}</td>
        </tr>`;
        tableBody.innerHTML +=row;
    });
});