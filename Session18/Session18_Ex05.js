let soNamKinhNghiem = +prompt("Nhập số năm kinh nghiệm");
if (soNamKinhNghiem < 1) {
  alert("Mới vào nghề");
} else if (soNamKinhNghiem <= 3) {
  alert("Nhân viên có kinh nghiệm");
} else if (soNamKinhNghiem <= 6) {
  alert("Chuyên viên");
} else {
  alert("Quản lý");
}
