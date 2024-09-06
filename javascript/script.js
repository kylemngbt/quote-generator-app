const apiUrl = "https://api.gameofthronesquotes.xyz/v1/random";
const quote = document.querySelector("#quote");
const author = document.querySelector("#author")
const newBtn = document.querySelector("#new-btn");

async function getQuote () {
  const response = await fetch(apiUrl);
  let data = await response.json();
  quote.textContent = data.sentence;
  author.textContent = data.character.name;
}

newBtn.addEventListener("click", getQuote);

