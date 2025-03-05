let tienGoc = parseFloat(prompt("Nhập số tiền ban đầu:"));
let laiSuat = parseFloat(prompt("Nhập lãi suất hàng tháng (%):")) / 100;
let soThang = parseInt(prompt("Nhập số tháng gửi:"));

if (
  isNaN(tienGoc) ||
  isNaN(laiSuat) ||
  isNaN(soThang) ||
  tienGoc <= 0 ||
  laiSuat < 0 ||
  soThang <= 0
) {
  alert("Dữ liệu nhập không hợp lệ.");
} else {
  let tongTien = tienGoc * Math.pow(1 + laiSuat, soThang);
  let tienLai = tongTien - tienGoc;

  alert(
    `Tiền lãi: ${tienLai.toFixed(3)}\nTiền nhận được: ${tongTien.toFixed(3)}`
  );
}
