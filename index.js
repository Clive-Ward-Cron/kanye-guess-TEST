const zendpoint = "https://zenquotes.io/api/quotes/";
const yendpoint = "https://api.kanye.rest";

async function fetchZen() {}

async function fetchYe() {
  const res = await fetch(yendpoint);
  const { quote } = await res.json();
  return quote;
}

console.log(fetchYe());
