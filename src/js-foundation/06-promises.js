const {httpClient} = require('../plugins')


const getPokemonbyId = async(id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const pokemon = await httpClient.get(url);
    //console.log('test',pokemon);
    return pokemon.name;

//     return fetch(url)
//     .then( (response) => response.json())
//     //.then ( () => {throw new Error('Pokemon no existe')})
//     .then( (pokemon) => pokemon.name);

}


module.exports = getPokemonbyId