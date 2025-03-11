function isPalindrome(str) {
  str = str.toLowerCase();
  let reversedStr = str.split("").reverse().join("");
  if (str === reversedStr) {
    return "Là chuỗi đối xứng";
  } else {
    return "không phải là chuỗi đối xứng ";
  }
}

console.log(isPalindrome("hello"));
console.log(isPalindrome("aloola"));
console.log(isPalindrome("12345"));
