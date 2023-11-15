// Write a function that takes two strings as arguments and 
// returns a string containing only the characters found in both strings

stringShort = 'it'
stringLong = 'whatsit'

const inBothStrings = (stringShort, stringLong) => {
    let charactersInBoth = ''

    for (let i = 0; i < stringShort.length; i++) {
        if (stringLong.includes(stringShort[i])) {
            charactersInBoth += stringShort[i]
        }
    }

    return charactersInBoth
}

console.log(inBothStrings(stringShort, stringLong))