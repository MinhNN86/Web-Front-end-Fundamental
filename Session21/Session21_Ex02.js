let mangNhap = [];
let soChan = 0,
  soLe = 0;
for (let i = 0; i < 5; ) {
  let n = prompt("Nhập số nguyên:");
  n = Number(n);
  if (!Number.isInteger(n) || isNaN(n)) {
    alert("Số nhập vào không hợp lệ, vui lòng nhập lại.");
  } else {
    mangNhap.push(n);
    i++;
  }
}
for (let i = 0; i < mangNhap.length; i++) {
  if (mangNhap[i] % 2 === 0) {
    soChan++;
  } else {
    soLe++;
  }
}
alert(`Số lượng số chẵn: ${soChan}
Số lượng số lẻ: ${soLe}`);
