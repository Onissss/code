let student1Name = 'Q.Anh'
let student2Name = 'Son'
let student3Name = 'Nam'

//Array
let students = ['Q.Anh' , 'Son' , 'Nam']
            //    0        1       2     (index)
console.log(students[1]);

//Add element to array
// students.push('new student')
// console.log(students);

//Delete an element of array
// students.splice(2 , 1)
// console.log(students);

// students.push('Nam1')
// console.log(students);

students[2] = 'Nam1'
console.log(students);

//ICRUD (Init - Create - Read - Update - Delete)
// for (let i = 0; i < 3; i++) {
//     console.log(`Student ${i + 1} Name is ${students[i]}`);
// }

let number = [1,3,2,6,4,56,43,98,54,346,657,345]
// for (let i = 0; i < number.length; i++){
//      const dividedBy2 = number[i]  % 2 === 0
//     if (dividedBy2 === true) {
//         console.log(number[i]);
//     }
    
for (let num of number) {
    const isEven = num % 2 === 0
    if (isEven) {
        console.log(num);
    }
}

