// Write a function that takes two strings as arguments and 
// returns a string containing only the characters found in both strings

string1 = 'lasagna'
string2 = 'pasta'

const bothStrings = (string1, string2) => {
    let inBoth = []

    for (let i = 0; i < string1.length; i++) {
        if (string2.includes(string1[i])) {
            inBoth += string1[i]
        }
    }

    return inBoth
}

console.log(bothStrings(string1, string2))