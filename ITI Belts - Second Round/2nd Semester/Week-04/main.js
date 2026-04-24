
const API = "https://jsonplaceholder.typicode.com/users";

function getUsers() {
  fetch(API)
    .then(res => res.json())
    .then(data => {
      let table = document.getElementById("usersTable");
      table.innerHTML = "";

      data.forEach(user => {
        table.innerHTML += `
          <tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>
              <a onclick="showDetails(${user.id})">View Details</a>
            </td>
          </tr>
        `;
      });
    });
}

function showDetails(id) {
  fetch(`${API}/${id}`)
    .then(res => res.json())
    .then(user => {
      document.getElementById("details").innerHTML = `
        <p><b>Name:</b> ${user.name}</p>
        <p><b>Email:</b> ${user.email}</p>
        <p><b>Phone:</b> ${user.phone}</p>
        <p><b>Website:</b> ${user.website}</p>
        <p><b>Company:</b> ${user.company.name}</p>
      `;
    });
}