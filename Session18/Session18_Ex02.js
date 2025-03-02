let monToan = Number(prompt("nhập điểm toán"));
let monVan = Number(prompt("nhập điểm văn"));
let monAnh = Number(prompt("nhập điểm anh"));
let diemTrungBinh = parseFloat((monToan + monVan + monAnh) / 3).toFixed(1);
if (diemTrungBinh < 5) {
  alert("Học sinh yếu");
} else if (diemTrungBinh <= 6.4) {
  alert("Học sinh trung bình");
} else if (diemTrungBinh <= 7.9) {
  alert("Học sinh khá");
} else {
  alert("Học sinh giỏi");
}
