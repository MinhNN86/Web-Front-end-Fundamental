let quanLiSanPham = [
  { id: 1, name: "test", price: 10, category: "test", quantity: 1 },
  { id: 2, name: "test1", price: 20, category: "test", quantity: 2 },
];
let menu = `Menu
1. Thêm sản phẩm vào danh sách sản phẩm.
2. Hiển thị tất cả sản phẩm.
3. Hiển thị chi tiết sản phẩm theo id.
4. Cập nhật thông tin sản phẩm (name, price, category, quantity) theo id sản phẩm.
5. Xóa sản phẩm theo id.
6. Lọc sản phẩm theo khoảng giá.
7. Thoát.`;

function displayFull() {
  quanLiSanPham.forEach((el) => {
    console.log(`ID: ${el.id}`);
    console.log(`Name: ${el.name}`);
    console.log(`Price: ${el.price}`);
    console.log(`Category: ${el.category}`);
    console.log(`Quantity: ${el.quantity}`);
    console.log("------------------------");
  });
}
function search(key, value) {
  let findIndex = -1;
  for (let i in quanLiSanPham) {
    if (value === quanLiSanPham[i][key]) {
      findIndex = Number(i);
      break;
    }
  }
  return findIndex;
}

let luaChon;
while (luaChon !== 7) {
  luaChon = +prompt(menu);
  switch (luaChon) {
    case 1: {
      //Thêm sản phẩm vào danh sách sản phẩm.
      let n = +prompt("Nhập số sản phẩm cần thêm");
      for (let i = 0; i < n; i++) {
        let inputId = quanLiSanPham.length + 1;
        let inputName = prompt("Nhập tên của sản phẩm");
        let inputPrice = +prompt("Nhập giá của sản phẩm");
        let inputCategory = prompt("Nhập danh mục sản phẩm");
        let inputQuantity = +prompt("Nhập số lượng của sản phẩm");
        quanLiSanPham.push({
          id: inputId,
          name: inputName,
          price: inputPrice,
          category: inputCategory,
          quantity: inputQuantity,
        });
      }
      break;
    }
    case 2: {
      //Hiển thị tất cả sản phẩm.
      displayFull();
      break;
    }
    case 3: {
      let inputId = +prompt("Nhập ID cần tìm");
      let index = search("id", inputId);
      if (index === -1) {
        alert("Không tìm thấy id");
      } else {
        console.log(quanLiSanPham[index]);
      }
      break;
    }
    case 4: {
      let inputId = +prompt("Nhập ID cần chỉnh sửa");
      let index = search("id", inputId);
      if (index === -1) {
        alert("Không tìm thấy id");
      } else {
        let inputName =
          prompt("Nhập tên của sản phẩm") || quanLiSanPham[index].name;
        let inputPrice =
          +prompt("Nhập giá của sản phẩm") || quanLiSanPham[index].price;
        let inputCategory =
          prompt("Nhập danh mục sản phẩm") || quanLiSanPham[index].category;
        let inputQuantity =
          +prompt("Nhập số lượng của sản phẩm") ||
          quanLiSanPham[index].quantity;
        //Giữ nguyên giá trị cũ nếu người dùng không nhập gì bằng || quanLiSanPham[index].property.
        quanLiSanPham[index].name = inputName;
        quanLiSanPham[index].price = inputPrice;
        quanLiSanPham[index].category = inputCategory;
        quanLiSanPham[index].quantity = inputQuantity;
        alert("Cập nhật sản phẩm thành công");
      }
      break;
    }
    case 5: {
      // Xóa sản phẩm theo id.
      let inputId = +prompt("Nhập ID cần xóa");
      let index = search("id", inputId);
      if (index === -1) {
        alert("Không tìm thấy id");
      } else {
        quanLiSanPham.splice(index, 1);
        alert("Xóa sản phẩm thành công");
      }
      break;
    }

    case 6: {
      // Lọc sản phẩm theo khoảng giá.
      let minPrice = +prompt("Nhập giá thấp nhất");
      let maxPrice = +prompt("Nhập giá cao nhất");
      let searchValue = quanLiSanPham.filter((e) => {
        return e.price >= minPrice && e.price <= maxPrice;
      });
      if (searchValue.length === 0) {
        alert("Không có sản phẩm trong khoảng giá đó");
      } else {
        console.log("Danh sách sản phẩm trong khoảng giá:");
        console.log(searchValue);
      }
      break;
    }
    case 7: {
      //Thoát
      alert("Tạm biệt");
      break;
    }
    default: {
      alert("Lựa chọn không hợp lệ");
      break;
    }
  }
}
