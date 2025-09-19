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
    const tableBody=document.querySelector(".mwinner");
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
    const tableBody=document.querySelector(".wwinner");
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