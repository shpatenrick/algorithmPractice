// selection sort
// given array, take current element and exchange it with the smallest element on its right hand side of the current element
var selectionSort = (array) => {
  for (var i = 0; i < array.length; i++) {
    for (var j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        var temp = array[j];
        array[j] = array[i];
        array[i] = temp;
      }
    }
  }
  return array;
}