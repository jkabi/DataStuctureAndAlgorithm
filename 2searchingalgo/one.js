// Describe what a searching algorithm is
// Implement linear search on arrays
// Implement binary search on sorted arrays
// Implement a naive string searching algorithm
// Implement the KMP string searching algorithm

//
// JavaScript has search!
// There are many different search methods on arrays in JavaScript:

// indexOf
// includes
// find
// findIndex
// But how do these functions work?

//linear search
// best=>O(1) avarage=> O(n) worstcase=> O(n)

//
// Binary Search Pseudocode
// This function accepts a sorted array and a value
// Create a left pointer at the start of the array, and a right pointer at the end of the array
// While the left pointer comes before the right pointer:
// Create a pointer in the middle
// If you find the value you want, return the index
// If the value is too small, move the left pointer up
// If the value is too large, move the right pointer down
// If you never find the value, return -1
// beast case tc=>O(1) worstabd avarage case=>O(logn)
