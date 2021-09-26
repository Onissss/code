// assign
let recipe = ('Hello world')

// JS law

// Not contain spaces
// let food recipe = 'Hello world' X
// Begin with character , _ or $
// let _recipe = ('Hello world') (V)
// let $recipe = ('Hello world') (V)
// let ?recipe = ('Hello world') (X)
// case sesitive
// "recipe" is differnt from "Recipe"


// Common law

// variable name should be in camel case
// const foodrecipe
// const foodrecipe
// const foodRecipe
// understandable name 
// const age = 19

// Data type
// String "" , '' , ``
// Number: 1,2,3,4
// Boolean: true/false

// ABC is not defined -> check variable's name (ABC)
// Undefined: has label but no value
//const isAtSchool = true;
let secret
secret = 'this is secret'
console.log(secret)

console.log(recipe);
//alert(recipe);

//let age = 1
// After 2 years
//age = age + 2
//age += 2
//age = age - 1
//age -= 1
//age = age * 2
//age *= 2
//age = age / 2
//age /= 2
//age = age + 1
//age++
//let surplus = age % 2
//console.log(surplus)
//console.log(age)

let firstName = 'Bui'
let lastName = 'Son'
let fullName = firstName + lastName
// NaN: not a number
// let fullName = firstName - lastName
console.log (fullName) 
let appleNumber = 10;
let pineAppleNumber = 15;
let bananaNumber = 20;
let waterMelonNumber = 25;
// I have 10 apples, 15 pineapples,...
console.log('I have' + appleNumber + 'apples,' + pineAppleNumber + 'pineapples')
console.log(`I have ${appleNumber} apples, ${pineAppleNumber} pineapples`)

//let a = 3
//let b = 4
//let perimeter = (a + b) * 2
let isAtSchool = true;
isAtSchool = !isAtSchool;
isAtSchool = !isAtSchool;
isAtSchool = !isAtSchool;
isAtSchool = !isAtSchool;
console.log(isAtSchool);
// Condition
//let age = 10
//let isTeen = age < 18; // > , < , >= , <= , !== , === , ==
//console.log(isTeen);

let isRaining = true;
let isWeekend = true;
//let goToSchool = !isRaining && !isWeekend 
let haveFavouriteSubject = true;
let haveTestToday = true;
let goToSchool = (haveFavouriteSubject || haveTestToday) && !isRaining
console.log(goToSchool);

if (goToSchool) {
    console.log('i will go to school');
} else {
    console.log('i will stay home');
}

// Other data type to boolean  rule 
// Not empty string -> true ('a')
// Empty string -> false ('')
// Number = 0 -> false
// Number !== 0 -> true
// Undefined -> false
// NaN -> false

//let celcius = prompt('enter celcius degree')
//let kelvin = Number(celcius) + 273.15
//console.log(kelvin)

//let yob = Number(prompt('enter your year of birth'))
//let age = 2021 - yob 
//if (age > 18) {
//    console.log(`your age: ${age}, you're adult`)
//} else {
//    console.log(`your age: ${age}, you're teen`)
//}

//let number = Number(prompt('enter number'))
//if (number % 2 === 0) {
//    console.log('even')
//} else {
//    console.log('odd')
//}

//let a = Number(prompt('Nhap a'))
//let b = Number(prompt('Nhap b'))
//let c = Number(prompt('Nhap c'))
//let x = (c-b)/a
//console.log(`x= ${x}`)

 let yob = Number(prompt('enter your year of birth'))
 let age = 2021 - yob 
// if (age < 5){
//     console.log(`your age: ${age}, baby`);
// } else {
//     //>= 5
//     if(age < 18){   
//         console.log(`your age: ${age}, teen`);
//     } else {
//         //>= 18
//         if (age < 60) {
//             console.log(`your age: ${age}, adult`);
//         } else {
//             //>= 60
//             console.log(`your age: ${age}, old`);
//         }

//     }
// }

// if (age < 5){
//          console.log(` baby`);
// } else if (age < 18) {
//     console.log(`teen`);
// } else if (age < 60) {
//     console.log(`adult`);
// } else  {
//     console.log(`old`);
// }
