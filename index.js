const limit = 1;
const API_KEY = "2tTYYH0pnjvtOvap1NF9dA==kHFzOPYEbdflm4lK";
const BASE_URL = "https://api.api-ninjas.com/v1/dadjokes?limit=" + limit;
async function getJokes(base_url, api_key) {
  try {
    let results = await fetch(base_url, {
      headers: { "X-Api-Key": api_key },
    });
    let jokes = await results.json();
    return jokes;
  } catch (error) {
    console.log(error);
  }
}

function displayJoke() {
  let jokeParagraph = document.getElementById("joke");
  let jokeButton = document.getElementById("getJokeBtn");
  // Display a random joke when button is clicked
  jokeButton.onclick = () => {
    onBtnClicked(jokeParagraph);
  };
}

function onBtnClicked(paragraph) {
  getJokes(BASE_URL, API_KEY)
    .then((data) => {
      paragraph.innerHTML = data[0].joke;
    })
    .catch((error) => {
      console.log(error);
    });
}

displayJoke();
