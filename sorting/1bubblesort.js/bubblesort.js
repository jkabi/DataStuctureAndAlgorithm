function bubblesort(arr) {
  for (let i = arr.length; i > 0; i--) {
    var swap = true;
    for (let j = 0; j < i - 1; j++) {
      console.log(arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swap = false;
      }
    }
    if (swap === true) {
      console.log("return output");
      break;
    }
  }

  return arr;
}

console.log(bubblesort([4, 8, 34, 9, 5, 7]));
