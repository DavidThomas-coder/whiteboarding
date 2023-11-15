// Given 2 strings, a and b, return a string of the form short+long+short, 
// with the shorter string on the outside and the longer string on the inside. 
// The strings will not be the same length. 
// For example if "hi" and "hello" are given, it should return "hihellohi"

const string1 = 'hi'
const string2 = 'hello'

const shortLongShort = (string1, string2) => {
   let shortString, longString;

   if (string1.length < string2.length) {
       shortString = string1;
       longString = string2;
   } else {
       shortString = string2;
       longString = string1;
   }

   const result = shortString + longString + shortString;

   return result;
}

console.log(shortLongShort(string1, string2))