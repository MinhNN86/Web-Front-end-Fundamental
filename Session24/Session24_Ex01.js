let arr = [];
let check = true;
let checkArr = false;
while (check) {
  let luaChon = +prompt(`1. Nhập mảng
2. Hiển thị mảng
3. Tìm phần tử lớn nhất và nhỏ nhất trong mảng
4. Tính tổng các phần tử trong mảng
5. Tìm số lần xuất hiện của một phần tử trong mảng
6. Sắp xếp mảng tăng dần
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
        if (isNaN(input)) {
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
    case 3: //Tìm phần tử lớn nhất và nhỏ nhất trong mảng
      if (!checkArr) {
        alert("Mảng chưa tồn tại");
        break;
      }
      let min = arr[0];
      let max = arr[0];
      for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
          min = arr[i];
        }
        if (arr[i] > max) {
          max = arr[i];
        }
      }
      alert(` Phần tử nhỏ nhất: ${min}\n Phần tử lớn nhất ${max}`);
      break;
    case 4: //Tính tổng các phần tử trong mảng
      if (!checkArr) {
        alert("Mảng chưa tồn tại");
        break;
      }
      let tongPhanTu = 0;
      for (let i = 0; i < arr.length; i++) {
        tongPhanTu += arr[i];
      }
      alert(` Tổng các phần tử tong mảng là: ${tongPhanTu}`);
      break;
    case 5: //Tìm số lần xuất hiện của một phần tử trong mảng
      if (!checkArr) {
        alert("Mảng chưa tồn tại");
        break;
      }
      let count = 0;
      let searchValue = +prompt("Nhập phần tử cần tìm");
      if (isNaN(searchValue)) {
        alert("Phần tử nhập vào không hợp lệ");
        break;
      }
      for (let i = 0; i < arr.length; i++) {
        if (searchValue === arr[i]) {
          count++;
        }
      }
      if (count === 0) {
        alert("Không tìm thấy phần tử");
      } else {
        alert(` Số lần xuất hiện phần tử trong mảng là ${count}`);
      }
      break;
    case 6: // Sắp xếp mảng tăng dần
      if (!checkArr) {
        alert("Mảng chưa tồn tại");
        break;
      }
      arr.sort((a, b) => a - b);
      alert("Mảng đã sắp xếp tăng dần: " + arr.join(", "));
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
