const API_URL = `https://api.coincap.io/v2/assets`

const fetchCrypto = () => {
  const cryptoList = document.querySelector('#cryptos');

  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => data.data
    .filter((moeda) => moeda.rank <= 10)
    .forEach((crypto, index) => cryptoList.innerHTML += `<li>${index} - ${crypto.name} (${crypto.symbol}): ${Math.floor(crypto.supply) }</li>`));
}

fetchCrypto();