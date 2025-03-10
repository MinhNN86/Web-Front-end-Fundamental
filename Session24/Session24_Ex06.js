let chuoi = "";
let checkChuoi = false;
let check = true;

while (check) {
  let luaChon = +prompt(`1. Nhập chuỗi
2. Hiển thị chuỗi
3. Tính độ dài của chuỗi
4. Đếm số lần xuất hiện của một ký tự trong chuỗi
5. Kiểm tra chuỗi có phải là chuỗi đối xứng không
6. Chuyển đổi chuỗi thành chữ in hoa các ký tự đầu tiên của từ
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
    case 3: // Tính độ dài của chuỗi
      if (!checkChuoi) {
        alert("Chuỗi chưa tồn tại");
        break;
      }
      alert(`Độ dài của chuỗi ${chuoi.length}`);
      break;
    case 4: // Đếm số lần xuất hiện của một ký tự trong chuỗi
      if (!checkChuoi) {
        alert("Chuỗi chưa tồn tại");
        break;
      }
      let kyTu = prompt("Nhập ký tự cần đếm");
      if (kyTu.length !== 1) {
        alert("Ký tự tìm không hợp lệ");
        break;
      }
      let dem = chuoi.split(kyTu).length - 1;
      alert(`Ký tự "${kyTu}" xuất hiện ${dem} lần trong chuỗi.`);
      break;
    case 5: // Kiểm tra chuỗi có phải là chuỗi đối xứng không
      if (!checkChuoi) {
        alert("Chuỗi chưa tồn tại");
        break;
      }
      let chuoiDaoNguoc = chuoi.split("").reverse().join("");
      if (chuoi.toLowerCase() === chuoiDaoNguoc.toLowerCase()) {
        alert("Chuỗi đối xứng");
      } else {
        alert("Không phải chuỗi đối xứng");
      }
      break;
    case 6: // Chuyển đổi chữ cái đầu thành in hoa
      if (!checkChuoi) {
        alert("Chuỗi chưa tồn tại");
        break;
      }
      let words = chuoi.toLowerCase().split(" ");
      for (let i = 0; i < words.length; i++) {
        if (words[i].length > 0) {
          words[i] = words[i][0].toUpperCase() + words[i].slice(1);
        }
      }
      let chuoiHoa = words.join(" ");
      alert(`Chuỗi sau khi chuyển đổi: "${chuoiHoa}"`);
      break;
    case 7: // Thoát chương trình
      check = false;
      alert("Tạm biệt!");
      break;
    default:
      alert("Nhập sai lựa chọn, vui lòng nhập lại");
      break;
  }
}
