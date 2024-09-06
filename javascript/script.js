const apiUrl = "https://api.gameofthronesquotes.xyz/v1/random";
const quote = document.querySelector("#quote");
const author = document.querySelector("#author")
const newBtn = document.querySelector("#new-btn");
const tweetBtn = document.querySelector("#tweet-btn");

async function getQuote () {
  const response = await fetch(apiUrl);
  let data = await response.json();
  quote.textContent = data.sentence;
  author.textContent = data.character.name;
}

function tweet() {
  window.open("https://x.com/intent/tweet?text=" + quote.textContent + "   ― " + author.textContent, "Tweet Window", "width=600, height=300")
}

getQuote();
newBtn.addEventListener("click", getQuote);
tweetBtn.addEventListener("click", tweet);

