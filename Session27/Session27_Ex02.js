let menu = `Menu
1. Nhập danh sách sinh viên
2. Hiển thị danh sách sinh viên
3. Tìm sinh viên theo tên
4. Xóa sinh viên khỏi danh sách
5. Thoát`;
let sinhVien = [];
function case1(arr) {
  let n = +prompt("Nhập số lượng sinh viên thêm");
  if (isNaN(n) || !Number.isInteger(n) || n < 0) {
    alert("Số lượng sinh viên không hợp lệ");
    return;
  } else {
    for (let i = 0; i < n; i++) {
      let input = prompt("Nhập tên sinh viên thứ " + (i + 1));
      arr.push(input);
    }
  }
}
function case2(arr) {
  alert(arr.join("\n"));
}
function case3(arr) {
  let input = prompt("Nhập tên sinh viên cần tìm kiếm");
  let ketQuaTimKiem = arr.filter((el) => el.includes(input));
  if (ketQuaTimKiem.length === 0) {
    alert("Không tìm thấy sinh viên nào!");
  } else {
    alert("Kết quả tìm kiếm: \n" + ketQuaTimKiem.join("\n"));
  }
}
function case4(arr) {
  let input = prompt("Nhập tên sinh viên cần xóa");
  let ketQuaTimKiem = arr.filter((el) => el.includes(input));
  if (ketQuaTimKiem.length === 0) {
    alert("Không tìm thấy sinh viên nào!");
    return;
  } else {
    alert(
      "Kết quả tìm kiếm: " +
        ketQuaTimKiem.join("\n") +
        "\nXóa sinh viên đầu tiên"
    );
  }
  let removedIndex = arr.indexOf(ketQuaTimKiem[0]);
  arr.splice(removedIndex, 1);
}

let check = true;
let checkArr = false;
while (check) {
  let luaChon = +prompt(menu);
  switch (luaChon) {
    case 1:
      case1(sinhVien);
      checkArr = sinhVien.length > 0;
      break;
    case 2:
      if (!checkArr) {
        alert("Chưa nhập mảng");
        break;
      }
      case2(sinhVien);
      break;
    case 3:
      if (!checkArr) {
        alert("Chưa nhập mảng");
        break;
      }
      case3(sinhVien);
      break;
    case 4:
      if (!checkArr) {
        alert("Chưa nhập mảng");
        break;
      }
      case4(sinhVien);
      break;
    case 5:
      alert("Tạm biệt");
      check = false;
      break;
    default:
      alert("Lựa chọn không hợp lệ");
      break;
  }
}
