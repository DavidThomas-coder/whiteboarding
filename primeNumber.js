const primeNumber = (integer) => {
    // start at i = 2, otherwise if it hits 1 it'll return false with every number
    for (let i = 2; i < integer / 2; i++) {
        if (integer % i === 0) {
            return false
        }
    }

    return true
}

console.log(primeNumber(18))