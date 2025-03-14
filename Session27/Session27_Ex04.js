let menu = `Menu
1. Nhập danh sách số nguyên.
2. Tính trung bình các số.
3. Tìm số chẵn lớn nhất.
4. Tìm số lẻ nhỏ nhất.
5. Thoát.`;

let arr = [];

function case1(arr) {
  let n = +prompt("Nhập số phần tử trong mảng");
  if (isNaN(n) || !Number.isInteger(n) || n <= 0) {
    alert("Số lượng phần tử không hợp lệ");
    return;
  }
  for (let i = 0; i < n; ) {
    let input = +prompt("Nhập số nguyên thứ " + (i + 1));
    if (isNaN(input) || !Number.isInteger(input)) {
      alert("Không phải số nguyên, vui lòng nhập lại.");
    } else {
      arr.push(input);
      i++;
    }
  }
  alert("Nhập mảng thành công: " + arr.join(", "));
}

function case2(arr) {
  if (arr.length === 0) {
    alert("Mảng rỗng, không thể tính trung bình.");
    return;
  }
  let result = arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
  alert("Trung bình cộng các số là: " + result.toFixed(2));
}

function case3(arr) {
  let soChan = arr.filter((el) => el % 2 === 0);
  if (soChan.length === 0) {
    alert("Không có số chẵn trong mảng.");
    return;
  }
  let soChanMax = Math.max(...soChan);
  alert("Số chẵn lớn nhất: " + soChanMax);
}

function case4(arr) {
  let soLe = arr.filter((el) => el % 2 !== 0);
  if (soLe.length === 0) {
    alert("Không có số lẻ trong mảng.");
    return;
  }
  let soLeMin = Math.min(...soLe);
  alert("Số lẻ nhỏ nhất: " + soLeMin);
}

let check = true;
let checkArr = false;

while (check) {
  let luaChon = +prompt(menu);
  switch (luaChon) {
    case 1:
      case1(arr);
      checkArr = arr.length > 0;
      break;
    case 2:
      if (!checkArr) {
        alert("Chưa nhập mảng");
        break;
      }
      case2(arr);
      break;
    case 3:
      if (!checkArr) {
        alert("Chưa nhập mảng");
        break;
      }
      case3(arr);
      break;
    case 4:
      if (!checkArr) {
        alert("Chưa nhập mảng");
        break;
      }
      case4(arr);
      break;
    case 5:
      alert("Tạm biệt!");
      check = false;
      break;
    default:
      alert("Lựa chọn không hợp lệ, vui lòng nhập từ 1 đến 5.");
      break;
  }
}
