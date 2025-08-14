const API = "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json";

const star_blank = "../assets/icons/Star.svg";
const star_fill = "../assets/icons/Star_fill.svg";

let coffees = [];


// trae y muestra los cafes en la pagina
async function showCoffees() {
    const response = await fetch(API); //efecto, su nombre en react es useEffect
    const coffees2 = await response.json();
    coffees = coffees2;

    coffees.forEach(coffee => {
        // Esta linea es para que se pueda ver en consola los object del json que trajimos
        console.log(coffee)
        createCoffee(coffee);
    })
}

// crea el div que contiene a los cafes
function createCoffee(coffee) {

    //obtenemos el div donde vamos a mostrar todos los cafecitos
    const coffees = document.getElementById("coffees");

    // Se tiene que comprobar que existe para eso la siguiente linea de codigo, consejo senior
    if(!coffees) return;

    // Empezamos con la construcción del cafecito
    const card = document.createElement("div");
    card.classList.add("card");
    
    // Cabecera de la tarjetita
    const cardHeader = document.createElement("div");
    cardHeader.classList.add("cardHeader");

    const image = document.createElement("img");
    image.src = coffee.image;
    image.alt = "Imagen de Cafe servido en taza";
    image.style.borderRadius = "10px";

    cardHeader.appendChild(image);

    // añadiendo el popular a los cafes que cumplan
    const popular = document.createElement("div");
    popular.classList.add("popular");

    (coffee.popular == true) ?
    (popular.textContent = "Popular") : (popular.style.display = "none");

    cardHeader.appendChild(popular);

    // footer
    const cardFooter = document.createElement("div");
    const title = document.createElement("h3");
    title.textContent = coffee.name;
    title.style.margin = "0";
    
    // rating
    const rating = document.createElement("div");

    const star = document.createElement("img");
    // cambiando la imagen de la estrellita
    coffee.rating == null || coffee.votes == 0 ? 
    (star.src = star_blank) : (star.src = star_fill);
    
    rating.appendChild(star);
    rating.style.marginTop = "10px";

    // validando si hay votos o no
    const stars = document.createElement("div");
    stars.style.marginLeft = "4px";
    coffee.rating == null || coffee.votes == 0 ? 
    (stars.textContent = "No rating") : (stars.textContent = coffee.rating);

    const votes = document.createElement("div");
    votes.classList.add("votes");
    votes.style.marginLeft = "4px"
    coffee.rating == null || coffee.votes == 0 ? 
    (votes.textContent = "") : (votes.textContent = "(" + coffee.votes + ")");

    rating.appendChild(stars);
    rating.appendChild(votes);
    rating.classList.add("rating")

    //--------------------------------------

    // Creando la primera parte del card description en el footer
    const cardDescriptionpart1 = document.createElement("div");
    cardDescriptionpart1.classList.add("cardDescriptionpart1");
    const cardDescriptionpart2 = document.createElement("div");
    cardDescriptionpart2.classList.add("cardDescriptionpart2");

    const price = document.createElement("div");
    price.textContent = coffee.price;
    price.classList.add("price");

    const available = document.createElement("div");
    available.classList.add("available");
    coffee.available == true ? 
    (available.style.display = "none") : (available.textContent = "Sold out");

    cardFooter.appendChild(cardDescriptionpart1);
    cardFooter.appendChild(cardDescriptionpart2);
    cardFooter.classList.add("cardFooter");

    // agregamos los hijos al contenedor padre
    
    cardDescriptionpart1.appendChild(title);
    cardDescriptionpart1.appendChild(price);
    cardDescriptionpart2.appendChild(rating);
    cardDescriptionpart2.appendChild(available);
    card.appendChild(cardHeader);
    card.appendChild(cardFooter);

    coffees.appendChild(card);
}

showCoffees()


// EL codigo de abajo esta bien para un junior, pero esta mal visto para un programador experimentado
// // Entonces...
// fetch(API).then ((response) =>
//     // Va a la tienda si tiene cafecitos
//     response.json()
// ).then(data => {
// Aca estamos creando un div y aparte poniendolo en pagina web esto no cumple con la parte S de Solid
//     // Ya estamos obteniendo los cafecitos
//     console.log(data[0].name);

//     const coffees = document.getElementById("coffees");
//     const divCoffe = document.createElement("div");

//     divCoffe.textContent = data[2].name;
    
//     coffees.appendChild(divCoffe);
// })


// S = Single Responsability
// O = open / close
// L
// I
// D