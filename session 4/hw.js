//Ex1
let i = Number(prompt('Enter a number'))
for ( a = 1; a <= i  ; a++) {
    console.log(a);
}
let numberString = ''
const endNumber = Number(prompt('Enter end number'))
for(let i = 1; i <= endNumber; i++) {
    console.log(`previous result: ${numberString}`);
    numberString += i
    console.log(`current result: ${numberString}`);
}
console.log(`final result: ${numberString}`);

//Ex2
// let n = Number(prompt('Enter a number'))
// let x = n * (n + 1) / 2
// console.log(`Sum of degits from 1 to n is ${x}`);
// let sum = 0
// const endNumber = Number(prompt('Enter end number'))
// for(let i = 1; i <= endNumber; i++) {
//     //const dividedBy2 = i % 2 === 0
//     //if(dividedBy2){
//         sum += i
//     }
    
// }
// console.log(`sum of digits from 1 to n is: ${sum}`);

//Ex3
// const rowNumber = Number(prompt('Enter end number'))
// let rowLength = Number(prompt('Enter row length'))
// let result = ''
//  //Draw block
// for(let i = 0; i < rowNumber; i++) {
//     // result += '***\n'
//  // Draw 1 row
//     let oneRow = '' 
//     for(j = 0; j < rowLength; j++){
//         oneRow += '*'
//     }
//     oneRow += '\n'
//     result += oneRow
// }
// console.log(result);

//Ex4
// for(let j = 1; j <= 5; j++) {
//     let oneLine = ''
//     for (let i = 0; i < j; i++) {
//         oneLine += j
//     }
//     console.log(oneLine);
// }
