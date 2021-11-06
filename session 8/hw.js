// SS7
// Ex1
// let phone = {
//     phoneName: 'iPhone 13 Pro Max',
//     brand: [
//         {
//             brandName: 'Apple'
//         },
//         {
//             foundedYear: 1976
//         }

//     ],
//     price: 1099 + '$',
//     country: 'Vietnam,USA,China',
//     phoneAvailable: 5000,
// }
// console.log(phone);

// Ex2
// phone.releaseYear = 2021
// phone.price = 1099 + (1099 * 10 / 100) + 'S'
// delete phone.releaseYear
// console.log(phone);

// Ex3
// let phones = [
//     {
//         phoneName: 'iPhone 13 Pro Max',
//         brand: [
//             {
//                 brandName: 'Apple'
//             },
//             {
//                 foundedYear: 1976
//             }
        
//         ],
//         price: 30000000 ,
//         country: 'Vietnam,USA,China',
//         phoneAvailable: 53,
//     },
//     {
//         phoneName: 'Samsung S20',
//         brand: [
//             {
//                 brandName: 'Samsung'
//             },
//             {
//                 foundedYear: 1938
//             }
        
//         ],
//         price: 12000000 ,
//         country: 'Vietnam,USA,China',
//         phoneAvailable: 60
//     },
//     {
//         phoneName: 'Xiaomi Mi 11',
//         brand: [
//             {
//                 brandName: 'Xiaomi'
//             },
//             {
//                 foundedYear: 2010
//             }
        
//         ],
//         price: 9000000 ,
//         country: 'Vietnam,China',
//         phoneAvailable: 45
//     },
//     {
//         phoneName: 'Oppo Reno 6',
//         brand: [
//             {
//                 brandName: 'Oppo'
//             },
//             {
//                 foundedYear: 2010
//             }
        
//         ],
//         price: 10000000 ,
//         country: 'Vietnam,China',
//         phoneAvailable: 50
//     }
// ]
// console.log(phones[2].brand[0]);
// phones[3].price = phones[3].price - (phones[3].price * 5 / 100)
// console.log(phones[3].price);
// for(let i = 0; i < phones.length; i++) {
//     console.log(`${phones[i].phoneName} : ${phones[i].price} vnd`);
//     valueOfPhones = phones[i].price * phones[i].phoneAvailable * 4
// }
// console.log(`value of all phones is:${valueOfPhones} vnd`);


// SS8
// Ex1
// function checkExists(nums,element) {
//     for(let i = 0; i < nums.length; i++) {
//         if (element == nums[i]){ 
//             return true; 
//         }
//     }
//     return false;
// }
// console.log(checkExists([1,2,3],2));

// Ex2
// function getUnique(characters) {
//     const result = []
//     for (let i = 0; i < characters.length; i++) {
//         for (let j = i +1; j < characters.length; j++){
//             if (characters[i] === characters[j]) {
//                 characters[j]=0
//             }
//         }
//     }
//     for (let i = 0; i < characters.length; i++) {
//         if(characters[i] != 0) {
//             result.push(characters[i])
//         }
//     }
//     return result
// }
// console.log(getUnique(['h', 'e', 'l', 'l', 'o','h']));

function getUnique(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                arr.splice(j , 1)
            }
        }
    }
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] === 0) {
    //         arr.splice(i , i)
    //     }
    // }
    return arr
}
console.log(getUnique(['h', 'e', 'l', 'l', 'o','h']));
