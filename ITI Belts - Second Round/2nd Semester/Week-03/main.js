let students = [];
let id = 1;

function addStudent() {
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;

  if (name.length <= 3) {
    alert("Name must be greater than 3");
    return;
  }

  if (age <= 18) {
    alert("Age must be greater than 18");
    return;
  }

  let student = { id: id++, name, age };
  students.push(student);

  renderTable();
}

function renderTable() {
  let table = document.getElementById("tableBody");
  table.innerHTML = "";

  students.forEach((s, index) => {
    table.innerHTML += `
      <tr>
        <td>${s.id}</td>
        <td>${s.name}</td>
        <td>${s.age}</td>
        <td><button onclick="deleteStudent(${index})">Delete</button></td>
      </tr>
    `;
  });
}

function deleteStudent(index) {
  students.splice(index, 1);
  renderTable();
}


function countElements() {
  let divs = document.getElementsByTagName("div").length;
  let classCount = document.getElementsByClassName("content").length;
  let idExist = document.getElementById("result") ? true : false;
  let names = document.getElementsByName("choose").length;

  document.getElementById("result").innerText =
    `Divs: ${divs}, Class: ${classCount}, ID exist: ${idExist}, Name: ${names}`;
}


function toggleMode() {
  document.body.classList.toggle("dark");
}


let images = [
  "./image1.png",
  "./image2.png",
  "./image3.png"
];

let index = 0;
let interval;

function showImage() {
  document.getElementById("slider").src = images[index];
}

function next() {
  index = (index + 1) % images.length;
  showImage();
}

function prev() {
  index = (index - 1 + images.length) % images.length;
  showImage();
}

function play() {
  interval = setInterval(next, 1000);
}

function stop() {
  clearInterval(interval);
}