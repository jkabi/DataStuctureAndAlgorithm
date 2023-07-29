// function countUniqueValues(arr) {
//   // add whatever parameters you deem necessary - good luck!

//   let left = 0;
//   let right = 1;
//   while (right < arr.length) {
//     if (arr[left] === arr[right]) {
//       right++;
//     } else if (arr[left] !== arr[right]) {
//       left++;
//       arr[left] = arr[right];
//       right++;
//     }
//   }
//   console.log(arr);
//   return left+1;
// }

//way 2

function countUniqueValues(arr) {
  let i = 0;
  for (j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
console.log(countUniqueValues([-1, -2, -3, 1, 1, 2, 3, 3, 4, 4, 5]));
