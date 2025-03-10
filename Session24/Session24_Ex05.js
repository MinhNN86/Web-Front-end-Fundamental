let arr = [];
let check = true;
let checkArr = false;
while (check) {
  let luaChon = +prompt(`1. Nhập mảng 2 chiều
2. Hiển thị mảng 2 chiều
3. Tính tổng các phần tử trong mảng
4. Tính tổng đường chéo chính
5. Tính tổng đường chéo phụ
6. Tính trung bình cộng các phần tử trong một hàng hoặc một cột
7. Thoát chương trình`);
  switch (luaChon) {
    case 1: //Nhập mảng 2 chiều
      if (checkArr) {
        alert("Mảng đã tồn tại");
        break;
      }
      checkArr = true;
      let row = +prompt("Nhập số hàng trong mảng");
      if (!Number.isInteger(row) || row <= 0) {
        alert("Số hàng trong mảng không hợp lệ");
        break;
      }
      let col = +prompt("Nhập số cột trong mảng");
      if (!Number.isInteger(col) || col <= 0) {
        alert("Số cột trong mảng không hợp lệ");
        break;
      }
      for (let i = 0; i < row; i++) {
        arr[i] = [];
        for (let j = 0; j < col; j++) {
          let input;
          do {
            input = +prompt(`Nhập giá trị cho phần tử [${i}][${j}]:`);
            if (isNaN(input)) {
              alert("Giá trị không hợp lệ, vui lòng nhập lại.");
            }
          } while (isNaN(input));
          arr[i][j] = input;
        }
      }
      alert("Đã thêm mảng 2 chiều thành công");
      break;
    case 2: // Hiển thị mảng 2 chiều
      if (!checkArr) {
        alert("Mảng chưa tồn tại");
        break;
      }
      let output = "Mảng 2 chiều:\n";
      for (let i = 0; i < arr.length; i++) {
        output += arr[i].join(" ") + "\n";
      }
      alert(output);
      break;
    case 3: //Tính tổng các phần tử trong mảng
      if (!checkArr) {
        alert("Mảng chưa tồn tại");
        break;
      }
      let tongPhanTu = 0;
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
          tongPhanTu += arr[i][j];
        }
      }
      alert(` Tổng các phần tử trong mảng ${tongPhanTu}`);
      break;
    case 4: // Tính tổng đường chéo chính
      if (!checkArr) {
        alert("Mảng chưa tồn tại");
        break;
      }
      if (arr.some((row) => row.length !== arr.length)) {
        alert("Không phải mảng vuông");
        break;
      }
      let tong = 0;
      for (let i = 0; i < arr.length; i++) {
        tong += arr[i][i];
      }
      alert(`Tổng đường chéo chính là ${tong}`);
      break;
    case 5: // Tính tổng đường chéo phụ
      if (!checkArr) {
        alert("Mảng chưa tồn tại");
        break;
      }
      if (arr.some((row) => row.length !== arr.length)) {
        alert("Không phải mảng vuông");
        break;
      }
      let tongPhu = 0;
      for (let i = 0; i < arr.length; i++) {
        tongPhu += arr[i][arr.length - 1 - i];
      }
      alert(`Tổng đường chéo phụ là ${tongPhu}`);
      break;
    case 6: // Tính trung bình cộng các phần tử trong một hàng hoặc một cột
      if (!checkArr) {
        alert("Mảng chưa tồn tại");
        break;
      }
      let luaChonTinh = +prompt(
        "1. Tính trung bình cộng từng hàng \n 2. Tính trung bình cộng từng cột"
      );
      switch (luaChonTinh) {
        case 1: //Tính trung bình cộng từng hàng
          let arrTrungBinhCongHang = [];
          for (let i = 0; i < arr.length; i++) {
            let tong = 0;
            for (let j = 0; j < arr[i].length; j++) {
              tong += arr[i][j];
            }
            let trungBinhCong = tong / arr[i].length;
            arrTrungBinhCongHang.push(trungBinhCong);
          }
          for (let i = 0; i < arr.length; i++) {
            alert(`Trung bình cộng hàng ${i} là ${arrTrungBinhCongHang[i]}`);
          }
          break;
        case 2: //Tính trung bình cộng từng cột
          let soCot = arr[0].length;
          let arrTrungBinhCongCot = [];

          for (let j = 0; j < soCot; j++) {
            let tong = 0;
            for (let i = 0; i < arr.length; i++) {
              tong += arr[i][j];
            }
            let trungBinhCong = tong / arr.length;
            arrTrungBinhCongCot.push(trungBinhCong);
          }

          for (let j = 0; j < soCot; j++) {
            alert(`Trung bình cộng cột ${j} là ${arrTrungBinhCongCot[j]}`);
          }
          break;
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
