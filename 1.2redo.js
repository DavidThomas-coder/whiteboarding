// // Given an array of integers, return a new list that doubles each value

array = [1, 2, 3, 4, 5, 6]

function doubledNumbers(array) {
    const doubles = []

    for (let i = 0; i < array.length; i++) {
        doubles.push(array[i] *2)
    }
    return doubles
}

console.log(doubledNumbers(array))