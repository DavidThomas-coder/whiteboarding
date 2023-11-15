// Given a word, write a function that returns whether it is a palindrome

const word1 = 'racecar'
const word2 = 'cheese'

const palindrome = (word) => {
    let start = 0
    let end = word.length - 1

    while (start < end) {
        if (word[start] !== word[end]) {
            return false
        }

        start ++
        end --
    }

    return true
}

console.log(palindrome(word1))
console.log(palindrome(word2))