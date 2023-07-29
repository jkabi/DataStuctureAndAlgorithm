//sort ()
// work correctly in String
// but not in Number

///method is it convet number to string  compare by unicode
//we want to tell javascript hoe to sort
function compare(num1, num2) {
  return num1 - num2;
}

[4, 8, 34, 9, 5, 7].sort(compare);
