let arr = [];
let check = true;
let checkArr = false;
while (check) {
  let luaChon = +prompt(`1. Nhập mảng
2. Hiển thị mảng
3. Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó
4. Tính tổng và trung bình cộng của các số dương trong mảng
5. Đảo ngược mảng
6. Kiểm tra mảng có đối xứng không
7. Thoát chương trình`);
  switch (luaChon) {
    case 1: //Nhập mảng
      if (checkArr) {
        alert("Mảng đã tồn tại");
        break;
      }
      checkArr = true;
      let n = +prompt("Nhập số phần tử có trong mảng");
      if (!Number.isInteger(n) || n <= 0 || n === null) {
        alert("Phần tử trong mảng không hợp lệ");
        break;
      }
      for (let i = 0; i < n; ) {
        let input = +prompt(`Nhập phần tử thứ ${i} của mảng`);
        if (!Number.isInteger(input)) {
          alert("Phần tử nhập vào mảng không hợp lệ, vui lòng nhập lại");
        } else {
          arr.push(input);
          i++;
        }
      }
      alert("Đã nhập mảng thành công");
      break;
    case 2: //Hiển thị mảng
      if (!checkArr) {
        alert("Mảng chưa tồn tại");
        break;
      }
      alert(`Các phần tử có trong mảng là: ${arr.join(", ")}`);
      break;
    case 3: //Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó
      if (!checkArr) {
        alert("Mảng chưa tồn tại");
        break;
      }
      let maxValue = arr[0];
      let maxIndex = 0;
      for (let i = 1; i < arr.length; i++) {
        if (maxValue < arr[i]) {
          maxValue = arr[i];
          maxIndex = i;
        }
      }
      alert(
        ` Phần tử lớn nhất trong mảng ${maxValue}\n Vị trí phần tử lớn nhất là ${maxIndex}`
      );
      break;
    case 4: //Tính tổng và trung bình cộng của các số dương trong mảng
      if (!checkArr) {
        alert("Mảng chưa tồn tại");
        break;
      }
      let tong = 0;
      let soLuongSoDuong = 0;
      let trungBinhCong;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
          tong += arr[i];
          soLuongSoDuong++;
        }
      }
      if (soLuongSoDuong === 0) {
        alert("Không có số dương trong mảng");
      } else {
        trungBinhCong = tong / soLuongSoDuong;
        alert(
          ` Trung bình cộng số dương trong mảng ${trungBinhCong.toFixed(2)}`
        );
      }
      break;
    case 5: // Đảo ngược mảng
      if (!checkArr) {
        alert("Mảng chưa tồn tại");
        break;
      }
      arr.reverse(); // Đảo ngược mảng
      alert(`Mảng sau khi đảo ngược: ${arr.join(", ")}`);
      break;
    case 6: // Kiểm tra mảng có đối xứng không
      if (!kiemTraMang) {
        alert("Mảng chưa tồn tại");
        break;
      }
      let doiXung = true;
      let soPhanTu = arr.length;
      for (let i = 0; i < Math.floor(soPhanTu / 2); i++) {
        if (arr[i] !== arr[soPhanTu - 1 - i]) {
          doiXung = false;
          break;
        }
      }
      if (doiXung) {
        alert("Mảng là đối xứng.");
      } else {
        alert("Mảng không đối xứng.");
      }
      break;
    case 7: //Thoát chương trình
      check = false;
      alert("Tạm biệt");
      break;
    default:
      alert("Nhập sai lựa chọn, vui lòng nhập lại");
      break;
  }
}
