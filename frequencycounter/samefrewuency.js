// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false

function sameFrequency(s1, s2) {
  // good luck. Add any arguments you deem necessary
  let str1 = s1.toString().split("");
  let str2 = s2.toString().split("");
  let obj1 = {};
  if (!(str1.length === str2.length)) {
    return false;
  }

  for (let char of str1) {
    obj1[char] = (obj1[char] || 0) + 1;
  }
  for (let char2 of str2) {
    if (!obj1[char2]) {
      return false;
    } else {
      obj1[char2] -= 1;
    }
  }
  return true;
}
console.log(sameFrequency(1223, 3221));
//fonction
//obj,split num
//for char of str1 store onj1
//for char of str2
//if !obj1[char] return flase
//obj[char]-=1
//return true

//another way both are goo
// sameFrequency Solution
// function sameFrequency(num1, num2){
//   let strNum1 = num1.toString();
//   let strNum2 = num2.toString();
//   if(strNum1.length !== strNum2.length) return false;

//   let countNum1 = {};
//   let countNum2 = {};

//   for(let i = 0; i < strNum1.length; i++){
//     countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
//   }

//   for(let j = 0; j < strNum1.length; j++){
//     countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
//   }

//   for(let key in countNum1){
//     if(countNum1[key] !== countNum2[key]) return false;
//   }

//   return true;
// }
