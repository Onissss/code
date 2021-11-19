// Ex1
// const myButton = document.getElementById('button')
// console.log(myButton);
// let count = 0
// myButton.addEventListener('click' , () => {
//     count += 1
//     myButton.innerText = `You clicked ${count} times`
// })

// Ex2
// const myButton = document.getElementById('button')
// myButton.style.width = '300px'
// myButton.style.height = '300px'
// myButton.style.color = '#f7f7f7'
// let count = 0
// myButton.addEventListener('click' , () => {
//     count += 1
//     var colorR = Math.round(Math.random()*255)
//     var colorG = Math.round(Math.random()*255)
//     var colorB = Math.round(Math.random()*255)
//     myButton.innerText = `you clicked ${count}
//     \n RGB(${colorR},${colorG},${colorB})`
//     myButton.style.backgroundColor = `rgb(${colorR},${colorG},${colorB})`
// })

// Ex4
// const myButton = document.getElementById('button')
// console.log(myButton);
// myButton.addEventListener('click' , () => {
//     var rand = Math.round(Math.random() * 200 - 100)
//     myButton.innerText = rand
// })

// Ex2
// const myButton = document.getElementById('button')
// myButton.style.width = '300px'
// myButton.style.height = '300px'
// myButton.style.color = '#f7f7f7'
// myButton.style.backgroundColor = '#000'
// function randRgb() {
//     var colorR = Math.round(Math.random()*255)
//     var colorG = Math.round(Math.random()*255)
//     var colorB = Math.round(Math.random()*255)
//     return `RGB(${colorR},${colorG},${colorB})`
// }
// myButton.addEventListener('click' , () => {
//     const randColor = randRgb()
//     myButton.innerText = randColor
//     myButton.style.backgroundColor = randColor
// })


// function random(from , to) {
//     return Math.round(Math.random() * (to - from) + from )
// }
// console.log(random(64 , 84));

// Ex3
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const counter = document.getElementById("counter");

let count = 0;
counter.innerText = count;

plusBtn.addEventListener("click", () => {
  count++;
  counter.innerText = count;
});

minusBtn.addEventListener("click", () => {
  count--;
  counter.innerText = count;
});