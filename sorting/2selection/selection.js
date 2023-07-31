//selection is o(n^2)
//for some reason selection sort is better than bubble
function selection(arr) {
  // let min = arr[i];

  for (i = 0; i < arr.length - 1; i++) {
    var lowest = i;

    for (j = i + 1; j < arr.length; j++) {
      // console.log(arr[i], arr[j]);
      if (arr[i] > arr[j]) {
        // let temp = arr[i];
        // arr[j] = arr[i];
        // arr[i] = temp;ZZ
        //  [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
        lowest = j;
      }
    }
    if (i !== lowest) {
      [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
      console.log(i, j);
    }
  }
  return arr;
}
console.log(selection([2, 5, 3, 8, 9]));
