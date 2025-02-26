let firstNumber = Number(prompt("Nhập số đầu tiên"));
let secondNumber = Number(prompt("Nhập số thứ hai"));
if (secondNumber !== 0 && firstNumber % secondNumber === 0) {
  alert(` số ${firstNumber} là bội số của ${secondNumber} `);
} else {
  alert(` số ${firstNumber} không phải là bội số của ${secondNumber} `);
}
