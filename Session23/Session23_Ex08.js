let n = +prompt("Nhập số lượng phần tử của mảng");
let arr = [];
if (!Number.isInteger(n)) {
  alert("Số lượng phần tử không hợp lệ");
} else if (n < 0) {
  alert("Số lượng phần tử không được nhỏ hơn 0");
} else {
  for (let i = 0; i < n; i++) {
    let input = +prompt(`Nhập phần tử thứ ${i + 1} của mảng`);
    arr.push(input);
  }
  let isFibonacci = true;
  if (arr.length < 3) {
    isFibonacci = false;
  } else {
    for (let i = 2; i < arr.length; i++) {
      if (arr[i] !== arr[i - 1] + arr[i - 2]) {
        isFibonacci = false;
        break;
      }
    }
  }
  if (isFibonacci) {
    alert("Là dãy số fibonacci");
  } else {
    alert("Không phải dãy số fibonacci");
  }
}
