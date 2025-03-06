let arr = [];
let input;
let soChan = 0,
  soLe = 0;
for (let i = 0; i < 5; ) {
  input = +prompt("Nhập só nguyên ngẫu nhiên");
  if (isNaN(input) || !Number.isInteger(input)) {
    alert("Lỗi: Định dạng, Vui lòng nhập lại");
  } else {
    arr.push(input);
    i++;
  }
}
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    soChan += arr[i];
  } else {
    soLe += arr[i];
  }
}
alert(` Tổng các số chẵn: ${soChan}
 Tổng các số lẻ: ${soLe}`);
