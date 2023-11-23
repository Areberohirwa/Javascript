console.log('........main loaded...............');

const productOne = {
    type: 'MacBook Pro',
    price: 2345,
    description: 'asdfghjjytrewertyu',
}

console.log(productOne);

const jsonProduct = JSON.stringify(productOne);
console.log(jsonProduct);
/////

const jsonComment = `
  {
    "firstname": "Judeska",
    "email": "judeska@example.com"
  }`;

const objProduct = JSON.parse(jsonComment);
console.log(objProduct.email);

// Huiswerk 

console.log('________________Huiswerk__________________');

// opdr 1a 

const jsonNames = `
{
    "firstname": "Judeska",
    "email": "judeska@example.com"
}
  `;

const objNames = JSON.parse(jsonNames);
console.log(objNames);


//opdr 1b

const personalInfos = `
 {
    "id": 1,
    "firstname": "John",
    "lastname": "Doe",
    "email": "johndoe@example.com",
    "birthDate": "1973-01-22",
    "phone": "(555) 555-1234",
    "website": "www.johndoe.com"
 }
  `;
const objPersonalInfos = JSON.parse(personalInfos);
console.log(objPersonalInfos.id);
console.log(objPersonalInfos.firstname);
console.log(objPersonalInfos.lastname);

// opdr 2 
const jsonDetails = `
{
    "id": 1,
    "slug": "lorem-ipsum",
    "url": "https://jsonplaceholder.org/posts/lorem-ipsum",
    "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "content": "Ante taciti nulla sit libero orci sed nam. Sagittis suspendisse gravida ornare iaculis cras nullam varius ac ullamcorper.",
    "image": "https://dummyimage.com/800x430/FFFFFF/lorem-ipsum.png&text=jsonplaceholder.org",
    "thumbnail": "https://dummyimage.com/200x200/FFFFFF/lorem-ipsum.png&text=jsonplaceholder.org",
    "status": "published",
    "category": "lorem",
    "publishedAt": "04/02/2023 13:25:21",
    "updatedAt": "14/03/2023 17:22:20",
    "userId": 1
}
`;

const objDetails = JSON.parse(jsonDetails);
console.log( 'De titel is; ', objDetails.title);
console.log( 'De content is; ', objDetails.content);
console.log( 'Het is Published at; ', objDetails.publishedAt);

// opdr 3

let jsoncompanyInfos = `
{
    "id": 4,
    "firstname": "Emily",
    "lastname": "Davis",
    "email": "emilydavis@example.com",
    "birthDate": "1974-11-30",
    "login": {
      "uuid": "4a0eed11-9430-4d68-901f-c0d4c1c3bf30",
      "username": "emilydavis",
      "password": "jsonplaceholder.org",
      "md5": "c1328472c5794a25723600f71c1b4586",
      "sha1": "35544a31cc19bd6520af116554873167117f4d94",
      "registered": "2022-07-10T11:21:20.033Z"
    },
    "address": {
      "street": "321 Maple Street",
      "suite": "Apt. 50",
      "city": "Anytown",
      "zipcode": "12345-6789",
      "geo": {
        "lat": "42.9012",
        "lng": "-71.5678"
      }
    },
    "phone": "(555) 555-3456",
    "website": "www.emilydavis.com",
    "company": {
      "name": "GHI Corporation",
      "catchPhrase": "Your success is our priority",
      "bs": "Consulting"
    }
}`;

let objCompanyInfos = JSON.parse(jsoncompanyInfos)
console.log( 'De email is: ', objCompanyInfos.email);
console.log( 'De username is: ', objCompanyInfos.username);
console.log( 'De company naam is: ', objCompanyInfos.company.name);

// opdr 4

let jsonPostInfos = `
{
    "id": 11,
    "postId": 3,
    "userId": 2,
    "comment": "Cras convallis ipsum eget sapien hendrerit dignissim."
}`;

const objPostInfos = JSON.parse(jsonPostInfos);
console.log('De informatie zijn', objPostInfos);

// opdr 5

const jsonPostersInfos = `
[
    {
      "id": 1,
      "postId": 1,
      "userId": 1,
      "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      "id": 2,
      "postId": 1,
      "userId": 1,
      "comment": "Nulla quis libero vel orci rutrum suscipit."
    },
    {
      "id": 3,
      "postId": 3,
      "userId": 2,
      "comment": "Cras ac elit sit amet mi placerat bibendum."
    }
]`;

const objPostersInfos = JSON.parse(jsonPostersInfos);


for (let index = 0; index <  objPostersInfos.length; index++) {
    const jsonArray =  objPostersInfos[index];
    console.log('De comment zijn ', jsonArray.comment);
}

// opdr 6

let jsonMusicInfos = `
[
    {
      "albumId": 1,
      "id": 1,
      "title": "accusamus beatae ad facilis cum similique qui sunt",
      "url": "https://via.placeholder.com/600/92c952",
      "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
    {
      "albumId": 1,
      "id": 2,
      "title": "reprehenderit est deserunt velit ipsam",
      "url": "https://via.placeholder.com/600/771796",
      "thumbnailUrl": "https://via.placeholder.com/150/771796"
    },
    {
      "albumId": 1,
      "id": 3,
      "title": "officia porro iure quia iusto qui ipsa ut modi",
      "url": "https://via.placeholder.com/600/24f355",
      "thumbnailUrl": "https://via.placeholder.com/150/24f355"
    },
    {
      "albumId": 1,
      "id": 4,
      "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
      "url": "https://via.placeholder.com/600/d32776",
      "thumbnailUrl": "https://via.placeholder.com/150/d32776"
    },
    {
      "albumId": 1,
      "id": 5,
      "title": "natus nisi omnis corporis facere molestiae rerum in",
      "url": "https://via.placeholder.com/600/f66b97",
      "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
    },
    {
      "albumId": 1,
      "id": 6,
      "title": "accusamus ea aliquid et amet sequi nemo",
      "url": "https://via.placeholder.com/600/56a8c2",
      "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
    }
  ]`;

const objMusicInfos = JSON.parse(jsonMusicInfos);

let ul_list= document.querySelector('ul')

for (let i = 0; i < objMusicInfos.length; i++) {
    const element = objMusicInfos[i];
    console.log(element);
    ul_list.innerHTML +='<li>' + element.title + '</li>';
    ul_list.innerHTML +='<li>' + element.url + '</li>';
}

// opdr 7

const jsonClassesInfos = `
{ 
    name: 'John', 
    age: 20,
    marks: {
        science: 70,
        math: 75
    }
}`;

console.log(jsonClassesInfos);

// opdr 8

let objSecondClassesInfos = 
[
	{ 
		name: 'Wolverine', 
		age: 38,
		marks: {
			science: 20,
			math: 15
		}
	},
	{ 
		name: 'Xavier', 
		age: 64,
		marks: {
			science: 95,
			math: 90
		}
	},
	{ 
		name: 'Magneto', 
		age: 68,
		marks: {
			science: 90,
			math: 85
		}
	}
];

const jsonSecondClassesInfos = JSON.stringify(objSecondClassesInfos)
console.log(jsonSecondClassesInfos);
// for (let counter = 0; counter < jsonSecondClassesInfos.length; counter++) {
//     const elementNumberTwo = jsonSecondClassesInfos[counter];
//     console.log(elementNumberTwo);
// }


// FETCH

fetch('https://www.jsonplaceholder.org/#comments').then(function(response) {
    console.log('Response van de serve ', response);

    return response.text();
}).then(function (jsonData) {
    console.log('ontvangwn json data van de server ', jsonData);
    let objDataBase = JSON.parse(jsonData)
    // console.log('JSON data naar object ', objData);
})