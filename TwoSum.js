//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

function twoSum(array, target) {
    const numMap = {}

    for (let i = 0; i < array.length; i++) {
        let complement = target - array[i]

        if (complement in numMap) {
            return [numMap[complement], i]
        }
        numMap[array[i]] = i
    }
    return []
}