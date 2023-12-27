const myName = "Juan jose"
const myLastname = "Faella"
const myPet= "Nala"
const myfullName = ( `${myName} ${myLastname}` )
let petAge = 5
let myAge = 23
let presentationtext = ( `${myfullName} ${myAge} ${myPet} ${petAge}` )
const sumAge = ( `${petAge + myAge}` )
const restAge = ( `${myAge - petAge}` )
const productAge = ( `${myAge * petAge}` )
const divisionAge = ( `${myAge / petAge}` )
let estudiante = {
    name: (myName),
    edad: (myAge),
    residencia: "Argentina",
    carrera: "programacion",
    empresa: "mindhub",
}
console.table (estudiante)
console.log (`${estudiante.name} ${estudiante.edad} ${estudiante.residencia}
${estudiante.carrera} ${estudiante.empresa}`) 

let pet = {
    petName: (myPet),
    edad: (petAge),
    pelo: "negro",
    raza: "callejero",
    tamaño: "grande",
}
console.table (pet)
console.log (pet)

const fruits = [ "Bananas", "Mandarinas", "Naranjas", "Ananas", "Pomelos"]

console.log (fruits)
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}


const numbers = [ "1", "2", "3", "4", "5"]

console.log (numbers)
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

let family = [
    { name: 'Juan', age: 60,},
    { name: 'Estela', age: 52,},
    { name: 'Antonio', age: 90,},
    { name: 'Dario', age: 35,},
    { name: 'Marisel', age: 33, }
];

console.log(family);

for (let i = 0; i < family.length; i++) {
    console.log(family[i]);
}

let randomtext = `${family[4].name} Se comio ${numbers[3]} ${fruits[1]}  `

console.log(randomtext)

let num1 = 4;
let num2 = 6;
if (num1 > num2) {
    console.log(num1, "Es mayor que num2")
}else if (num1 < num2 ){
    console.log (num2, "Es mayor que num1")
}
if (num1 === num2){
    console.log ("Los numeros son iguales");
}else{
    console.log ("Los numeros son diferentes")
}


