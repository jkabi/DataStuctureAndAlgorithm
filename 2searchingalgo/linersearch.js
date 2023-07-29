function linearSearch(arr, value) {
  for (let char in arr) {
    if (arr[char] === value) {
      return char;
    }
  }
  return -1;
}
//   if (arr.includes(value)) {
//     return arr.indexOf(value);
//   } else {
//     return -1;
//   }
console.log(linearSearch(["ram", "janu", "rahul", "kabi"], "kert"));
