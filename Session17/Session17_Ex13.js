let soTienGui = Number(prompt("Nhập số tiền gửi"));
let thoiGianGui = Number(prompt("Nhập số tháng gửi tiền"));
let laiXuatNam = 4.3 / 100;
let laiXuatThang = laiXuatNam / 12;
let soTienLai = soTienGui * laiXuatThang * thoiGianGui;
let soTienSauKhiLay = soTienLai + soTienGui;
alert(` Số tiền lãi sau khi gửi tiền là: ${soTienLai.toFixed(2)}
Tổng số tiền nhận được là: ${soTienSauKhiLay}`);
