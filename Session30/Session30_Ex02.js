let book = [
    {id: 1, name: "test", price: 10, quantity: 1, category: "test"},
    {id: 2, name: "test1", price: 20, quantity: 2, category: "test"},
    {id: 3, name: "test3", price: 30, quantity: 3, category: "test3"},
];
let cart = [];
let menu = `Menu
1. Hiển thị danh sách sách theo thể loại
2. Thêm sách mới vào kho
3. Tìm kiếm sách theo tên hoặc id.
4. Mua sách
5. Sắp xếp sách theo giá
6. Tính tổng số lượng sách đã mua và in ra tổng tiền trong giỏ hàng
7. Hiển thị tổng số lượng sách trong kho.
8. Thoát`

let luaChon;
while (luaChon !== 8) {
    luaChon = +prompt(menu);
    console.log(`----- case ${luaChon} -----`);
    switch (luaChon) {
        case 1: {
            let theLoai = book.reduce((acc, cur) => {
                if (!acc.includes(cur.category)) {
                    acc.push(cur.category);
                }
                return acc;
            }, []);
            let danhSachTheLoai = "Các thể loại sách: (Nhập số)\n";
            for (let i = 0; i < theLoai.length; i++) {
                danhSachTheLoai += `${i + 1}: ${theLoai[i]}\n`;
            }
            let luaChonTheLoai = Number(prompt(danhSachTheLoai));
            if (isNaN(luaChonTheLoai) || !Number.isInteger(luaChonTheLoai) || luaChonTheLoai < 1 || luaChonTheLoai > theLoai.length) {
                alert("Thể loại không hợp lệ!");
            } else {
                let danhMucDaChon = theLoai[luaChonTheLoai - 1];
                let hienThiDanhSach = book.filter((e) => e.category === danhMucDaChon);
                console.log("Danh sách sách thuộc thể loại:", danhMucDaChon);
                console.log(hienThiDanhSach);
            }
            break;
        }
        case 2: {
            let inputID = book.length + 1;
            let inputName = prompt("Nhập tên sách thêm");
            let inputPrice = +prompt("Nhập giá sách thêm");
            let inputQuantity = +prompt("Nhập số lượng sách");
            let inputCategory = prompt("Nhập thể loại sách");
            book.push({
                id: inputID,
                name: inputName,
                price: inputPrice,
                quantity: inputQuantity,
                category: inputCategory,
            })
            break;
        }
        case 3: {
            let inputID = +prompt("Nhập ID cần tìm kiếm");
            let searchValue = book.find((e) => e.id === inputID);
            if (!searchValue) {
                alert("Không tìm thấy ID");
            } else {
                console.log(searchValue.id);
                console.log(searchValue.name);
                console.log(searchValue.price);
                console.log(searchValue.quantity);
                console.log(searchValue.category);
            }
            break;
        }
        case 4: {
            let inputID = Number(prompt("Nhập ID sách muốn mua"));
            let searchValue = book.find((e) => e.id === inputID);
            if (!searchValue) {
                alert("Không tìm thấy sách với ID này!");
            } else {
                let soLuongMua = +prompt(`Nhập số lượng sách muốn mua (Còn lại: ${searchValue.quantity})`);
                if (isNaN(soLuongMua) || !Number.isInteger(soLuongMua) || soLuongMua <= 0) {
                    alert("Số lượng mua sách không hợp lệ!");
                } else if (soLuongMua > searchValue.quantity) {
                    alert(`Số lượng không đủ! Chỉ còn ${searchValue.quantity} quyển.`);
                } else {
                    searchValue.quantity -= soLuongMua;
                    cart.push({
                        id: searchValue.id,
                        name: searchValue.name,
                        price: searchValue.price,
                        quantity: soLuongMua,
                        category: searchValue.category,
                    });
                    alert("Thêm vào giỏ hàng thành công!");
                }
            }
            break;
        }
        case 5: {
            let luaChonSapXep = +prompt(`Menu
            1. Tăng dần.
            2. Giảm dần.
            3. Thoát`);
            switch (luaChonSapXep) {
                case 1: {
                    book.sort((a, b) => a.price - b.price);
                    console.log("Sách đã được sắp xếp giá tăng dần\n", book);
                    break;
                }
                case 2: {
                    book.sort((a, b) => b.price - a.price);
                    console.log("Sách đã được sắp xếp giá giảm dần\n", book);
                    break;
                }
                case 3: {
                    break;
                }
                default: {
                    alert("Lựa chọn không hợp lệ")
                    break;
                }

            }
            break;
        }
        case 6: {
            let tongSachMua = cart.reduce((acc, cur) => acc + cur.quantity, 0);
            let tongTien = cart.reduce((acc, cur) => acc + cur.quantity * cur.price, 0);
            alert(`Tổng số lượng sách đã mua: ${tongSachMua}\nTổng tiền: ${tongTien.toLocaleString()} VND`);
            break;
        }
        case 7: {
            let tongSoSach = book.reduce((acc, cur) => acc + cur.quantity, 0);
            alert(`Tổng số lượng sách trong kho là: ${tongSoSach}`);
            break;
        }
        case 8: {
            alert("Tạm biệt");
            break;
        }
        default: {
            alert("Lựa chọn không hợp lệ")
            break;
        }
    }
}
