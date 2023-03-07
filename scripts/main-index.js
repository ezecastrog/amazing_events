const events = [
    {
      "id": 1,
      "image": "./multimedia/food.jpg",
      "name": "Festival of the collectivities",
      "date": "2021-12-12",
      "description": "Enjoy your favorite dishes from different countries in a unique <br> event for the whole family.",
      "category":"Food Fair",
      "place": "Room A",
      "capacity": 45000,
      "assistance":42756,
      "price": 5
    },
    {
      "id": 2,
      "image": "./multimedia/musem.jpg",
      "name": "Jurassic Park",
      "date": "2021-11-02",
      "description": "Let's go to the paleontology museum for an incredible tour <br> to learn about the largest dinosaurs.",
      "category":"Museum",
      "place": "Field",
      "capacity": 82000,
      "assistance":65892,
      "price": 15
    },
    {
      "id": 3,
      "image": "./multimedia/costumeGroup.jpg",
      "name": "Halloween Night",
      "date": "2022-02-12",
      "description": "Come in your scariest costume character to win amazing prizes.",
      "category": "Costume Party",
      "place": "Room C",
      "capacity": 12000,
      "estimate":9000,
      "price": 12
    },
    {
      "id": 4,
      "image": "./multimedia/concert.jpg",
      "name": "Metallica in concert",
      "date": "2022-01-22",
      "description": "The only concert of the most emblematic band in the world",
      "category": "Music Concert",
      "place": "Room A",
      "capacity": 138000,
      "estimate":138000,
      "price": 150
    },
    {
      "id": 5,
      "image": "./multimedia/marathon.jpg",
      "name": "10K for life",
      "date": "2021-03-01",
      "description": "Come and exercise, improve your health and lifestyle.",
      "category": "Race",
      "place": "Soccer Field",
      "capacity": 30000,
      "assistance":25698,
      "price": 3
    },
    {
      "id": 6,
      "image": "./multimedia/books.jpg",
      "name": "School Book Fair",
      "date": "2021-10-15",
      "description": "Bring your unused school book and bring the one you need.",
      "category": "Book Exchange",
      "place": "Room D1",
      "capacity": 150000,
      "assistance":123286,
      "price": 1
    },
    {
      "id": 7,
      "image": "./multimedia/cinema.jpg",
      "name": "Avengers",
      "date": "2022-10-15",
      "description": "Marvel's Avengers 3d premiere the start of an epic saga with your best superheroes",
      "category": "Let's go to the cinema",
      "place": "Room D1",
      "capacity": 9000,
      "estimate":9000,
      "price": 250
    },
  ];
 
function paintDOM(events){
    let body =``;
    const tagToUpdate = document.getElementById("cards-container");
    console.log("tagToUpdate",tagToUpdate);

    for (let i = 0; i < events.length; i++) {
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
        `;
    }

    tagToUpdate.innerHTML = body;
    console.log("Por favor que esto funcioneseeeeee");
}
paintDOM(events);