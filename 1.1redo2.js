// Given an array of integers, return a list of all odd numbers found in the list

array = [11, 8, 16, 17, 29, 33, 36]

function oddNumbers(array) {
    let odds = []

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            odds.push(array[i])
        }
    }

    return odds
}

console.log(oddNumbers(array))