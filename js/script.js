const API = "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json";


let coffees = [];


// trae y muestra los cafes en la pagina
async function showCoffees() {
    const response = await fetch(API);
    const coffees2 = await response.json();
    coffees = coffees2;

    coffees.forEach(coffee => {
        createCoffee(coffee);
    })
}

// crea el div que contiene a los cafes
function createCoffee(coffee) {

    //obtenemos el div donde vamos a mostrar todos los cafecitos
    const coffees = document.getElementById("coffees");

    // Se tiene que comprobar que existe para eso la siguiente linea de codigo, consejo senior
    if(!coffees) return;

    coffees.style.display = "flex";
    coffees.style.flex = "wrap";
    coffees.style.gap = "1em";

    // Empezamos con la construcción del cafecito
    const div = document.createElement("div");
    div.classList.add("coffee");
    div.style.marginBottom = "1em";
    
    // Cabecera de la tarjetita
    const cardHeader = document.createElement("div");

    const image = document.createElement("img");
    image.src = coffee.image;
    image.alt = "Imagen de Cafe servido en taza";
    image.style.borderRadius = "10px";

    cardHeader.appendChild(image);

    const cardFooter = document.createElement("div");

    const title = document.createElement("h3");
    title.textContent = coffee.name;

    const price = document.createElement("div");
    price.textContent = coffee.price;
    price.classList.add("price");
    

    cardFooter.appendChild(title);
    cardFooter.appendChild(price)

    // agregamos los hijos al contenedor padre
    div.appendChild(cardHeader);
    div.appendChild(cardFooter);

    coffees.appendChild(div);
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