// Given a string, return a new string where each character that was 
// lowercase is now uppercase, and each character that was uppercase is now lowercase

const string = 'MY dinner IS a GIANT sandwich'

function upperLower(string) {
    let changedLetters = ''

    for (let i = 0; i < string.length; i++) {
        if (string[i] === string[i].toLowerCase()) {
            changedLetters += string[i].toUpperCase()
        } else {
            changedLetters += string[i].toLowerCase()
        }
    }
    return changedLetters
}

console.log(upperLower(string))