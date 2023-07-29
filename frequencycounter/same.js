//1normal way => o(n^2)

// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     let sqrvalue = arr1[i] ** 2;
//     //what is index of square value in arr2
//     let correctindex = arr2.indexOf(sqrvalue);
//     if (correctindex === -1) {
//       return false;
//     }

//     arr2.splice(correctindex, 1);
//   }
//   return true;
// }
// console.log(same([3, 1, 2, 4], [4, 1, 1, 9]));

//Refactored
//create function
//create two empty obj => objarr1,objarr2
//1st forloop insert objarr1 value
//if objarr1 new add 0+1 or objarr1[i]+1
//2nd forloop insert objarr1 value + count
//if objarr2 new add 0+1 or objarr2[i]+1
//3rd loop key loop objarr1
//if ! key^2 in objarr2 return false
//if  objarr1[key] !== objarr2[key] return false
function same(arr1, arr2) {
  //create two empty obj => objarr1,objarr2
  let objarr1 = {};
  let objarr2 = {};

  for (let val of arr1) {
    objarr1[val] = (objarr1[val] || 0) + 1;
  }

  for (let val of arr2) {
    objarr2[val] = (objarr2[val] || 0) + 1;
  }

  for (let key in objarr1) {
    if (!(key ** 2 in objarr2)) {
      return false;
    }

    if (objarr1[key] !== objarr2[key ** 2]) {
      return false;
    }
  }
  return true;
}
console.log(same([3, 1, 2, 4], [4, 1, 16, 9]));
