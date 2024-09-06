const apiUrl = "https://api.gameofthronesquotes.xyz/v1/random";
const quote = document.querySelector("#quote");
const author = document.querySelector("#author")

async function getQuote (url) {
  const response = await fetch(url);
  let data = await response.json();
  quote.textContent = data.sentence;
  author.textContent = data.character.name;
}