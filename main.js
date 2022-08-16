// Store variable in an arr
let arrayOfPeople;

// This function waits for the web page to be loaded, when it does it will run the code inside of it which happens to be getPosts()
window.onload = function() {
  getPeople();
}

const getPeople = () => {
  fetch('https://randomuser.me/api/?results=5')
    .then((res) => res.json())
    // .then(people => console.log(people))
    .then((address) => (arrayOfPeople = address.results))
}

// This function logs the results in your browser's console
const consolePeople = () => {
  console.log(arrayOfPeople);
//   console.log(dataArray.results[0]);
//   console.log(dataArray.results[0].gender);
//   console.log(dataArray.results[0].name);
//   console.log(dataArray.results[0].location);
//   console.log(dataArray.results[0].phone);
//   console.log(dataArray.results[0].email);
//   console.log(dataArray.results[0].picture.thumbnail);
};

const getPerson = (array) => {
    array.map((people) => {
        const displayPerson = document.getElementById('page-container');
        const html = `
        <div id="card-container">
        <picture>
            <img src="${people.picture.thumbnail}" alt="user image" class="user-image" />
        </picture>
        <h1>${people.name.first} ${people.name.last}</h1>
        <p>(${people.gender})</p>
        <h6>${people.email}</h6>
        <h6>${people.phone}: Home</h6>
        <h6>${people.cell}: Cell</h6>
        <h6>${people.location.street.number.name}</h6>
        <h6>${people.location.city}</h6>
        <h6>${people.location.state}</h6>
        <h6>${people.location.postcode}</h6>
        </div>
        </div>
        </div>
        `;
        displayPerson.insertAdjacentHTML('afterbegin', html)
    });
};

const displayPeople = () => {
    getPerson(arrayOfPeople);
};