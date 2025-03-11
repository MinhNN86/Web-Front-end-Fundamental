function isStrongPassword(password) {
  if (password.length < 8) {
    return false;
  }
  let hasUpper = false;
  let hasLower = false;
  let hasNumber = false;
  let arr = password.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= "A" && arr[i] <= "Z") {
      hasUpper = true;
    } else if (arr[i] >= "a" && arr[i] <= "z") {
      hasLower = true;
    } else if (arr[i] >= "0" && arr[i] <= "9") {
      hasNumber = true;
    }
  }
  return hasUpper && hasLower && hasNumber;
}

console.log(isStrongPassword("Abc123!@"));
console.log(isStrongPassword("weakpass"));
