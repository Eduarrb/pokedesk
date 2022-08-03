// console.log('funciona');

// setInterval(function(){
//     console.log('esta ejecucion es asincrona');
// },1000);

// let num = 1;
// console.log(num); 

// let num2 = 2;
// console.log(num2);

let busqueda = document.querySelector('.input');
let boton = document.querySelector('.btn');
let pokemonImgBox = document.querySelector('.pokedesk__pokemonBox');
let dataPokemon = document.querySelector('.pokedesk__dataBox');

boton.addEventListener('click', function(evento){
    // console.log('hiciste click');
    evento.preventDefault();
    // console.log(busqueda.value);
    obtenerPokemon(busqueda.value);
});

let obtenerPokemon = async function(pokemon){
    // console.log('aqui esta pikachu');
    try {
        // respondera si todo ocurrio correctamente
        let data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        // console.log(data);
        let resultado = await data.json();
        console.log(resultado);
        let img = resultado.sprites.other.home.front_default;
        // console.log(img);
        let nombre = resultado.name;
        // console.log(nombre);
        let skills = resultado.abilities.map(el => el.ability.name).join(', ');
        // console.log(skills);
        let altura = resultado.height * 10;
        // console.log(altura);
        let peso = resultado.weight / 10;
        // console.log(peso);

        pokemonImgBox.innerHTML = `<img src="${img}" alt="" class="pokedesk__pokemonBox--img">`;

        let pokeData = `
            <h1 class="pokedesk__dataBox--nombre">${nombre}</h1>
            <p>
                <strong>Habilidades: </strong> ${skills}
            </p>
            <p>
                <strong>Altura: </strong> ${altura} cm
            </p>
            <p>
                <strong>Peso: </strong> ${peso} kg
            </p>
        `;
        dataPokemon.innerHTML = pokeData;

    } catch (error) {
        // respondera si hubo un error
        console.log(error);
    }
}