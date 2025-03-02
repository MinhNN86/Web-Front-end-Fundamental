let nam = parseInt(prompt("Nhập một năm: "), 10);

if (isNaN(nam) || nam < 0) {
  alert("Vui lòng nhập một số năm hợp lệ!");
} else if ((nam % 4 === 0 && nam % 100 !== 0) || nam % 400 === 0) {
  alert(nam + " là năm nhuận.");
} else {
  alert(nam + " không phải là năm nhuận.");
}
