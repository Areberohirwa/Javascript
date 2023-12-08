console.log('.........main.js is running.......');

fetch('https://jsonplaceholder.org/comments/').then(function (response) {
  console.log('response ', response);

  if (response.ok) {
    // dan halen we de json data
    return response.text();
  } else {
    alert('Er is iets misgegaan met het ophalen van data!')
  }
}).then(function (json) {
  console.log('Ontvang json Data: ', json);

  const data = JSON.parse(json);
  console.log(data);
})

fetch('https://pokeapi.co/api/v2/pokemon/?limit=10').then((responses) => responses.json())
  .then((datas) => {
    console.log('Ontavang data: ', datas);

    const pokemons = datas.results;

    for (let i = 0; i < pokemons.length; i++) {
      const pokemon = pokemons[i];
      console.log('pokemon: ', pokemon)
      let ulList = document.querySelector('ul')

      ulList.innerHTML += '<li>' + pokemon.name + '</li>';
      ulList.innerHTML += '<li>' + pokemon.url + '</li>';
    }
  })

fetch('https://dummyjson.com/products').then((credits) => credits.json())
  .then((objData) => {
    console.log('Ontvang objdata: ', objData);
    const products = objData.products;


    for (let counter = 0; counter < products.length; counter++) {
      const objDatasProperty = products[counter];
      console.log('products Zijn: ', objDatasProperty);
      let body = document.querySelector('.container')
      const htmlCode = displayOnWeb(objDatasProperty);

      body.innerHTML += htmlCode;
    }
  })

  function displayOnWeb(objDatasProperty) {
    const htmlCard = `
    <div class="card">
    <p>${objDatasProperty.brand}</p>
    <p>${objDatasProperty.category}</p>
    <p>${objDatasProperty.description}</p>
    <p>${objDatasProperty.discountPercentage}</p>
    <p>${objDatasProperty.id}</p>
    <p>${objDatasProperty.price}</p>
    <p>${objDatasProperty.rating}</p>
    <p>${objDatasProperty.stock}</p>
    <p>${objDatasProperty.thumbnail}</p>
    <p>${objDatasProperty.title}</p>
</div>`;

return htmlCard;
  }