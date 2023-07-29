// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(num, n) {
  if (n === 0) {
    return 1;
  }
  if (n === 1) {
    return num;
  }
  return num * power(num, n - 1);
}
console.log(power(14, 0));
// POWER SOLUTION
function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}
