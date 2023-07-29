// function validAnagrams(str1, str2) {
//   let obj1 = {};
//   let obj2 = {};
//   if (!(str1.length === str2.length)) {
//     return false;
//   }
//   for (let char of str1) {
//     obj1[char] = (obj1[char] || 0) + 1;
//   }
//   for (let char of str2) {
//     obj2[char] = (obj2[char] || 0) + 1;
//   }
//   for (let key in obj2) {
//     if (!(key in obj2)) {
//       return false;
//     }
//     if (obj1[key] !== obj2[key]) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(validAnagrams("kabilan", "laybika"));

//2nd way
function validAnagrams(str1, str2) {
  let obj1 = {};

  if (!(str1.length === str2.length)) {
    return false;
  }
  for (let char of str1) {
    obj1[char] ? obj1[char]++ : (obj1[char] = 1);
    //obj1[char] = (obj1[char] || 0) + 1;
  }

  for (let char of str2) {
    if (!obj1[char]) {
      return false;
    } else {
      obj1[char] -= 1;
    }
  }

  return true;
}
console.log(validAnagrams("kabilan", "laniika"));
