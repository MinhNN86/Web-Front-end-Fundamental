let menu = `Menu
1. Tính diện tích hình tròn.
2. Tính chu vi hình tròn.
3. Tính diện tích hình chữ nhật.
4. Tính chu vi hình chữ nhật.
5. Thoát.`;
let rong, dai;
let check = true;
function case1() {
  let banKinh = +prompt("Nhập vào bán kính hình tròn");
  if (isNaN(banKinh) || banKinh < 0) {
    alert("Bán kính không hợp lệ");
    return;
  }
  alert(`Diện tích hình tròn là ${(banKinh * banKinh * Math.PI).toFixed(2)}`);
}
function case2() {
  let banKinh = +prompt("Nhập vào bán kính hình tròn");
  if (isNaN(banKinh) || banKinh < 0) {
    alert("Bán kính không hợp lệ");
    return;
  }
  alert(`Chu vi hình tròn là ${(2 * banKinh * Math.PI).toFixed(2)}`);
}
function case3() {
  let rong = +prompt("Nhập chiều rộng hình chữ nhật");
  let dai = +prompt("Nhập chiều dài hình chữ nhật");
  if (isNaN(rong) || isNaN(dai) || rong < 0 || dai < 0) {
    alert("chiều dài, rộng không hợp lệ");
    return;
  }
  alert(`Diện tích hình chữ nhật là ${(dai * rong).toFixed(2)}`);
}
function case4() {
  let rong = +prompt("Nhập chiều rộng hình chữ nhật");
  let dai = +prompt("Nhập chiều dài hình chữ nhật");
  if (isNaN(rong) || isNaN(dai) || rong < 0 || dai < 0) {
    alert("chiều dài, rộng không hợp lệ");
    return;
  }
  alert(`Chu vi hình chữ nhật là ${((dai + rong) * 2).toFixed(2)}`);
}

while (check) {
  let luaChon = +prompt(menu);
  switch (luaChon) {
    case 1:
      case1();
      break;
    case 2:
      case2();
      break;
    case 3:
      case3();
      break;
    case 4:
      case4();
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
