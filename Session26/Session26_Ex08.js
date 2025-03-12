let arr = [];
let n = +prompt("Số phần tử mảng 10 -> 20");
if (isNaN(n) || !Number.isInteger(n) || n < 10 || n > 20) {
  alert("Dữ liệu không hợp lệ");
} else {
  for (let i = 0; i < n; ) {
    let input = +prompt(`Nhập phần tử thứ ${i + 1}`);
    if (isNaN(input) || !Number.isInteger(input)) {
      alert("Dữ liệu không hợp lệ");
    } else {
      arr.push(input);
      i++;
    }
  }
  let mangLe = arr.filter((el) => el % 2 !== 0);
  let mangLeNguyenTo = mangLe.filter((el) => {
    if (el < 2) return false;
    for (let i = 2; i <= Math.sqrt(el); i++) {
      if (el % i === 0) return false;
    }
    return true;
  });
  alert(
    mangLeNguyenTo.length > 0
      ? `${mangLeNguyenTo.join(", ")}`
      : "Mảng không có phần tử lẻ nguyên tố"
  );
}
