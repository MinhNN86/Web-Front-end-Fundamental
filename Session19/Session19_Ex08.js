let thang = +prompt("Nhập tháng bất kì trong năm");
if (thang <= 3) {
  alert("Mùa xuân");
} else if (thang <= 6) {
  alert("Mùa hạ");
} else if (thang <= 9) {
  alert("Mùa thu");
} else if (thang <= 12) {
  alert("Mùa đông");
} else {
  alert("Tháng không hợp lệ");
}
