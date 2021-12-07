// Ex1
// const myInput = document.getElementById('myInput')
// const oddEven = document.getElementById('oddEven')

// myInput.addEventListener('keyup', (event) =>{
//     const odd = event.target.value % 2 != 0
//     if (odd) {
//         oddEven.innerText = 'Odd'
//     }else if (odd === false) {
//         oddEven.innerText = 'Even'
//     }
//      oddEven.innerText = odd ? 'odd' : 'even  '
//      if (isNaN(event.target.value)) {
//         oddEven.innerText = 'Not a number'
//     } 
// })

// Ex2
// const text = document.getElementById('text')
// const size = document.getElementById('font size')
// const color = document.getElementById('color')
// const bColor = document.getElementById('background color')
// const change = document.getElementById('change')

// text.addEventListener('keyup', (event) =>{
//     change.innerText = event.target.value
// })
// size.addEventListener('keyup', (event) =>{
//     change.style.fontSize = `${event.target.value}px`
// })
// color.addEventListener('keyup', (event) =>{
//     change.style.color = event.target.value
// })
// bColor.addEventListener('keyup', (event) =>{
//     change.style.backgroundColor = event.target.value
// })

// Ex3
const odd = document.getElementById('odd')
const even = document.getElementById('even')
const oddNum = document.getElementsByClassName('oddNum')
const evenNum = document.getElementsByClassName('evenNum') 

function highlightElements (elements) {
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i]
        element.style.fontSize = '30px'
        element.style.backgroundColor = '#1fcc53'
    }
}
function dehighlightElements (elements) {
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i]
        element.style.fontSize = '20px'
        element.style.backgroundColor = '#fff'
    }
}

odd.addEventListener('click', () => {
    highlightElements (oddNum)
    dehighlightElements (evenNum)
})
even.addEventListener('click', () => {
    highlightElements (evenNum)
    dehighlightElements (oddNum)
})