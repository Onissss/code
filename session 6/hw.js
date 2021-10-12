//Ex1
// let menu = ['Beef steak' , ' Chicken soup' , 'Russian salad' , 'Orange juice']
// console.log(`first dish: ${menu[0]}`);
// console.log(`last dish: ${menu[3]}`);
// console.log(`all dishes: ${menu}`);
// menu.push('Ice scream')
// console.log(`all dishes: ${menu}`);
// menu.splice(1,1)
// console.log(`all dishes: ${menu}`);
// menu[1] = 'Singapore salad'
// console.log(`all dishes: ${menu}`);

//Ex2
// const userInput = prompt("Enter student's name from A to D: ")
// let students = ['A' , 'B' , 'C' , 'D' , 'E' , 'F' , 'G' , 'H' , 'I' , 'J']
// for (let i = 0; i < 10; i++) {
//     if(userInput === students[i]) {
//         console.log(i+1);
//     }
// }
    
//Ex3
const digits = [1,5,4,2,7,9,5,6,12,3]
let sum = 0
for (let i = 0; i < 10; i++) {
    sum += digits[i]
}
console.log(sum);