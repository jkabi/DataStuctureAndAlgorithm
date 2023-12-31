//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

function factorial(nums) {
  if (nums === 0) {
    return 1;
  }
  if (nums === 1) {
    return 1;
  }
  return nums * factorial(nums - 1);
}
console.log(factorial(7));
// FACTORIAL SOLUTION
function factorial(x) {
  if (x < 0) return 0;
  if (x <= 1) return 1;
  return x * factorial(x - 1);
}
