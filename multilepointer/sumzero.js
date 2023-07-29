//write function zero accept sorted array with negative value
//let initialize left = 0,right=arr.length-1
//while check left < ight
//sum = arr[left] + arr[right]
//if sum === 0 return arr[left], arr[right]
//else if sum >0 right--
//else left ++
function sumzero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    console.log(sum);
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
console.log(sumzero([-1, -2, 1, 2, 4]));
