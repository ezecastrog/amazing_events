  
  let currentDate = "2022-01-01"
   
  const events = [
   {
     _id: 1,
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
     _id: 2,
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
     _id: 3,
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
     _id: 4,
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
     _id: 5,
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
     _id: 6,
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
     _id: 7,
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
     _id: 8,
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
     _id: 9,
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
     _id: 10,
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
     _id: 11,
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
     _id: 12,
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
     _id: 13,
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
     _id: 14,
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

function paintDOM(events){
 let body =``;
 const tagToUpdate = document.getElementById("cards-container");
 console.log("tagToUpdate",tagToUpdate);

 for (let i = 0; i < events.length ; i++) {

    if (currentDate>events[i].date){
     body +=`
     <div class="individual-card-container d-flex">
     <div class="card">
     <div class="card-img">

     <img
       src="${events[i].image}"
       class="card-img-top col-2"
       alt="..."
       height="250"
     />
     </div>

     <div class="card-body">
       <h5 class="card-title">${events[i].name}</h5>
       <p class="card-text d-flex">${events[i].description}</p>
       <div class="card-price justify-content-between">
         <p>Price $${events[i].price}</p>
         <a href="./details.html" class="btn btn-primary">Ver mas...</a>
       </div>
     </div>
   </div>
   </div>
     `};
 }

 tagToUpdate.innerHTML = body;
}
paintDOM(events);

// const date = new Date(); // Getting automatically the current date and formatting it to yyyy-mm-dd
// let day = date.getDate();
// let month = date.getMonth() + 1;
// let year = date.getFullYear();
// let currentDate = `${year}-${month}-${day}`;
// console.log(currentDate);
