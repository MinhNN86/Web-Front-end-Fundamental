let input = prompt("Nhập một số nguyên:");
let n = Number(input);
if (isNaN(n) || !Number.isInteger(n)) {
  alert("Số không hợp lệ");
} else {
  let reversed = "";
  for (let i = input.length - 1; i >= 0; i--) {
    reversed += input[i];
  }

  if (input === reversed) {
    alert("Là số đối xứng");
  } else {
    alert("Không phải số đối xứng");
  }
}
