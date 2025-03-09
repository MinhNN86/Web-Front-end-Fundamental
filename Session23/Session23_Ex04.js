let n = +prompt("Nhập số lượng phần tử của mảng");
let arr = [];
if (!Number.isInteger(n) || n < 0) {
  alert("Số lượng phần tử không hợp lệ");
} else if (n === 0) {
  alert("Không có ký tự số");
} else {
  for (let i = 0; i < n; i++) {
    let input = prompt(`Nhập vào phần tử thứ ${i} của mảng`);
    arr.push(input);
  }

  let kyTuSo = [];
  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
      kyTuSo.push(arr[i]);
    }
  }

  if (kyTuSo.length === 0) {
    alert("Không có ký tự số");
  } else {
    alert(kyTuSo.join(" "));
  }
}
