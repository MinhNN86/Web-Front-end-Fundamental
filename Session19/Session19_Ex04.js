let soKiemTra = +prompt("Nhập số cần kiểm tra");
if (soKiemTra % 3 === 0 && soKiemTra % 5 === 0) {
  alert(`${soKiemTra} chia hết cho cả 3 và 5`);
} else {
  alert(`${soKiemTra} không chia hết cho cả 3 và 5`);
}
