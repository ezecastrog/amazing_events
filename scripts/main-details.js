const events = [
    {
      "id": 1,
      "image":"./multimedia/food.jpg",
      "name":"Collectivities Party",
      "date":"2021-12-12",
      "description":"Enjoy your favourite dishes, from different countries, in a  <br>  unique  event for the whole family.",
      "category":"Food Fair",
      "place":"Room A",
      "capacity":45000,
      "assistance":42756,
      "price":5
    },
    {
      "id": 2,
      "image":"./multimedia/koreanFood.jpg",
      "name":"Korean style",
      "date":"2022-08-12",
      "description":"Enjoy the best Korean dishes, with international chefs <br> and awesome events.",
      "category":"Food Fair",
      "place":"Room A",
      "capacity":45000,
      "assistance":42756,
      "price":10
    },
    {
      "id": 3,
      "image":"./multimedia/jurassic.jpg",
      "name":"Jurassic Park",
      "date":"2021-11-02",
      "description":"Let's go meet the biggest dinosaurs in the <br>  paleontology museum.",
      "category":"Museum",
      "place":"Field",
      "capacity":82000,
      "assistance":65892,
      "price":15
    },
    {
      "id": 4,
      "image":"./multimedia/parisianMuseum.jpg",
      "name":"Parisian Museum",
      "date":"2022-11-02",
      "description":"A unique tour in the city of lights, get to <br>  know one of the most iconic places.",
      "category":"Museum",
      "place":"Paris",
      "capacity":8200,
      "estimate":8200,
      "price":3500
    },
    {
      "id": 5,
      "image":"./multimedia/comicon.jpg",
      "name":"Comicon",
      "date":"2021-02-12",
      "description":"For comic lovers, all your favourite characters <br> gathered in one place.",
      "category":"Costume Party",
      "place":"Room C",
      "capacity":120000,
      "assistance":110000,
      "price":54
    },
    {
      "id": 6,
      "image":"./multimedia/halloween.jpg",
      "name":"Halloween Night",
      "date":"2022-02-12",
      "description":"Come with your scariest costume <br>  and win incredible prizes.",
      "category":"Costume Party",
      "place":"Room C",
      "capacity":12000,
      "estimate":9000,
      "price":12
    },
    {
      "id": 7,
      "image":"./multimedia/metallicaConcert.jpg",
      "name":"Metallica in concert",
      "date":"2022-01-22",
      "description":"The only concert of the most emblematic  <br> band in the world.",
      "category":"Music Concert",
      "place":"Room A"
      ,"capacity":138000,
      "estimate":138000,
      "price":150
    },
    {
      "id": 8,
      "image":"./multimedia/concert.jpg",
      "name":"Electronic Fest",
      "date":"2021-01-22",
      "description":"The best national and international DJs <br>  gathered in one place.",
      "category":"Music Concert",
      "place":"Room A",
      "capacity":138000,
      "assistance":110300,
      "price":250
      },
    {
      "id": 9,
      "image":"./multimedia/marathon.jpg",
      "name":"10K for life",
      "date":"2021-03-01",
      "description":"Come and exercise, improve your health and lifestyle.",
      "category":"Race",
      "place":"Soccer field",
      "capacity":30000,
      "assistance":25698,
      "price":3
    },
    {
      "id": 10,
      "image":"./multimedia/nyMarathon.jpg",
      "name":"15K NY",
      "date":"2022-03-01",
      "description":"We'll be raising funds for hospitals and medical care <br>  in this unique event held in The Big Apple.",
      "category":"Race",
      "place":"New York",
      "capacity":3000000,
      "assistance":2569800,
      "price":3
      },
    {
      "id": 11,
      "image":"./multimedia/books.jpg",
      "name":"School's book fair",
      "date":"2022-10-15",
      "description":"Bring your unused school book and take <br>  the one you need.",
      "category":"Book Exchange",
      "place":"Room D1",
      "capacity":150000,
      "estimate":123286,
      "price":1
    },
    {
      "id": 12,
      "image":"./multimedia/cookBook.jpg",
      "name":"Just for your kitchen",
      "date":"2021-11-09",
      "description":"If you're a gastronomy lover come get the cookbook <br>  that best suits your taste and your family's.",
      "category":"Book Exchange",
      "place":"Room D6",
      "capacity":130000,
      "assistance":90000,
      "price":100
    },
    {
      "id": 13,
      "image":"./multimedia/batman.jpg",
      "name":"Batman",
      "date":"2021-3-11",
      "description":"Come see Batman fight crime in Gotham City.",
      "category":"Cinema",
      "place":"Room D1",
      "capacity":11000,
      "assistance":9300,
      "price":225
    },
    {
      "id": 14,
      "image":"./multimedia/avengers.jpg",
      "name":"Avengers",
      "date":"2022-10-15",
      "description":"Marvel's Avengers Premier in 3d, the start of an epic <br>  saga with your favourite superheroes.",
      "category":"Cinema",
      "place":"Room D1",
      "capacity":9000,
      "estimate":9000,
      "price":250
    }
  ]

let query = location.search
let params = new URLSearchParams(query)
console.log(params)
let idParams = params.get("id")

const contenedorTarjeta = document.getElementById('contenedorTarjeta') 

let tarjetaElegida = events.find(info => info.id == idParams);

    let tarjeta = "";
    tarjeta += `<img src="${tarjetaElegida.image}" class="card-img-top d-flex" alt="..." height="380" >
    </div>
    <div class="p-3"></div>
    <div class="card justify-content-center border-dark p-2  d-flex">
        <h2 class="p-1">${tarjetaElegida.name}</h2>
        <p class="p-1">Description: ${tarjetaElegida.description}</p>
        <p class="p-1">Date: ${tarjetaElegida.date}</p>
        <p class="p-1">Place: ${tarjetaElegida.place}</p>
        <p class="p-1"> Assistance: ${tarjetaElegida.assistance || tarjetaElegida.estimate}</p>
        <p class="p-1">Price $${tarjetaElegida.price}</p>
        
`

contenedorTarjeta.innerHTML = tarjeta;

