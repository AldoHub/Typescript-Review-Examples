interface Stats {
    id: number,
    hp: number,
    attack: number,
    defense: number,
}

interface Pokemon {
    bulbasaur: Stats,
    charmander: Stats,
    squirtle: Stats 
}

const pokemon: Pokemon = {
    bulbasaur: {id: 1, hp: 45, attack: 49, defense: 49 },
    charmander: {id: 2, hp: 39, attack: 52, defense: 43 },
    squirtle: {id: 3, hp: 44, attack: 48, defense: 65 },
}

//let bulbasaur = 'bulbasaur'; //sets it as type String - which causes an error on index in the Pokemon object
const bulbasaur = 'bulbasaur'; //sets it as type 'bulbasaur' - which actually works as an index on the Pokemon object

pokemon[bulbasaur];


//--- Generics Example 1

//use generics - virtually any letter or naming - when you dont know the type ahead of time that will be used/passed
function logPokemon<T>(pokemon: T): T{
    return pokemon;
}


const log1 = logPokemon('Pikachu'); //this will allow you to use methods based on the value added - in this case 'Pikachu' is a string literal
const log2 = logPokemon(['Bulbasaur', 'Charmander', 'Squirtle']); //will allow you to use array methods and properties - in this case is an array of strings


//--- Generics Example 2

//in this case GenericType is the generic type used as placeholder
interface Dictionary<GenericType>{
    [key:number]: GenericType
}

//create a pokemon interface
interface IPokemon {
    name: string,
    hp: number,
    pokemonType: string
}

//create now a new interface for consumables
interface IConsumable{
    name: string,
    amount: number
}


//we set now the real type we wnt to use, instead of the placeholder/ generic type

//add the type as IPokemon
const pokemonDictionary: Dictionary<IPokemon> = {
    1 : {name: 'bulbasaur', hp: 45, pokemonType: 'grass'},
    2 : {name: 'charmander', hp: 39, pokemonType: 'fire'},
    3 : {name: 'squirtle', hp: 44, pokemonType: 'water'},
}

//add the type as IConsumable
const consumableDictionary: Dictionary<IConsumable> = {
    1 : {name: 'antidote', amount: 10},
    2 : {name: 'potion', amount: 8},
    3 : {name: 'elixir', amount: 2},
}


//--- etc

let user = {name: 'user1', age: 30}

console.log('hey');
console.log(user.email); //Min27:27