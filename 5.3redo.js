// Given a string, write a function to return a hash/object that, for each letter, 
// stores an array of indices where that letter can be found. 
// For example, in the word "bee", "b" can be found at index 0, and "e" can be found at index 1 & 2

const string = 'bugbear'

const letterLocation = (word) => {
    const result = {}

    for (let i = 0; i < word.length; i++) {
        if (result[string[i]]) {
            result[string[i]].push(i)
        } else {
            result[string[i]] = [i]
        }
    }

    return result
}

console.log(letterLocation(string))