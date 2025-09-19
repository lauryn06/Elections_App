fetch("/Candidate")
.then(response =>response.json())
.then(data=>{
    const tableBody=document.querySelector();
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


