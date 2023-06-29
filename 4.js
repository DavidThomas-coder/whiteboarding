//Given an array of unsorted integers, 
//return a sorted array with the integers list from 
// lowest to highest. 
// No .sort

function selectionSort(array) {
    var len = array.length;
  
    for (var i = 0; i < len - 1; i++) {
      var minIndex = i;
      for (var j = i + 1; j < len; j++) {
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }
  
      if (minIndex !== i) {
        var temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
      }
    }
  
    return array;
  }
  
  // Example usage:
  var unsortedArray = [5, 3, 8, 2, 1, 4];
  var sortedArray = selectionSort(unsortedArray);
  console.log(sortedArray); // Output: [1, 2, 3, 4, 5, 8]
  