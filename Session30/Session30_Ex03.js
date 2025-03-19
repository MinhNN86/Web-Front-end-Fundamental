let shop = [
  { id: 1, name: "test", price: 10, quantity: 2, company: "test" },
  { id: 1, name: "testPhone", price: 20, quantity: 3, company: "test" },
];
let card = [];
let menu = `Menu
1. Hiển thị danh sách điện thoại theo hãng
2. Thêm điện thoại mới vào cửa hàng
3. Tìm kiếm điện thoại theo tên hoặc id
4. Mua điện thoại
5. Thoát`;

let luaChon;
while (luaChon !== 5) {
  luaChon = +prompt(menu);
  console.log(`----- case ${luaChon} -----`);
  switch (luaChon) {
    case 1: {
      let hangSX = shop.reduce((acc, cur) => {
        if (!acc.includes(cur.company)) {
          acc.push(cur.company);
        }
        return acc;
      }, []);
      let danhSachHang = "Các hãng điện thoại: (Nhập số)\n";
      for (let i = 0; i < hangSX.length; i++) {
        danhSachHang += `${i + 1}: ${hangSX[i]}\n`;
      }
      let luaChonHang = Number(prompt(danhSachHang));
      if (
        isNaN(luaChonHang) ||
        !Number.isInteger(luaChonHang) ||
        luaChonHang < 1 ||
        luaChonHang > hangSX.length
      ) {
        alert("Hãng không hợp lệ!");
      } else {
        let hangDaChon = hangSX[luaChonHang - 1];
        let hienThiDanhSach = shop.filter((e) => e.company === hangDaChon);
        console.log("Danh sách điện thoại thuộc hãng:", hangDaChon);
        console.log(hienThiDanhSach);
      }
      break;
    }
    case 2: {
      let inputID = shop.length + 1;
      let inputName = prompt("Nhập tên điện thoại thêm");
      let inputPrice = +prompt("Nhập giá điện thoại thêm");
      let inputQuantity = +prompt("Nhập số lượng điện thoại");
      let inputCompany = prompt("Nhập hãng điện thoại");
      shop.push({
        id: inputID,
        name: inputName,
        price: inputPrice,
        quantity: inputQuantity,
        company: inputCompany,
      });
      break;
    }
    case 3: {
      let inputID = +prompt("Nhập ID cần tìm kiếm");
      let searchValue = shop.find((e) => e.id === inputID);
      if (!searchValue) {
        alert("Không tìm thấy ID");
      } else {
        console.log(searchValue.id);
        console.log(searchValue.name);
        console.log(searchValue.price);
        console.log(searchValue.quantity);
        console.log(searchValue.company);
      }
      break;
    }
    case 4: {
      let inputID = Number(prompt("Nhập ID điện thoại muốn mua"));
      let searchValue = shop.find((e) => e.id === inputID);
      if (!searchValue) {
        alert("Không tìm thấy điện thoại với ID này!");
      } else {
        let soLuongMua = +prompt(
          `Nhập số lượng điện thoại muốn mua (Còn lại: ${searchValue.quantity})`
        );
        if (
          isNaN(soLuongMua) ||
          !Number.isInteger(soLuongMua) ||
          soLuongMua <= 0
        ) {
          alert("Số lượng mua không hợp lệ!");
        } else if (soLuongMua > searchValue.quantity) {
          alert(`Số lượng không đủ! Chỉ còn ${searchValue.quantity} chiếc.`);
        } else {
          searchValue.quantity -= soLuongMua;
          cart.push({
            id: searchValue.id,
            name: searchValue.name,
            price: searchValue.price,
            quantity: soLuongMua,
            company: searchValue.company,
          });
          alert("Thêm vào giỏ hàng thành công!");
        }
      }
      break;
    }
    case 5: {
      alert("Tạm biệt");
      break;
    }
    default: {
      alert("Lựa chọn không hợp lệ");
      break;
    }
  }
}
