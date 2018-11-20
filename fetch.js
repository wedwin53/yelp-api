var contenido = document.getElementById('card-container');


const loadData = () =>{
  
  //en el header luego del Baerer va su API KEY
  const config = {
  headers: {'Authorization': 'Bearer '}
};

const terms = document.getElementById("term-txt").value;
const locations = 'San Francisco';
const categories = 'health';
const url2 = `https://api.yelp.com/v3/businesses/search?term=${terms}&location=${locations}&categories=${categories}`;
const url1 = 'https://cors-anywhere.herokuapp.com/';
const url = url1 + url2;
  fetch(url , config)
  .then(res => res.json())
  .then(data => card(data.businesses))
  .catch(err => console.log(err))
}

const card = (data) => {
  var cardItem = document.getElementById('card-item');
  contenido.innerHTML = "";
  for (let valor of data){
    console.log(valor)
    contenido.innerHTML += 
      `
    <div class="card" id="card-item">
    <img class="card-img-top" src="${valor.image_url}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${valor.name}</h5>
      <p class="card-text">Bussiness Rating: ${valor.rating}</p>
      <p class="card-text"><small class="text-muted">Based on ${valor.review_count} reviews</small></p>
    </div>
  </div>
      ` 
    }
}