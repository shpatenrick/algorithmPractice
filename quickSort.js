// quick Sort
// given array, choose pivot value as first value
  // sort so that all values to the left of the pivot are less than it
  // and that all values greater than pivot are to the right
  // pivot is then in the correct spot in final array
  // recurse and run quick sort on two arrays to the left and right of pivot

var quickSort = (array, leftIndex, rightindex) => {
  // base case
  // if array length is less than 3, return array;
  if (array.length < 3) {
    return array;
  }
  // choose pivot point
  var pivot = array[leftIndex - 1];
  // partitioning step
  // set left Index i, and right index j

  while (leftIndex <= rightIndex) {
    // check if left index value is less than pivot
    if (array[leftIndex] <= pivot) {
      // i is in the corrrect half, increment i
      leftIndex++;
    }
    // check if right index is greater than pivot
    if (array[rightIndex] >= pivot) {
      // j is in correct half, decrement j
      j--;
    }
    // if both i and j are in the wrong half
    if (array[leftIndex] > pivot && array[rightIndex] < pivot) {
      // switch the values
      var temp = array[rightIndex];
      array[rightIndex] = array[leftIndex];
      array[leftIndex] = temp;
    }
  }
  // once i and j cross over, place switch i and pivot
  array[leftIndex - 1] = array[leftIndex];
  array[leftIndex] = pivot;

  // recurse through two new halves
  quickSort(array, 1, leftIndex - 1);
  quickSort(array, leftIndex + 2, array.length - 1);

  return array;
}