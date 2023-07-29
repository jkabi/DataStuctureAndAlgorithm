function areThereDuplicates(...arr) {
  // good luck. (supply any arguments you deem necessary.)
  // pointer aproch
  let i = 0;
  for (j = 1; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      return true;
    } else {
      i++;
    }
  }
  return false;
}
console.log(areThereDuplicates(1, 2, 3));

//USING WHILE LOOP

// function areThereDuplicates(...args) {
//   // Two pointers
//   args.sort((a,b) => a > b);
//   let start = 0;
//   let next = 1;
//   while(next < args.length){
//     if(args[start] === args[next]){
//         return true
//     }
//     start++
//     next++
//   }
//   return false
// }
