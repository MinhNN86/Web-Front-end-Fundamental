let chuoi = "";
let checkChuoi = false;
let check = true;

while (check) {
  let luaChon = +prompt(`1. Nhập chuỗi
2. Hiển thị chuỗi
3. Loại bỏ khoảng trắng ở đầu và cuối chuỗi
4. Đảo ngược chuỗi ký tự
5. Đếm số lượng từ trong chuỗi
6. Tìm kiếm và thay thế ký tự trong chuỗi
7. Thoát chương trình`);
  switch (luaChon) {
    case 1: // Nhập chuỗi
      if (checkChuoi) {
        alert("Chuỗi đã tồn tại");
        break;
      }
      chuoi = prompt("Nhập vào chuỗi:");
      if (chuoi.trim() === "") {
        alert("Chuỗi rỗng");
      } else {
        checkChuoi = true;
        alert("Nhập chuỗi thành công");
      }
      break;
    case 2: // Hiển thị chuỗi
      if (!checkChuoi) {
        alert("Chuỗi chưa tồn tại");
        break;
      }
      alert(`Chuỗi hiện tại "${chuoi}"`);
      break;
    case 3: // Loại bỏ khoảng trắng ở đầu và cuối
      if (!checkChuoi) {
        alert("Chuỗi chưa tồn tại");
        break;
      }
      chuoi = chuoi.trim();
      alert(`Chuỗi sau khi loại bỏ khoảng trắng: "${chuoi}"`);
      break;
    case 4: // Đảo ngược chuỗi ký tự
      if (!checkChuoi) {
        alert("Chuỗi chưa tồn tại");
        break;
      }
      let chuoiDaoNguoc = chuoi.split("").reverse().join("");
      alert(`Chuỗi sau khi đảo ngược: "${chuoiDaoNguoc}"`);
      break;
    case 5: // Đếm số lượng từ trong chuỗi
      if (!checkChuoi) {
        alert("Chuỗi chưa tồn tại");
        break;
      }
      let soTu = 0;
      let trongTu = false;
      for (let i = 0; i < chuoi.length; i++) {
        let kyTu = chuoi[i];
        if (("a" <= kyTu && kyTu <= "z") || ("A" <= kyTu && kyTu <= "Z")) {
          if (!trongTu) {
            soTu++;
            trongTu = true;
          }
        } else {
          trongTu = false;
        }
      }
      alert(`Số lượng từ trong chuỗi: ${soTu}`);
      break;
    case 6: // Tìm kiếm và thay thế ký tự
      if (!checkChuoi) {
        alert("Chuỗi chưa tồn tại");
        break;
      }
      let kyTuCanTim = prompt("Nhập ký tự cần tìm");
      if (kyTuCanTim.length !== 1) {
        alert("Ký tự không hợp lệ");
        break;
      }
      if (!chuoi.includes(kyTuCanTim)) {
        alert("Ký tự không có trong chuỗi");
        break;
      }
      let kyTuThayThe = prompt("Nhập ký tự thay thế");
      chuoi = chuoi.replaceAll(kyTuCanTim, kyTuThayThe);
      alert(`Chuỗi sau khi thay thế: "${chuoi}"`);
      break;
    case 7: // Thoát chương trình
      check = false;
      alert("Tạm biệt");
      break;
    default:
      alert("Nhập sai lựa chọn, vui lòng nhập lại");
      break;
  }
}
