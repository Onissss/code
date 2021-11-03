let arr =['Nguyen Van A' , 'Nguyen Van B']
//Object
// let person = {
//     name: 'Duc Son',
//     yearOfBirth: 2005
//     school: 'TQB'
// }
//Init
// let film = {
//     name: 'family guy',
//     releaseYear: 2019,
//     age: '16+',
//     director: [
//         {
//             name: 'Seth MacFarlane',
//             age: 47
//         },
//         {
//             name:'Seth Green',
//             age: 47
//         },
//         {
//             name:'Dominic Bianchi',
//             age: 51
//         }
//     ]
// }

//Create
let person = {
        name: 'Duc Son',
        age: 16,
        fieldName: 'this is field name'
}
// const fieldName = prompt('which field do you need')
//Read
// console.log(person);
// console.log(person.name);
// console.log(person[fieldName]);
person.school = {
    schoolName: 'TQB',
    foundedYear: 2013
}
//Update
// person.age = 17
// console.log(person);

//Delete
// delete person.age
// console.log(person);

for(let key in person) {
    //console.log(person[key]);
    console.log(`value of field ${key} is ${person[key]}`);
}

// let numbers = [1,4,6,334,5436,6]
// for(number of numbers) {
//     console.log(number);
// }

let students = [
    {
        name: 'Nam',
        age: 22,
        mark: 6
    },
    {
        name:'Son',
        age: 16,
        mark: 8
    },
    {
        name: 'Q.Anh',
        age: 16,
        mark: 10
    }
]
// let sum = 0
// for (let student of students) {
//     // if (student.age < 20) {
//     //     console.log(student.name);
//     // }
//     sum += student.mark
// }
// console.log(sum / students.length);

//C1
// let lowest = students[0].mark
// for (let student of students) {
//     if (student.mark < lowest) {
//         lowest = student.mark
//     }
// }
// console.log(lowest);
// for (let student of students) {
//     if (student.mark === lowest) {
//         console.log(student.name);
//     }
// }

//C2
// let lowestMark = students[0].mark
// let lowestStudentName = students[0].name
// for (let student of students) {
//     if (student.mark <= lowestMark) {
//         lowestStudentName = student.name
//     }
// }
// console.log(lowestStudentName);

//C3
let lowestMark = students[0].mark
let lowestStudentName = [students[0].name]
for (let student of students) {
    if (student.mark === lowestMark) {
        lowestStudentName.push(student.name)
    }
    if (student.mark < lowestMark) {
        lowestStudentName = [student.name]
    }
}
console.log(lowestStudentName);