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
let phones = [
    {
        phoneName: 'iPhone 13 Pro Max',
        brand: [
            {
                brandName: 'Apple'
            },
            {
                foundedYear: 1976
            }
        
        ],
        price: 30000000 ,
        country: 'Vietnam,USA,China',
        phoneAvailable: 53,
    },
    {
        phoneName: 'Samsung S20',
        brand: [
            {
                brandName: 'Samsung'
            },
            {
                foundedYear: 1938
            }
        
        ],
        price: 12000000 ,
        country: 'Vietnam,USA,China',
        phoneAvailable: 60
    },
    {
        phoneName: 'Xiaomi Mi 11',
        brand: [
            {
                brandName: 'Xiaomi'
            },
            {
                foundedYear: 2010
            }
        
        ],
        price: 9000000 ,
        country: 'Vietnam,China',
        phoneAvailable: 45
    },
    {
        phoneName: 'Oppo Reno 6',
        brand: [
            {
                brandName: 'Oppo'
            },
            {
                foundedYear: 2010
            }
        
        ],
        price: 10000000 ,
        country: 'Vietnam,China',
        phoneAvailable: 50
    }
]
console.log(phones[2].brand[0]);
phones[3].price = phones[3].price - (phones[3].price * 5 / 100)
console.log(phones[3].price);
for(let i = 0; i < phones.length; i++) {
    console.log(`${phones[i].phoneName} : ${phones[i].price} vnd`);
    valueOfPhones = phones[i].price * phones[i].phoneAvailable * 4
}
console.log(`value of all phones is:${valueOfPhones} vnd`);