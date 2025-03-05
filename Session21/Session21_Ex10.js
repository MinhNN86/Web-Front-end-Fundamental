let n = +prompt("Nhap so nguyen n de in ra n so nguyen to:");
if (!Number.isInteger(n) || n <= 0) {
  alert("Loi: Hay nhap mot so nguyen duong!");
} else {
  let dem = 0;
  let so = 2;
  let danhSachNguyenTo = [];
  while (dem < n) {
    let laNguyenTo = true;
    if (so < 2) {
      laNguyenTo = false;
    } else {
      for (let i = 2; i < so; i++) {
        if (so % i === 0) {
          laNguyenTo = false;
          break;
        }
      }
    }
    if (laNguyenTo) {
      danhSachNguyenTo.push(so);
      dem++;
    }
    so++;
  }
  alert(`Danh sach ${n} so nguyen to dau tien: ` + danhSachNguyenTo.join(", "));
}
