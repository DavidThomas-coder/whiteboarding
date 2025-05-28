// Given 2 strings, a and b, return a string of the form short+long+short, 
// with the shorter string on the outside and the longer string on the inside. 
// The strings will not be the same length. 
// For example if "hi" and "hello" are given, it should return "hihellohi"

const string1 = 'hi'
const string2 = 'hello'

function shortLongShort(string1, string2) {
    let short = ''
    let long = ''

    if (string1.length < string2.length) {
        short = string1
        long = string2
    } else {
        short = string2
        long = string1
    }

    let combined = short + long + short

    return combined
}

console.log(shortLongShort(string1, string2))