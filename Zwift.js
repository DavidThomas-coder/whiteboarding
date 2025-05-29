

const array = [1,2,1,3,2,5,7,9,12,15,32,36,38,42,47,49,55,55,47,49,33,29,28,28,28,30,36,40,42,45,60,74,74,69]

function elevation(array) {
  let results = []
  let i = 0
  let j = i + 1

  for (; i < array.length & j < array.length;) { // added this to make sure we broke when j hit the end too.
    if (array[j] >= array[j - 1]) { // fixed this to ensure we were comparing j with the previous element, not the start of the sequence, i
      j++                           
    } else if (j - i >= 10) {

      results.push(array.slice(i, j)) // originally had array.slice((i,j))) - extra parentheses
      i = j
      j++
    } else { // starting the sequence over if neither criteria were hit
        i++  
        j = i + 1 // not j + 1.  whoops!
    }
  }
  return results
}

console.log(elevation(array))