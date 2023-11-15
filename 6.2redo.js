// Given a string, write a function that removes duplicate characters in the string keeping only the first occurrences. 
// For example, if the input is tree traversal, the output will be “tre avsl”

const string = 'accordion'

const removeDuplicateLetters = (string) => {
    let firstTimes = []

    for (let i = 0; i < string.length; i++) {
        if (!firstTimes.includes(string[i])) {
            firstTimes += string[i]
        }
    }

    return firstTimes
}

console.log(removeDuplicateLetters(string))