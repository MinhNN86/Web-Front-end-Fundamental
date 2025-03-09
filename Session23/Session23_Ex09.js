let arr = [];
let check = true;
let checkArr = false;
while (check) {
  let luaChon = +prompt(`==========MENU==========
1. Nhập số phần tử cần nhập và giá trị các phần tử
2. In ra giá trị các phần tử đang quản lý
3. In ra giá trị các phần tử chẵn và tính tổng
4. In ra giá trị lớn nhất và nhỏ nhất trong mảng
5. In ra các phần tử là số nguyên tố trong mảng và tính tổng
6. Nhập vào một số và thống kê trong mảng có bao nhiêu phần tử đó
7. Thêm một phần tử vào vị trí chỉ định
8. Thoát
========================`);
  switch (luaChon) {
    case 1: //Nhập số phần tử cần nhập và giá trị các phần tử
      if (checkArr) {
        alert("Mảng đã chứa phần tử");
        break;
      }
      checkArr = true;
      let n = +prompt("Nhập số phần tử có trong mảng:");
      for (let i = 0; i < n; i++) {
        let input = prompt(`Nhập phần tử thứ ${i + 1}:`);
        arr.push(input);
      }
      alert("Đã nhập vào mảng");
      break;
    case 2: //In ra giá trị các phần tử đang quản lý
      if (!checkArr) {
        alert("Mảng chưa có phần tử");
        break;
      }
      alert("Mảng hiện tại: " + arr.join(", "));
      break;
    case 3: // In ra giá trị các phần tử chẵn và tính tổng
      if (!checkArr) {
        alert("Mảng chưa có phần tử");
        break;
      }
      let mangChan = [];
      let tongSoChan = 0;
      for (let i = 0; i < arr.length; i++) {
        let so = Number(arr[i]);
        if (so % 2 === 0) {
          mangChan.push(so);
          tongSoChan += so;
        }
      }
      if (mangChan.length === 0) {
        alert("Không có số chẵn trong mảng.");
      } else {
        alert(
          `Phần tử chẵn: ${mangChan.join(", ")}\nTổng số chẵn là: ${tongSoChan}`
        );
      }
      break;
    case 4: // In ra giá trị lớn nhất và nhỏ nhất trong mảng
      if (!checkArr || arr.length === 0) {
        alert("Mảng chưa có phần tử");
        break;
      }
      let lonNhat = Math.max(...arr);
      let nhoNhat = Math.min(...arr);
      alert(`Giá trị lớn nhất: ${lonNhat}\nGiá trị nhỏ nhất: ${nhoNhat}`);
      break;
    case 5: //In ra các phần tử là số nguyên tố trong mảng và tính tổng
      if (!checkArr || arr.length === 0) {
        alert("Mảng chưa có phần tử");
        break;
      }
      let mangNguyenTo = [];
      let tongNguyenTo = 0;
      for (let i = 0; i < arr.length; i++) {
        let soNguyenTo = true;
        if (arr[i] < 2) {
          soNguyenTo = false;
        } else {
          for (let y = 2; y < arr[i]; y++) {
            if (Number(arr[i]) % y === 0) {
              soNguyenTo = false;
            }
          }
        }
        if (soNguyenTo) {
          mangNguyenTo.push(arr[i]);
          tongNguyenTo += +arr[i];
        }
      }
      if (tongNguyenTo === 0) {
        alert("Mảng không có số nguyên tố");
      } else {
        alert(` Số nguyên tố có trong mảng ${mangNguyenTo.join(", ")}
Tổng các số nguyên tố ${tongNguyenTo}`);
      }
      break;
    case 6: //Nhập vào một số và thống kê trong mảng có bao nhiêu phần tử đó
      if (!checkArr || arr.length === 0) {
        alert("Mảng chưa có phần tử");
        break;
      }
      let input = +prompt("Nhập vào một số để thông kê trong mảng");
      let count = 0;
      for (let i = 0; i < arr.length; i++) {
        if (Number(arr[i]) === input) {
          count++;
        }
      }
      if (count === 0) {
        alert("Giá trị đó không tồn tại trong mảng");
      } else {
        alert(`Trong mảng có ${count} phần tử có giá trị ${input}`);
      }
      break;
    case 7: //Thêm một phần tử vào vị trí chỉ định
      if (!checkArr || arr.length === 0) {
        alert("Mảng chưa có phần tử");
        break;
      }
      let addIndex = +prompt("Nhập vị trí thêm của phần tử mới");
      if (
        !Number.isInteger(addIndex) ||
        addIndex < 0 ||
        addIndex > arr.length
      ) {
        alert("Vị trí thêm phần tử không hợp lệ");
        break;
      }
      let addValue = prompt("Nhập giá trị của phần tử mới");
      addValue = isNaN(addValue) ? addValue : +addValue;
      arr.splice(addIndex, 0, addValue);
      alert("Đã thêm phần tử thành công");
      break;
    case 8: //Thoát
      check = false;
      alert("Đã thoát chương trình.");
      break;
    default:
      alert("Lựa chọn không hợp lệ, vui lòng nhập lại!");
      break;
  }
}
