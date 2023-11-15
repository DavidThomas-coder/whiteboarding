// Given an array of integers, write a function to find the most frequent integer in the array

const integerArray = [1, 1, 1, 2, 2, 3, 4, 5, 5]

const mostFrequentInteger = (array) => {
    const frequencyMap = {}

    for (let i = 0; i < array.length; i++) {
        frequencyMap[array[i]] = (frequencyMap[array[i]] || 0) +1
    }

    let mostFrequentCount = 0
    let frequentInteger

    for (const key in frequencyMap) {
        if (frequencyMap[key] > mostFrequentCount) {
            mostFrequentCount = frequencyMap[key]
            frequentInteger = key
        }
    }

    return frequentInteger
}

console.log(mostFrequentInteger(integerArray))