// Ex1
// const myInput = document.getElementById('myInput')
// const oddEven = document.getElementById('oddEven')
// myInput.addEventListener('keyup', (event) =>{
//     console.log(event.target.value);
//     const odd = event.target.value % 2 != 0
//     if (odd) {
//         oddEven.innerText = 'Odd'
//     }else if (odd === false) {
//         oddEven.innerText = 'Even'
//     }
//      if (isNaN(event.target.value)) {
//         oddEven.innerText = 'Not a number'
//     } 
// })

// Ex2
const text = document.getElementById('text')
const size = document.getElementById('font size')
const color = document.getElementById('color')
const bColor = document.getElementById('background color')
const change = document.getElementById('change')
text.addEventListener('keyup', (event) =>{
    change.innerText = event.target.value
})
size.addEventListener('keyup', (event) =>{
    change.style.fontSize = `${event.target.value}px`
})
color.addEventListener('keyup', (event) =>{
    change.style.color = event.target.value
})
bColor.addEventListener('keyup', (event) =>{
    change.style.backgroundColor = event.target.value
})