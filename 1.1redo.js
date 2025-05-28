// Given an array of integers, return a list of all odd numbers found in the list

array = [1,2,3,4,5]

function getOddNumbers(array) {
    const odds = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            odds.push(array[i])
        }
    }
    return odds
}

console.log(getOddNumbers(array))