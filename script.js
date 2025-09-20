fetch("/Candidate")
.then(response =>response.json())
.then(data=>{
    const tableBody=document.querySelector(".candidateTable");
    data.forEach(Candidate => {
        const row=`<tr>
        <td>${Candidate.CandidateID}</td>
        <td>${Candidate.FirstName}</td>
        <td>${Candidate.LastName}</td>
        <td>${Candidate.DOB}</td>
        <td>${Candidate.PoliticalParty}</td>
        <td>${Candidate.Position}</td>
        <td>${Candidate.Constituency}</td>
        <td>${Candidate.District}</td>
        <td>${Candidate.Ward}</td>
        </tr>`;
        tableBody.innerHTML+=row;
        
    });
});


fetch("/Voter")
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

fetch("/Votes")
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


fetch("/Winner")
.then(response =>response.json())
.then(data=>{
    const tableBody=document.querySelector(".m-winner");
    data.forEach(winner => {
        const row=`<tr>
        <td>${winner.WinnerID}</td>
        <td>${winner.FirstName}</td>
        <td>${winner.LastName}</td>
        <td>${winner.PoliticalParty}</td>
         <td>${winner.Constituency}</td>
          <td>${winner.District}</td>
        <td>${winner.TotalVotes}</td>
        <td>${winner.ElectionYear}</td>
        <td>${winner.DateDeclared}</td>
        </tr>`;
        tableBody.innerHTML +=row;
    });
});

fetch("/Winner")
.then(response =>response.json())
.then(data=>{
    const tableBody=document.querySelector(".w-winner");
    data.forEach(winner => {
        const row=`<tr>
        <td>${winner.WinnerID}</td>
        <td>${winner.FirstName}</td>
        <td>${winner.LastName}</td>
        <td>${winner.PoliticalParty}</td>
        <td>${winner.Ward}</td>
         <td>${winner.Constituency}</td>
          <td>${winner.District}</td>
        <td>${winner.TotalVotes}</td>
        <td>${winner.ElectionYear}</td>
        <td>${winner.DateDeclared}</td>
        </tr>`;
        tableBody.innerHTML +=row;
    });
});
fetch("/Polling Station")
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

fetch("/Political Party")
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
fetch("/Monitoring")
.then(response =>response.json())
.then(data=>{
    const tableBody=document.querySelector(".monitorVotes");
    data.forEach(monitor => {
        const row=`<tr>
        <td>${monitor.RegisteredVoters}</td>
        <td>${monitor.VotersVoted}</td>
        <td>${monitor.SpoiledBallots}</td>
        <td>${monitor.ValidVotes}</td>
        </tr>`;
        tableBody.innerHTML +=row;
        
    });
});
fetch("/Monitoring")
.then(response =>response.json())
.then(data=>{
    const tableBody=document.querySelector(".monitorBallot");
    data.forEach(monitor => {
        const row=`<tr>
        <td>${monitor.BallotPapersIssued}</td>
        <td>${monitor.BallotPapersUsed}</td>
        <td>${monitor.RemainingBallots}</td>
        <td>${monitor.BallotBoxStatus}</td>
        </tr>`;
        tableBody.innerHTML +=row;
    });
});
fetch("/Monitoring")
.then(response =>response.json())
.then(data=>{
    const tableBody=document.querySelector(".monitorIncidents");
    data.forEach(monitor => {
        const row=`<tr>
        <td>${monitor.Time}</td>
        <td>${monitor.IncidentDescription}</td>
        <td>${monitor.Status}</td>
        </tr>`;
        tableBody.innerHTML +=row;
    });
});
fetch("/Monitoring")
.then(response =>response.json())
.then(data=>{
    const tableBody=document.querySelector(".monitorStatus");
    data.forEach(monitor => {
        const row=`<tr>
        <td>${monitor.StationID}</td>
        <td>${monitor.TransmissionTime}</td>
        <td>${monitor.Status}</td>
        </tr>`;
        tableBody.innerHTML +=row;
    });
});
fetch("/Officer")
.then(response =>response.json())
.then(data=>{
    const tableBody=document.querySelector(".electionTable");
    data.forEach(election => {
        const row=`<tr>
        <td>${election.PresidingOfficerID}</td>
        <td>${election.FirstName}</td>
        <td>${election.LastName}</td>
         <td>${election.PollingStationName}</td>
          <td>${election.Status}</td>
           <td>${election.Contact}</td>
        </tr>`;
        tableBody.innerHTML +=row;
    });
});
fetch("/Officer")
.then(response =>response.json())
.then(data=>{
    const tableBody=document.querySelector(".returningTable");
    data.forEach(returning => {
        const row=`<tr>
        <td>${returning.ReturningOfficerID}</td>
        <td>${returning.FirstName}</td>
        <td>${returning.LastName}</td>
         <td>${returning.Constituency}</td>
          <td>${returning.District}</td>
           <td>${returning.Contact}</td>
        </tr>`;
        tableBody.innerHTML +=row;
    });
});
fetch("/Officer")
.then(response =>response.json())
.then(data=>{
    const tableBody=document.querySelector(".presidingTable");
    data.forEach(presiding=> {
        const row=`<tr>
        <td>${presiding.PresidingOfficerID}</td>
        <td>${presiding.FirstName}</td>
        <td>${presiding.LastName}</td>
         <td>${presiding.PollingStationName}</td>
          <td>${presiding.Status}</td>
           <td>${presiding.Contact}</td>
        </tr>`;
        tableBody.innerHTML +=row;
    });
});