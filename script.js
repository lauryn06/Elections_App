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
    const tableBody=document.querySelector(".voterTable tbody");
        tableBody.innerHTML = "";
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
        <td>${vote.FName}</td>
        <td>${vote.LName}</td>
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
            <td>${p.DeclarationDate}</td>
        </tr>`;
        presidentTable.innerHTML += row;
    });
    highlightWinners();
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
        <td>${mp.DeclarationDate}</td>
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
        <td>${w.DeclarationDate}</td>
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


fetch("/api/Officer")
.then(response =>response.json())
.then(data=>{
    const tableBody=document.querySelector(".electionTable");
    data.election.forEach(e => {
        const row=`<tr>
        <td>${e.ElectionOfficerID}</td>
        <td>${e.FName}</td>
        <td>${e.LName}</td>
         <td>${e.Name}</td>
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
fetch("/api/BallotPaper")
.then(response =>response.json())
.then(data=>{
    const tableBody=document.querySelector(".BallotTable tbody");
    tableBody.innerHTML="";
    data.forEach(p=> {

        const row=document.createElement("tr");
const status = p.Status.trim().toLowerCase();
      if (status === "valid") row.classList.add("valid");
      else if (status === "invalid") row.classList.add("invalid");
      else if (status === "blank") row.classList.add("blank");
    
         row.innerHTML=`
        
        <td>${p.BallotPaperID}</td>
        <td>${p.WardID}</td>
        <td>${p.ConstituencyID}</td>
         <td>${p.PositionID}</td>
         <td>${p.TimeStamp}</td>
          <td>${p.Status}</td>
           <td>${p.CandidateID}</td>
        `;
        tableBody.appendChild(row);
    
    });
});

function filterTable(tableClass, inputId) {
    const input = document.getElementById(inputId);
    input.addEventListener("input", () => {
        const filter = input.value.toLowerCase();
        document.querySelectorAll(`${tableClass} tbody tr`).forEach(row => {
            row.style.display = row.textContent.toLowerCase().includes(filter) ? "" : "none";
        });
    });
}

// Example usage:
filterTable(".voterTable", "voterSearch");

     // your data
    const female = 51;
    const male = 69;

    const ctx = document.getElementById('genderChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar', // you can also use 'pie' or 'doughnut'
      data: {
        labels: ['Female', 'Male'],
        datasets: [{
          label: 'Registered Voters',
          data: [female, male],
          backgroundColor: ['pink', 'lightblue']
        }]
      }
    });
 