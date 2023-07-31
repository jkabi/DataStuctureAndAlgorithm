function pivot(arr, start = 0, end = arr.length + 1) {
  let count = 0;
  let j = start + 1;
  function swap(arr, left, right) {
    [arr[left], arr[right]] = [arr[left], arr[right]];
  }
  while (j < end) {
    if (arr[start] > arr[j]) {
      count += 1;
      // [arr[count], arr[j]] = [arr[j], arr[count]];
      swap(arr, j, count);
      console.log(arr[count], arr[j]);
    }
    j += 1;
  }
  // [arr[count], arr[start]] = [arr[start], arr[count]];
  swap(arr, start, count);
  return count;
}

// console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));
function quicksort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotidx = pivot(arr);
    // left
    quicksort(arr, left, pivotidx - 1);
    // right
    quicksort(arr, pivotidx + 1, right);
  }

  return arr;
}

console.log(quicksort([4, 8, 2, 1, 5, 7, 6, 3]));
