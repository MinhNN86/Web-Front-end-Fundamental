let arr = [];
let check = true;
let checkArr = false;
while (check) {
  let luaChon = +prompt(`1. Nhập mảng
2. Hiển thị mảng
3. Tìm các phần tử chẵn và lẻ
4. Tính trung bình cộng của mảng
5. Xóa phần tử tại vị trí chỉ định
6. Tìm phần tử lớn thứ hai trong mảng
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
    case 3: //Tìm các phần tử chẵn và lẻ
      if (!checkArr) {
        alert("Mảng chưa tồn tại");
        break;
      }
      let arrChan = [];
      let arrLe = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
          arrChan.push(arr[i]);
        } else {
          arrLe.push(arr[i]);
        }
      }
      alert(
        `Các phần tử chẵn là ${arrChan.join(
          ", "
        )}\nCác phần tử lẻ là ${arrLe.join(", ")}`
      );
      break;
    case 4: // Tính trung bình cộng của mảng
      if (!checkArr) {
        alert("Mảng chưa tồn tại");
        break;
      }
      let tong = 0;
      for (let i = 0; i < arr.length; i++) {
        tong += arr[i];
      }
      let trungBinhCong = tong / arr.length;
      alert(`Trung bình cộng của mảng là: ${trungBinhCong.toFixed(2)}`);
      break;
    case 5: //Xóa phần tử tại vị trí chỉ định
      if (!checkArr) {
        alert("Mảng chưa tồn tại");
        break;
      }
      let removeIndex = +prompt("Nhập vị trí muốn xóa phần tử");
      if (
        !Number.isInteger(removeIndex) ||
        removeIndex < 0 ||
        removeIndex >= arr.length
      ) {
        alert("Vị trí xóa phần tử không hợp lệ");
        break;
      }
      arr.splice(removeIndex, 1);
      alert("Phần tử xóa thành công");
      break;
    case 6: // Tìm phần tử lớn thứ hai trong mảng
      if (!checkArr) {
        alert("Mảng chưa tồn tại");
        break;
      }
      if (arr.length < 2) {
        alert("Không có phần tử lớn thứ hai vì mảng quá nhỏ");
        break;
      }
      let max = arr[0];
      let maxIndex = 0;
      for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
          max = arr[i];
          maxIndex = i;
        }
      }
      let max2 = -Infinity;
      for (let i = 0; i < arr.length; i++) {
        if (i !== maxIndex && arr[i] > max2) {
          max2 = arr[i];
        }
      }
      if (max2 === -Infinity) {
        alert("Không có phần tử lớn thứ hai vì tất cả phần tử đều giống nhau");
      } else {
        alert(`Phần tử lớn thứ hai trong mảng là: ${max2}`);
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
