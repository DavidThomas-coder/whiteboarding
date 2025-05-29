// Given an array of integers, return a list of all odd numbers found in the list

array = [1, 1, 3, 3, 4, 4, 12, 12, 16, 17, 19]

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