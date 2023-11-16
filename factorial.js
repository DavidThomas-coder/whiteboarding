const factorial = (integer) => {
    let product = 1

    for (let i = 1; i <= integer; i++) {
        product *= i
    }

    return product
}

console.log(factorial(3))