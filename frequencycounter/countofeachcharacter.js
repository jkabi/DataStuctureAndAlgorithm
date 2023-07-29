//function create
//create empty object
//create a loop
//if num/character value >0 value++
//else crate cobect key =>str[i],value++
//if input is $%
//return result
// function countchatacter(str) {
//   let result = {};
//   for (i = 0; i < str.length; i++) {
//     let char = str[i].toLowerCase();
//     if (/[a-z0-9]/.test(char)) {
//       if (result[char] > 0) {
//         result[char]++;
//       } else {
//         result[char] = 1;
//       }
//     }
//   }

//   return result;
// }

// console.log(countchatacter("davis  kabi123$ kabi123$ kabi123$"));
// function countchatacter(str) {
//   let result = {};
//   for (var char of str) {
//     char = char.toLowerCase();
//     if (/[a-z0-9]/.test(char)) {
//       // result[char] > 0 ? result[char]++ : (result[char] = 1);
//       result[char] = ++result[char] || 1;
//     }
//   }

//   return result;
// }

// console.log(countchatacter("davis  kabi123$ kabi123$ kabi123$"));

//third way
function countchatacter(str) {
  let result = {};
  for (var char of str) {
    code = char.toLowerCase();
    let check = code.charCodeAt(0);
    if (
      (check > 47 && check < 58) ||
      (check > 64 && check < 91) ||
      (check > 96 && check < 123)
    ) {
      // result[char] > 0 ? result[char]++ : (result[char] = 1);
      result[code] = ++result[code] || 1;
    }
  }

  return result;
}

console.log(countchatacter("davis  kabi123$ kabi123$ kabi123$"));
