// Write a multiplication function without using the * operation. 
// Determine what arguments you think this function will accept. 
// The return of the function should be the product of the function

const number1 = 12
const number2 = 6

const multiply = (number1, number2) => {
    let result = 0

    for (i = 0; i < number2; i++) {
        result += number1
    }
    return result
}

console.log(multiply(number1, number2))