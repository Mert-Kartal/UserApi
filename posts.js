let id;

const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get("userId");
const url = new URL(window.location.href);

if (userId <= 10 && userId >= 1) {
  id = userId;
} else {
  id = prompt("1-10 arasında sayı girin:");
  url.searchParams.set("userId", id);
  window.history.pushState({}, "", url.toString());
}
console.log(id);

async function apiData() {
  let data;

  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${id}`
    );
    data = await response.json();
    console.log(data);
    for (i = 0; i < data.length; i++) {
      render(data[i]);
    }
  } catch (err) {
    console.log("Bir hata aldınız:" + err);
  }
  return data;
}

function render(character) {
  document.getElementById("contain").innerHTML += `
        <div class="card col-sm-12 col-md-6 col-lg-4 col-xl-4 m-3" style="width: 18rem;">
        <div class="card-body">
        <h4 class="card-title">${character.id}</h4>
        <p class="card-text">${character.title}</p>
        <p class="card-text">${character.body} </p>
      </div>
    </div>
    `;
}

apiData();
