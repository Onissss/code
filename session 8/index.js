// Function
// Declare function
function sayHello() {
    console.log('Hello');
    console.log('world');
}
// Excute function
sayHello()

function doubleNumber(num) {
    return num * 2
}
// console.log(doubleNumber(2));
const doubleOf2 = doubleNumber(2)
const doubleOf3 = doubleNumber(3)
// console.log(doubleOf2 + doubleOf3);

function sum(firstParameter , secondParameter) {
    return firstParameter + secondParameter
}
// console.log(sum(1,3));

function calculateBMI(h , w) {
    let BMI = w / (h * h)
    return BMI
}
// console.log(calculateBMI(1.74,69));

function findMax(nums) {
    let highest = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > highest) {
            highest = nums[i]
        }
    }
    return highest
}
console.log(findMax([1,2,3]));

function findOdd(nums) {
    const oddNumber = []
    for (let i = 0; i < nums.length; i++) {
        const dividedBy2 = nums[i] % 2 != 0  
        if (dividedBy2) {
            oddNumber.push(nums[i])
        }
    }  
    return oddNumber
}
console.log(findOdd([1,2,3,4]))

function maxOddNum(nums) {
    let highest = 0
    const oddNumber = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 != 0) {
            oddNumber.push(nums[i])
        }
    } 
    for (let i = 0; i < oddNumber.length; i++) {
        if (oddNumber[i] > highest) {
            highest = oddNumber[i]
        
        }
    }
    return highest
}
console.log(maxOddNum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]));