// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

//function arr,target
//two poiter
//for j=1;j<num;j++
//if sum=arri+arrj === target
//return i,j
//for i=num;i<arr.length;i++
//if sum = sum -arr[i-num]+arr[i]
//ifsum===target
// return [i-1,i]
function sumtwo(arr, target) {
  let sum = arr[0] + arr[1];
  let temp = sum;
  let num = 2;
  if (sum === target) {
    return [0, 1];
  }
  for (i = num; i < arr.length; i++) {
    temp = temp - arr[i - num] + arr[i];
    if (temp === target) {
      return [i - 1, i];
    }
  }
  return "target not found";
}
console.log(sumtwo([3, 4, 7, 6, 4, 5], 10));
