let input = prompt("Nhập một ký tự:");

if (input.length === 1 && /^[a-zA-Z]$/.test(input)) {
  alert(`Ký tự ${input} là chữ cái`);
} else {
  alert("Không phải chữ cái");
}
