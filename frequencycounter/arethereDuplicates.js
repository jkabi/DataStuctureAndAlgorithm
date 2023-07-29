function areThereDuplicates(...arr) {
  // good luck. (supply any arguments you deem necessary.)
  let obj1 = {};

  for (let char of arr) {
    obj1[char] ? ++obj1[char] : (obj1[char] = 1);
  }
  for (let char of arr) {
    if (obj1[char] > 1) {
      return true;
    }
  }
  return false;
}
console.log(areThereDuplicates(1, 2, 2));
