let number = prompt("Nhập vào một số:");
let chuyenDoi = Number(number).toLocaleString("vi-VN", {
  style: "currency",
  currency: "VND",
});

alert(chuyenDoi);
