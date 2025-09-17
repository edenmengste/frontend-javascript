interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "selman",
  lastName: "aman",
  age: 21,
  location: "Addis Ababa",
};

const student2: Student = {
  firstName: "Mahi",
  lastName: "Teshome",
  age: 22,
  location: "Dire Dawa",
};

// Array of students list
const studentsList: Student[] = [student1, student2];

// Create table elements
const table = document.createElement("table");
table.style.border = "1px solid black";
table.style.borderCollapse = "collapse";

// the Table header
const headerRow = document.createElement("tr");
const header1 = document.createElement("th");
header1.textContent = "First Name";
header1.style.border = "1px solid black";
header1.style.padding = "4px";
const header2 = document.createElement("th");
header2.textContent = "Location";
header2.style.border = "1px solid black";
header2.style.padding = "4px";
headerRow.appendChild(header1);
headerRow.appendChild(header2);
table.appendChild(headerRow);

// Table rows
studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const cell1 = document.createElement("td");
  cell1.textContent = student.firstName;
  cell1.style.border = "1px solid black";
  cell1.style.padding = "4px";

  const cell2 = document.createElement("td");
  cell2.textContent = student.location;
  cell2.style.border = "1px solid black";
  cell2.style.padding = "4px";

  row.appendChild(cell1);
  row.appendChild(cell2);
  table.appendChild(row);
});

// Append table to the body
document.body.appendChild(table);
