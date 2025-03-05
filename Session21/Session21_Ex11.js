let ngay = +prompt("Nhập ngày sinh:");
let thang = +prompt("Nhập tháng sinh:");

let cungHoangDao = "";

if ((thang === 3 && ngay >= 21) || (thang === 4 && ngay <= 20)) {
  cungHoangDao = "Bạch Dương (21/3 - 20/4)";
} else if ((thang === 4 && ngay >= 21) || (thang === 5 && ngay <= 20)) {
  cungHoangDao = "Kim Ngưu (21/4 - 20/5)";
} else if ((thang === 5 && ngay >= 21) || (thang === 6 && ngay <= 21)) {
  cungHoangDao = "Song Tử (21/5 - 21/6)";
} else if ((thang === 6 && ngay >= 22) || (thang === 7 && ngay <= 22)) {
  cungHoangDao = "Cự Giải (22/6 - 22/7)";
} else if ((thang === 7 && ngay >= 23) || (thang === 8 && ngay <= 22)) {
  cungHoangDao = "Sư Tử (23/7 - 22/8)";
} else if ((thang === 8 && ngay >= 23) || (thang === 9 && ngay <= 22)) {
  cungHoangDao = "Xử Nữ (23/8 - 22/9)";
} else if ((thang === 9 && ngay >= 23) || (thang === 10 && ngay <= 23)) {
  cungHoangDao = "Thiên Bình (23/9 - 23/10)";
} else if ((thang === 10 && ngay >= 24) || (thang === 11 && ngay <= 22)) {
  cungHoangDao = "Bọ Cạp (24/10 - 22/11)";
} else if ((thang === 11 && ngay >= 23) || (thang === 12 && ngay <= 21)) {
  cungHoangDao = "Nhân Mã (23/11 - 21/12)";
} else if ((thang === 12 && ngay >= 22) || (thang === 1 && ngay <= 19)) {
  cungHoangDao = "Ma Kết (22/12 - 19/1)";
} else if ((thang === 1 && ngay >= 20) || (thang === 2 && ngay <= 18)) {
  cungHoangDao = "Bảo Bình (20/1 - 18/2)";
} else if ((thang === 2 && ngay >= 19) || (thang === 3 && ngay <= 20)) {
  cungHoangDao = "Song Ngư (19/2 - 20/3)";
} else {
  cungHoangDao = "Ngày hoặc tháng không hợp lệ!";
}

alert("Cung hoàng đạo của bạn là: " + cungHoangDao);
