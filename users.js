async function apiData() {
  let data;

  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    data = await response.json();
    console.log(data);
    console.log(response);
    for (i = 0; i < data.length; i++) {
      render(data[i]);
    }
  } catch (err) {
    console.log("Bir hata aldınız:" + err);
  }
  return data;
}

apiData();

function render(character) {
  document.getElementById("contain").innerHTML += `
    <div class="card col-sm-12 col-md-6 col-lg-4 col-xl-4 m-3" style="width: 18rem;">
    <div class="card-body">
    <h4 class="card-title">${character.id} ${character.name}</h4>
    <h5 class="card-title">${character.username}</h5>
    <p class="card-text">${character.address.city} ${character.address.street}</p>
    <p class="card-text">${character.company.name} </p>
    <p class="card-text">${character.email} </p>
    <a href="posts.html?userId=${character.id}" class="btn bg-success-subtle m-3">Gönderileri görüntüle</a>
  </div>
</div>
`;
}
