// //1st way of navice  with sliding
// function checklongstr(str, val) {
//   let count = 0;
//   let value = val.length;
//   for (i = 0; i < str.length - val.length + 1; i++) {
//     let str1 = "";
//     for (j = i; j < value; j++) {
//       str1 += str[j];
//     }
//     if (str1 === val) {
//       count = count + 1;
//     }
//     value = value + 1;
//   }

//   return count;
// }

// console.log(checklongstr("helow my name is kabi znd kabilan", "kabi"));

// // 2nd way of vavice solu
// function checklongstr(str, val) {
//   let count = 0;

//   for (i = 0; i < str.length - val.length + 1; i++) {
//     for (j = 0; j < val.length; j++) {
//       if (val[j] !== str[i + j]) break;
//       if (j === val.length - 1) count++;
//     }
//   }

//   return count;
// }

// console.log(checklongstr("helow my name is kabi znd kabilan", "kabi"));
