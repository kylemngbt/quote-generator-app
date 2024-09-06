const apiUrl = "https://api.gameofthronesquotes.xyz/v1/random";

async function getQuote (url) {
  const response = await fetch(url);
  let data = await response.json();
}