function getdigit(num, i) {
  return Math.floor(Math.floor(Math.abs(num) / Math.pow(10, i)) % 10);
}

function digitcount(num) {
  if (num === 0) {
    return 1;
  }
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}
function mostdigit(nums) {
  let maxdigit = 0;
  for (let i = 0; i < nums.length; i++) {
    maxdigit = Math.max(maxdigit, digitcount(nums[i]));
  }
  return maxdigit;
}

function radixsort(nums) {
  // maxdigit
  let maxdigit = 0;
  for (i = 0; i < nums.length; i++) {
    maxdigit = Math.max(maxdigit, digitcount(nums[i]));
  }
  //loop from 0 to maxdigit
  for (j = 0; j < maxdigit; j++) {
    let digitBucket = Array.from({ length: 10 }, () => []);
    for (i = 0; i < nums.length; i++) {
      let digit = getdigit(nums[i], j);
      digitBucket[digit].push(nums[i]);
    }

    nums = [].concat(...digitBucket);
  }
  return nums;
}
console.log(radixsort([45, 555, 674, 67, 4578, 57679]));
