// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

var isPalindrome = function (s) {
  let char = s.toLowerCase();
  char = char.split("");
  let check = char.charCodeAt(0);
  if (
    (check > 47 && check < 58) ||
    (check > 64 && check < 91) ||
    (check > 96 && check < 123)
  ) {
    console.log(char);
  }

  return;
};
console.log(isPalindrome("kaihsb KABI"));
