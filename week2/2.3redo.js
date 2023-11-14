// Given 2 strings, a and b, return a string of the form short+long+short, 
// with the shorter string on the outside and the longer string on the inside. 
// The strings will not be the same length. 
// For example if "hi" and "hello" are given, it should return "hihellohi"

string1 = 'butt'
string2 = 'commissioner'

const shortLongShort = (string1, string2) => {

    const shortString = (string1.length < string2.length) ? string1 : string2
    const longString = (string1.length > string2.length) ? string1 : string2

    const combinedString = shortString + longString + shortString

    return combinedString
} 

console.log(shortLongShort(string1, string2))