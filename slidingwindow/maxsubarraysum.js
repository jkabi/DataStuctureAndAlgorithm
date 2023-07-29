// Sliding Window - maxSubarraySum
// Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

// Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

// maxSubarraySum([100,200,300,400], 2) // 700

//function arr,num
//let max,temp
//if arr< num
//for max sum of first num arr
//for sub one arr form left and add on right
//check max = math.max(max,temp)
//return max

function maxsubarraysum(arr, num) {
  let max = 0;
  let temp = 0;
  if (arr.length < num) {
    return null;
  }
  for (i = 0; i < num; i++) {
    max += arr[i];
  }
  temp = max;
  for (i = num; i < arr.length; i++) {
    temp = temp - arr[i - num] + arr[i];
    max = Math.max(temp, max);
  }
  return max;
}

console.log(maxsubarraysum([2, 3, 4, 2, 5, 6, 8, 5, 7, 2], 3));
