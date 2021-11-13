// DOM Document Object Model

// Document: whole website
// Object: data type {}
// Model: (mô hình)

// Get element
const myButton = document.getElementById('button')
console.log(myButton);

// Do anything
// console.log(myButton.innerText);
myButton.innerText = 'hello'
// myButton.style.color = '#FF0000'
// myButton.style.backgroundColor = '#0000FF'
// myButton.style.fontSize = '20px'
// myButton.style.borderRadius = '100px'
// myButton.style.border = 'none'
// myButton.style.width = '150px'

// Event
let currentFontSize = 20
myButton.addEventListener('click' , () => {
    currentFontSize += 2
    console.log('you clicked me');
    myButton.style.color = '#FF0000'
    myButton.style.backgroundColor = '#0ad8fc'
    // font size increase by 2px
    if (currentFontSize <= 40) {
        myButton.style.fontSize = `${currentFontSize}px`
    }
})
