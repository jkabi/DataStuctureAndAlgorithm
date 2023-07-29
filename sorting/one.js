// Objectives

// Implement bubble sort
// Implement selection sort
// Implement insertion sort
// Understand why it is important to learn these simpler sorting algorithms

// //
// What is sorting?
// Sorting is the process of rearranging the items in a collection (e.g. an array) so that the items are in some kind of order
// //
// Examples

// Sorting numbers from smallest to largest
// Sorting names alphabetically
// Sorting movies based on release year
// Sorting movies based on revenue

// ///
// Why do we need to learn this?
// Sorting is an incredibly common task, so it's good to know how it works
// There are many different ways to sort things, and different techniques have their own advantages and disadvantages
// Sorting sometimes has quirks, so it's good to understand how to navigate them

// //
// Telling JavaScript how to sort
// The built-in sort method accepts an optional comparator function
// You can use this comparator function to tell JavaScript how you want it to sort
// The comparator looks at pairs of elements (a and b), determines their sort order based on the return value
// If it returns a negative number, a should come before b
// If it returns a positive number, a should come after b,
// If it returns 0, a and b are the same as far as the sort is concerned

//BUILT IN js METHOD
//can use in string
function compare(num1, num2) {
  return num1 - num2;
}
//reverse
function compare(num1, num2) {
  return num2 - num1;
}

console.log([4, 8, 34, 9, 5, 7].sort(compare));
console.log([4, 8, 34, 9, 5, 7].sort());

//before we start sort
//many sorting algorithem involves some type of sort functionality
//Es5
function swap(arr, idx1, idx2) {
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}
//ES2015
function swap(arr, idx1, idx2) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}
