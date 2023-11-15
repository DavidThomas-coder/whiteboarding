// Given a string, return a new string where each character that was 
// lowercase is now uppercase, and each character that was uppercase is now lowercase

const string = 'MY dinner IS a GIANT sandwich'

const upperLower = (string) => {
    let changedLetter = ''

    for (i = 0; i < string.length; i++) {
        if (string[i] === string[i].toLowerCase()) {
            changedLetter += string[i].toUpperCase()
        }
        else {
            changedLetter += string[i].toLowerCase()
        }
    }

    return changedLetter
}

console.log(upperLower(string))