let soTienMy = Number(
  prompt("Nhập số tiền đô la Mỹ để đổi sang tiền Việt Nam")
);
const giaTriTienViet = 25000;
let soTienViet = soTienMy * giaTriTienViet;
alert(`số tiền Việt Nam sau khi đổi là: ${soTienViet}`);
