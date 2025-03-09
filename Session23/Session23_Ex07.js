let n = +prompt("Nhập số lượng phần tử của mảng");
let arr = [];

if (!Number.isInteger(n)) {
  alert("Số lượng phần tử không hợp lệ");
} else if (n === 0) {
  alert("Mảng không có phần tử nào");
} else if (n < 0) {
  alert("Số lượng phần tử không được nhỏ hơn 0");
} else {
  for (let i = 0; i < n; i++) {
    let input = +prompt(`Nhập phần tử thứ ${i} của mảng`);
    arr.push(input);
  }
  if (arr.length < 2) {
    alert("Không có số lớn thứ hai");
  } else {
    arr.sort((a, b) => b - a);
    let phanTuLonThuHai = arr[1];
    alert(phanTuLonThuHai);
  }
}
