let n = +prompt("Nhập số lượng phần tử của mảng");
let arr = [];
if (!Number.isInteger(n) || n < 0) {
  alert("Số lượng phần tử không hợp lệ");
} else if (n === 0) {
  alert("Mảng không có phần tử");
} else {
  for (let i = 0; i < n; i++) {
    let input = +prompt(`Nhập vào phần tử mảng thứ ${i}`);
    arr.push(input);
  }
  let soNguyenAm = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Number.isInteger(arr[i]) && arr[i] < 0) {
      soNguyenAm++;
    }
  }
  if (soNguyenAm === 0) {
    alert("Mảng không có số nguyên âm");
  } else {
    alert(soNguyenAm);
  }
}
