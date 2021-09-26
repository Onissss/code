// BTVN
// // Declare rectangle
// let aX = Number(prompt('Enter aX'))
// let aY = Number(prompt('Enter aY'))
// let width = Number(prompt('Enter width'))
// let height = Number(prompt('Enter height')) 
// // Declare point
// let bX = Number(prompt('Enter bX'))
// let bY = Number(prompt('Enter bY'))

// const isPointInsideHorizontally = bX < (aX + width) && bX > aX
// const isPointInsideVertiacally = bY > (height) && bY < aY

// const isPointInRectangle = isPointInsideHorizontally && isPointInsideVertiacally
// if (isPointInRectangle === true) {
//     console.log('inside rectangle');
// } else {
//     console.log('outside rectangle');
// }

// for (let i = 6; i < 10; i++) {
//     console.log(i)
// }
// 1. i = 0 => i < 10 => true => console.log(0) => i++ => i = 1 => i < 10 => true => console.log(1) => i++
//  console.log(9) => i++ => i = 10 => i < 10 => false => stop
// initial => check condition => run code in block if condition is true => step handle => check condition => run code...
// let i = 0 : intitial
// i < 10: stop condition
// i++: step handle

// for (i = 10; i < 50; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }
// for (i =10; i < 50; i += 2) {
//     console.log(i);
// }
for (i = 10; i < 50; i++) {
    const dividedBy3 = i % 3 === 0
    const dividedBy5 = i % 5 === 0
    const dividedBy2 = i % 2 === 0
    if (dividedBy3 && dividedBy5 && !dividedBy2) {
        console.log(i);
    }
}