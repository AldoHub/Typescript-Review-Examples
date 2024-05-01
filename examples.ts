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

//--- Enums Example

//using keyof typeof to emulate a enum
const direction = {
    up: 'UP',
    right: 'RIGHT',
    down: 'DOWN',
    left: 'LEFT'
}

//Craete a type infer from the object directions
type Direction = keyof typeof direction;

//using the new Direction type we can use the typing in order to access the values
function moveObject(direction: Direction){
    console.log(direction);
}

//usage of the function, will prompt the correct values from the Direction type that are permited on the parameters
moveObject('up')


//creating the ENUM
enum eDirection{
    up = 'UP',
    right = 'RIGHT',
    down = 'DOWN',
    left = 'LEFT'
}

//create a new function that accepts eDirection as a type
function moveObjectWithEnum(direction: eDirection){
    console.log(direction);
}

//now use the enum to access the properties inside
moveObjectWithEnum(eDirection.down)


//--- Decorators Example

//decorator code
function requiredExperience(){
    return function(
        target: any, 
        propertyKey: string,
        descriptor: PropertyDescriptor
    ){
        //the original method
        const originalMethod = descriptor.value;

        //overwrite the method
        descriptor.value = function(...args:any[]){
            //if check passes
            if(this.experience > this.experienceThreshold){
                //use original method
                originalMethod.apply(this, args);
            }
            else{
                //otherwise, do something else
                console.log(`${this.name} has not enough XP to evolve`);
            }
        }

        return descriptor;

    }
}


class Pokemon {
    constructor(
        private name: string,
        private experience: number,
        private evolution: string,
        private experienceThreshold: number,
    ){}
    

    //use decorator
    @requiredExperience()
    evolve(){
        console.log(`${this.name} evolved to ${this.evolution}`);
    }
}

const pikachu = new Pokemon('Pikachu', 80, 'Raichu', 120);
pikachu.evolve();


//--- etc

let user = {name: 'user1', age: 30}

console.log('hey');
console.log(user.email); //Min27:27