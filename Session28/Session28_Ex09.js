let menu = `Menu
1. Thêm sách mới.
2. Hiển thị danh sách sách.
3. Tìm kiếm sách theo tiêu đề.
4. Cập nhật trạng thái mượn/trả sách theo id sách.
5. Xóa sách theo id sách ra khỏi danh sách.
6. Sắp xếp sách theo giá tăng dần.
7. Thoát.
`;
let sach = [];
while (true) {
  let check = true;
  let luaChon = +prompt(menu);
  switch (luaChon) {
    case 1: //Thêm sách mới.
      let n = +prompt("Nhập số lượng sách mới");
      for (let i = 0; i < n; i++) {
        let checkId = true;
        let inputId;
        do {
          inputId = +prompt("Nhập ID sách");
          checkId = !sach.some((el) => el.id === inputId);
          if (!checkId) {
            alert("ID sách đã tồn tại, vui lòng nhập lại!");
          }
        } while (!checkId);
        let inputName = prompt("Nhập tên sách");
        let inputAuthor = prompt("Nhập tên tác giả");
        let inputYear = +prompt("Nhập năm xuất bản");
        let inputPrice = +prompt("Nhập giá sách");
        let inputIsAvailable = null;
        while (inputIsAvailable === null) {
          let choose = +prompt("Trạng thái mượn sách\n1. Có\n2. Không");
          switch (choose) {
            case 1:
              inputIsAvailable = true;
              break;
            case 2:
              inputIsAvailable = false;
              break;
            default:
              alert("Lựa chọn không hợp lệ, mời chọn lại");
              break;
          }
        }
        sach.push({
          id: inputId,
          title: inputName,
          author: inputAuthor,
          year: inputYear,
          price: inputPrice,
          isAvailable: inputIsAvailable,
        });
      }
      break;
    case 2: // Hiển thị danh sách sách
      if (sach.length === 0) {
        alert("Danh sách sách trống!");
      } else {
        let danhSach = "Danh sách sách:\n";
        sach.forEach((book) => {
          danhSach += `ID: ${book.id}\n`;
          danhSach += `title: ${book.title}\n`;
          danhSach += `Author: ${book.author}\n`;
          danhSach += `Year: ${book.year}\n`;
          danhSach += `Price: ${book.price}\n`;
          danhSach += `isAvailable: ${book.isAvailable}`;
        });
        alert(danhSach);
      }
      break;
    case 3: //Tìm kiếm sách theo tiêu đề.
      {
        let inputName = prompt("Nhập tiêu đề sách muốn tìm");
        let ketQuaTim = sach.filter((e) => e.title.includes(inputName));
        if (ketQuaTim.length === 0) {
          alert("Không tìm thấy sách");
        } else {
          let danhSach = "Danh sách sách tìm được:\n";
          ketQuaTim.forEach((book) => {
            danhSach += `ID: ${book.id}\n`;
            danhSach += `title: ${book.title}\n`;
            danhSach += `Author: ${book.author}\n`;
            danhSach += `Year: ${book.year}\n`;
            danhSach += `Price: ${book.price}\n`;
            danhSach += `isAvailable: ${book.isAvailable}\n\n`;
          });
          alert(danhSach);
        }
      }
      break;
    case 4: // Cập nhật trạng thái mượn/trả sách theo ID sách
      {
        let inputId = +prompt("Nhập ID sách muốn cập nhật");
        let ketQuaTim = sach.find((e) => e.id === inputId);
        if (!ketQuaTim) {
          alert("Không tìm thấy sách với ID này");
        } else {
          let inputIsAvailable = null;
          while (inputIsAvailable === null) {
            let choose = +prompt("Trạng thái mượn sách\n1. Có\n2. Không");
            switch (choose) {
              case 1:
                inputIsAvailable = true;
                break;
              case 2:
                inputIsAvailable = false;
                break;
              default:
                alert("Lựa chọn không hợp lệ, mời chọn lại!");
                break;
            }
          }
          ketQuaTim.isAvailable = inputIsAvailable;
          alert("Cập nhật trạng thái thành công");
        }
      }
      break;

    case 5: // Xóa sách theo ID
      {
        let inputId = +prompt("Nhập ID sách muốn xóa");
        let index = sach.findIndex((e) => e.id === inputId);
        if (index === -1) {
          alert("Không tìm thấy sách với ID này");
        } else {
          sach.splice(index, 1);
          alert("Đã xóa sách thành công");
        }
      }
      break;
    case 6: //Sắp xếp sách theo giá tăng dần.
      sach.sort((a, b) => a.price - b.price);
      alert("Danh sách sách đã được sắp xếp theo giá tăng dần.");
      break;
    case 7: //Thoát
      alert("Tạm biệt");
      check = false;
      break;
    default:
      alert("Lựa chọn không hợp lệ");
      break;
  }
  if (!check) {
    break;
  }
}
