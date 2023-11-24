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