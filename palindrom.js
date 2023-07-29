// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

var isPalindrome = function (x) {
  var arr = x.toString().split("");
  let reverse = "";

  for (i = arr.length - 1; i >= 0; i--) {
    reverse = reverse + arr[i];
  }

  // console.log(typeof +reverse);

  // console.log(typeof x);
  if (+reverse === x) {
    return true;
  }
  return false;
};
console.log(isPalindrome(121));
