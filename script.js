
//voter registration form
const VoterFName=document.querySelector(".VFname");
const VoterLName=document.querySelector(".VLname");
const VoterNRC=document.querySelector("VNRC");
const VoterGender=document.querySelector(".Vgender");

const news=document.querySelector(".feedback");

const regButton=document.querySelector(".VREGB");

regButton.addEventListener("click", ()=>{

news.textContent="You have sucCessfully registered!!"
news.computedStyleMap.color="3B82F6";

const First_name=document.querySelector(".FName");
First_name.textContent=VoterFName;

const Last_name=document.querySelector(".LName");
Last_name.textContent=VoterLName;

const NRC=document.querySelector(".NRC");
NRC.textContent=VoterNRC;

const Gender=document.querySelector(".Gender");
Gender.textContent=VoterGender;
})



