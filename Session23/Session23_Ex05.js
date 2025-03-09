let n = +prompt("Nhập số lượng phần tử của mảng");
let arr = [];
if (!Number.isInteger(n)) {
  alert("Số lượng phần tử không hợp lệ");
} else if (n === 0) {
  alert("Mảng không có phần tử");
} else if (n < 0) {
  alert("Số lượng phần tử không được âm");
} else {
  for (let i = 0; i < n; i++) {
    let input = prompt(`Nhập phần tử thứ ${i} của mảng`);
    arr.push(input);
  }
  let tongKyTuSo = 0;
  for (let i = 0; i < arr.length; i++) {
    let num = Number(arr[i]);
    if (!isNaN(num) && Number.isInteger(num)) {
      tongKyTuSo += num;
    }
  }
  if (tongKyTuSo === 0) {
    alert("Không có phần tử nào là số");
  } else {
    alert(tongKyTuSo);
  }
}
