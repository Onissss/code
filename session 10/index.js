const myInput = document.getElementById('myInput')
const area = document.getElementById('area')
const areas = document.getElementsByClassName('area')
const myButton = document.getElementById('button')

// myInput.addEventListener('keyup', (event) =>{
//     console.log(event.target.value);
// })
// myInput.addEventListener('keydown', () =>{
//     console.log('keydown');
// })
// myInput.addEventListener('keypress', () =>{
//     console.log('keypress');
// })

area.style.width = '100px'
area.style.height = '100px'
// myInput.style.backgroundColor = '#000000'
myInput.addEventListener('keydown', (event) =>{
    console.log(event.target.value);
    area.style.backgroundColor = event.target.value
})

function randRgb() {
    var colorR = Math.round(Math.random()*255)
    var colorG = Math.round(Math.random()*255)
    var colorB = Math.round(Math.random()*255)
    return `RGB(${colorR},${colorG},${colorB})`
}
myButton.addEventListener('click' , () => {
    for (let i = 0; i < areas.length; i++) {
        const area = areas[i]
        let randColor = randRgb()
        area.innerText = randColor
        area.style.backgroundColor = randColor
    }
})