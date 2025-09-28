document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault(); // stop form reload

  const username = document.getElementById("username").value.trim().toLowerCase();
  const password = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("error-message");

  // Check credentials
  if (username === "voter" && password === "1234") {
    window.location.href = "Voter.html";
  } 
  else if (username === "candidate" && password === "1234") {
    window.location.href = "Candidate.html";
  } 
  else if (username === "voter&candidate" && password === "1234") {
    window.location.href = "Index.html";
  } 
  else {
    errorMsg.textContent = "Invalid username or password!";
  }
});
