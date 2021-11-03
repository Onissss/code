// SS7
// Ex1
let phone = {
    phoneName: 'iPhone 13 Pro Max',
    brand: [
        {
            brandName: 'Apple'
        },
        {
            foundedYear: 1976
        }

    ],
    price: 1099 + '$',
    country: 'Vietnam,USA,China',
    phoneAvailable: 5000,
}
console.log(phone);
// Ex2
phone.releaseYear = 2021
phone.price = 1099 + (1099 * 10 / 100) + 'S'
delete phone.releaseYear
console.log(phone);