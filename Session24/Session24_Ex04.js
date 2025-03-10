let arr = [];
let check = true;
let checkArr = false;
while (check) {
  let luaChon = +prompt(`1. Nhập mảng 2 chiều
2. Hiển thị mảng 2 chiều
3. Tính tổng các phần tử trong mảng
4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó
5. Tính trung bình cộng các phần tử của một hàng cụ thể
6. Đảo ngược các hàng trong mảng
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
    case 4: //Tìm phần tử lớn nhất trong mảng và chỉ số của nó
      if (!checkArr) {
        alert("Mảng chưa tồn tại");
        break;
      }
      let maxValue = arr[0][0];
      let maxIndexRow = 0,
        maxIndexCol = 0;
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
          if (maxValue < arr[i][j]) {
            maxValue = arr[i][j];
            maxIndexRow = i;
            maxIndexCol = j;
          }
        }
      }
      alert(
        `Phần tử lớn nhất: ${maxValue} tại vị trí (${maxIndexRow}, ${maxIndexCol})`
      );
      break;
    case 5: // Tính trung bình cộng các phần tử của một hàng cụ thể
      if (!checkArr) {
        alert("Mảng chưa tồn tại");
        break;
      }
      let arrTrungBinhCong = [];
      for (let i = 0; i < arr.length; i++) {
        let tong = 0;
        for (let j = 0; j < arr[i].length; j++) {
          tong += arr[i][j];
        }
        let trungBinhCong = tong / arr[i].length;
        arrTrungBinhCong.push(trungBinhCong);
      }
      for (let i = 0; i < arr.length; i++) {
        alert(`Trung bình cộng hàng ${i} là ${arrTrungBinhCong[i]}`);
      }
      break;
    case 6: // Đảo ngược các hàng trong mảng
      if (!checkArr) {
        alert("Mảng chưa tồn tại");
        break;
      }
      for (let i = 0; i < arr.length; i++) {
        arr[i].reverse();
      }
      // Hiển thị lại mảng sau khi đảo
      let result = "Mảng sau khi đảo ngược ký tự từng hàng:\n";
      for (let i = 0; i < arr.length; i++) {
        result += arr[i].join(" ") + "\n";
      }
      alert(result);
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
