let check = true;
let arr = [];
let checkMang = false;

while (check) {
  let luaChon = +prompt(`MENU
    1. Nhập vào mảng
    2. Hiển thị mảng
    3. Thêm phần tử
    4. Sửa phần tử
    5. Xóa phần tử
    6. Thoát
    Lựa chọn của bạn:`);

  switch (luaChon) {
    case 1: // Nhập vào mảng
      if (checkMang) {
        alert("Mảng đã có phần tử.");
        break;
      }
      checkMang = true;
      let count = +prompt("Nhập số lượng phần tử muốn thêm:");
      for (let i = 0; i < count; i++) {
        let input = prompt(`Nhập phần tử thứ ${i + 1}:`);
        arr.push(input);
      }
      alert("Đã thêm vào mảng.");
      break;

    case 2: // Hiển thị mảng
      if (!checkMang) {
        alert("Mảng còn rỗng.");
      } else {
        alert("Mảng hiện tại: " + arr.join(", "));
      }
      break;

    case 3: // Thêm phần tử vào vị trí bất kỳ
      if (!checkMang) {
        alert("Mảng còn rỗng.");
      } else {
        let addNumber = +prompt("Nhập số lượng phần tử muốn thêm:");
        let addIndex = +prompt(
          "Nhập vị trí muốn thêm phần tử (0 - " + arr.length + "):"
        );

        if (addIndex < 0 || addIndex > arr.length || isNaN(addIndex)) {
          alert("Vị trí không hợp lệ!");
          break;
        }

        for (let i = 0; i < addNumber; i++) {
          let addValue = prompt(`Nhập phần tử thứ ${i + 1} muốn thêm:`);
          arr.splice(addIndex, 0, addValue);
        }
        alert("Đã thêm phần tử vào mảng.");
      }
      break;

    case 4: // Sửa phần tử theo vị trí
      if (!checkMang) {
        alert("Mảng còn rỗng.");
      } else {
        let editIndex = +prompt(
          "Nhập vị trí muốn sửa phần tử (0 - " + (arr.length - 1) + "):"
        );

        if (
          !Number.isInteger(editIndex) ||
          editIndex < 0 ||
          editIndex >= arr.length
        ) {
          alert("Vị trí sửa không hợp lệ!");
        } else {
          let editValue = prompt("Nhập giá trị mới của phần tử:");
          arr[editIndex] = editValue;
          alert("Đã sửa phần tử trong mảng.");
        }
      }
      break;

    case 5: // Xóa phần tử theo vị trí
      if (!checkMang) {
        alert("Mảng còn rỗng.");
      } else {
        let deleteIndex = +prompt(
          "Nhập vị trí muốn xóa phần tử (0 - " + (arr.length - 1) + "):"
        );

        if (
          !Number.isInteger(deleteIndex) ||
          deleteIndex < 0 ||
          deleteIndex >= arr.length
        ) {
          alert("Vị trí xóa không hợp lệ!");
        } else {
          arr.splice(deleteIndex, 1);
          alert("Đã xóa phần tử trong mảng.");
          if (arr.length === 0) checkMang = false;
        }
      }
      break;

    case 6: // Thoát chương trình
      alert("Tạm biệt!");
      check = false;
      break;

    default:
      alert("Lựa chọn không hợp lệ! Vui lòng nhập từ 1 - 6.");
  }
}
