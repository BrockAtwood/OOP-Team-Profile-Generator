function generateHTML(data) {
  return `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- CSS only -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="./style.css" />

    <title>Team Profile Generator</title>
  </head>
  <body>
    <header>
      <h1 class="header">My Team</h1>
    </header>
    <main class="cardarea">
      <div class="card" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">${data.managerName}</h5>
          <p class="card-text">${data.teamMember}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${data.managerId}</li>
          <li class="list-group-item">Email: ${data.managerEmail}</li>
          <li class="list-group-item">OfficeNumber: ${data.managerofficeNumber}</li>
        </ul>
      </div>
      <div class="card" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">${data.engineerName}</h5>
          <p class="card-text">${data.teamMember}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${data.engineerId}</li>
          <li class="list-group-item">Email: ${data.engineerEmail}</li>
          <li class="list-group-item">GitHub: github.com/${data.GitHub}</li>
        </ul>
      </div>
      <div class="card" style="width: 18rem">
        <div class="card-body">
        <h5 class="card-title">${data.engineerName}</h5>
        <p class="card-text">${data.teamMember}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${data.engineerId}</li>
        <li class="list-group-item">Email: ${data.engineerEmail}</li>
        <li class="list-group-item">GitHub: github.com/${data.GitHub}</li>
        </ul>
      </div>
      <div class="card" style="width: 18rem">
        <div class="card-body">
        <h5 class="card-title">${data.engineerName}</h5>
        <p class="card-text">${data.teamMember}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${data.engineerId}</li>
        <li class="list-group-item">Email: ${data.engineerEmail}</li>
        <li class="list-group-item">GitHub: github.com/${data.GitHub}</li>
        </ul>
      </div>
      <div class="card" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">${data.internName}</h5>
          <p class="card-text">${data.teamMember}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${data.internId}</li>
          <li class="list-group-item">Email: ${data.internEmail}</li>
          <li class="list-group-item">School ${data.internSchool}</li>
        </ul>
      </div>
    </main>
  </body>
</html>

    `;
}

module.exports = htmlGENERATOR;
