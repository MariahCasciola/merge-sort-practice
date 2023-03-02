function mergeSort(compare, elements) {
  // compare takes, left and right,
  // compare returns difference between left and right
  // split the array in half til every element is in its own array

  // merge sort
  if (Array.isArray(elements)) {
    // find if length can be divided and still be a whole number?
    if (elements.length <= 1) {
      return elements;
    }
    // find a middle
    const middle = Math.floor(elements.length / 2);

    //slice(start, end)
    // left side of array
    const leftElements = elements.slice(0, middle);
    // right side of array
    const rightElements = elements.slice(middle);

    // instead of looping we will be using recurrsion
    const leftElementsSorted = mergeSort(compare, leftElements);
    const rightElementsSorted = mergeSort(compare, rightElements);

    return merge(compare, leftElementsSorted, rightElementsSorted);
  }
  return elements;
}

  // merge
function merge(compare, left, right){
  // how to compare each single element in their own separate array

  
}

module.exports = mergeSort;
