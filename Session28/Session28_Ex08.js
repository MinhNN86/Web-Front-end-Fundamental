let nhanVien = [];
let menu = `Menu
1. Thêm nhân viên mới
2. Xóa nhân viên
3. Cập nhật mức lương của nhân viên
4. Tìm kiếm nhân viên theo tên
5. Thoát`;
let check = true;
let checkArr = false;
while (check) {
  let luaChon = +prompt(menu);
  switch (luaChon) {
    case 1: // Thêm nhân viên mới
      let n = +prompt("Nhập số lượng nhân viên mới");
      for (let i = 0; i < n; i++) {
        let inputId = +prompt("Nhập ID");
        let inputName = prompt("Nhập tên nhân viên mới");
        let inputPosition = prompt("Nhập vị trí của nhân viên mới");
        let inputSalary = +prompt("Nhập mức lương của nhân viên mới");
        nhanVien.push({
          id: inputId,
          name: inputName,
          position: inputPosition,
          salary: inputSalary,
        });
      }
      checkArr = true;
      alert("Thêm nhân viên thành công");
      break;
    case 2: {
      // Xóa nhân viên
      let inputId = +prompt("Nhập ID của nhân viên cần xóa");
      let index = nhanVien.findIndex((e) => e.id === inputId);
      if (index === -1) {
        alert("Không tìm thấy nhân viên!");
      } else {
        nhanVien.splice(index, 1);
        alert("Đã xóa nhân viên thành công!");
      }
      break;
    }
    case 3: {
      //Cập nhật mức lương của nhân viên
      let inputId = +prompt("Nhập ID của nhân viên cần cập nhật lương");
      let timKiemNhanVien = nhanVien.find((e) => e.id === inputId);
      if (!timKiemNhanVien) {
        alert("Không tìm thấy nhân viên!");
      } else {
        let inputSalary = +prompt("Nhập mức lương được cập nhật");
        timKiemNhanVien.salary = inputSalary;
        alert("Cập nhật lương cho nhân viên thành công");
      }
      break;
    }
    case 4: {
      //Tìm kiếm nhân viên theo tên
      let inputName = prompt("Nhập tên cần tìm kiếm");
      let timKiemNhanVien = nhanVien.filter((e) => e.name.includes(inputName));
      if (timKiemNhanVien.length === 0) {
        alert("Không tìm thấy nhân viên!");
      } else {
        let danhSach = "Danh sách nhân viên tìm thấy:\n";
        timKiemNhanVien.forEach((e, index) => {
          danhSach += `${index + 1}. ID: ${e.id}, Tên: ${e.name}, Vị trí: ${
            e.position
          }, Lương: ${e.salary}\n`;
        });
        alert(danhSach);
      }
      break;
    }
    case 5: {
      //Thoát
      alert("Tạm biệt");
      check = false;
      break;
    }
    default: {
      alert("Lựa chọn không hợp lệ");
      break;
    }
  }
}
