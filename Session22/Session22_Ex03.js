let input = prompt("Nhập vào dãy số bất kì");

if (isNaN(input) || input.includes(" ")) {
  alert("Dãy không hợp lệ");
} else {
  let reversed = input.split("").reverse().join("");
  alert("Dãy sau khi đảo ngược: " + reversed);
}
