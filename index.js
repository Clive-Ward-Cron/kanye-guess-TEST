import yeQuotes from './data/kanye';
import { a, b, c, d } from './elements';

const zendpoint = 'http://zenquotes.io/api/quotes/';
// const yendpoint = 'https://api.kanye.rest';

async function fetchZen() {
  console.log('Fetching Zen...');
  const res = await fetch(`http://localhost:1234/`);
  const data = await res.json();
  const saved = { data, t: Date.now() };
  sessionStorage.setItem('zen', JSON.stringify(saved));
  return data;
}

async function init() {
  const z = JSON.parse(sessionStorage.getItem('zen'));
  const y = JSON.parse(sessionStorage.getItem('ye'));

  const ye = y
    ? y
    : !sessionStorage.setItem('ye', JSON.stringify(yeQuotes)) && yeQuotes;
  const zen = z && Date.now() - z.t < 30000 ? z.data : await fetchZen();
  console.log(ye);
  console.log(zen);
}

console.log({ a, b, c, d });

// init();
