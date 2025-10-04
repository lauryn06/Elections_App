const nameInput = document.getElementById("nameSearch");
const positionSelect = document.getElementById("positionFilter");
const tableRows = document.querySelectorAll(".candidateTable tbody tr");

// SEARCH by name (independent)
nameInput.addEventListener("input", () => {
  const nameValue = nameInput.value.toLowerCase();

  tableRows.forEach(row => {
    const firstName = row.cells[1].textContent.toLowerCase();
    const lastName = row.cells[2].textContent.toLowerCase();

    if (firstName.includes(nameValue) || lastName.includes(nameValue)) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
});

// FILTER by position (independent)
positionSelect.addEventListener("change", () => {
  const positionValue = positionSelect.value.toLowerCase();

  tableRows.forEach(row => {
    const position = row.cells[4].textContent.toLowerCase();

    if (!positionValue || position === positionValue) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
});
