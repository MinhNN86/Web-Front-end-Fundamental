let products = [
    {
        id: 1,
        name: "mèn mén",
        price: 20000,
        quantity: 20,
        category: "món ăn dân tộc Mông",
    },
    {
        id: 2,
        name: "mứt",
        price: 80000,
        quantity: 21,
        category: "món ăn dân tộc Kinh",
    },
    {
        id: 3,
        name: "cơm lam",
        price: 40000,
        quantity: 15,
        category: "món ăn dân tộc Mông",
    },
    {
        id: 4,
        name: "bánh đậu xanh",
        price: 60000,
        quantity: 30,
        category: "món ăn dân tộc Kinh",
    },
];
let cart = [];
let menu = `Menu
1. Hiển thị các sản phẩm theo tên danh mục
2. Mua hàng
3. Sắp xếp các sản phẩm trong cửa hàng theo giá
4. Tính số tiền thanh toán trong giỏ hàng
5. Thoát`;

function displayProduct() {
    products.forEach((e) => {
        console.log(`ID: ${e.id}`);
        console.log(`Name: ${e.name}`);
        console.log(`Price: ${e.price}`);
        console.log(`Quantity: ${e.quantity}`);
        console.log(`Category: ${e.category}`);
    })
}

let luaChon;
while (luaChon !== 5) {
    luaChon = +prompt(menu);
    switch (luaChon) {
        case 1: {
            console.log("--------- Case 1 ---------");
            let inputCategory = prompt("Nhập tên danh mục để lọc");
            let searchValue = products.filter((e) => e.category === inputCategory);
            if (searchValue.length === 0) {
                alert("Không tìm thấy danh mục");
            } else {
                searchValue.forEach((e) => {
                    console.log(`ID: ${e.id}`);
                    console.log(`Name: ${e.name}`);
                    console.log(`Price: ${e.price}`);
                    console.log(`Quantity: ${e.quantity}`);
                    console.log(`Category: ${e.category}`);
                });
            }
            break;
        }
        case 2: {
            console.log("--------- Case 2 ---------");
            let inputID = +prompt("Nhập ID sản phẩm cần mua");
            let searchValue = products.find((e) => e.id === inputID);
            if (!searchValue) {
                alert("ID không tồn tại");
            } else {
                let soLuongMua = +prompt("Nhập số lượng sản phẩm muốn mua");
                if (soLuongMua <= 0 || isNaN(soLuongMua)) {
                    alert("Số lượng mua không hợp lệ!");
                } else if (soLuongMua > searchValue.quantity) {
                    alert("Số lượng mua nhiều hơn hàng còn tồn!");
                } else {
                    let cartItem = {...searchValue, quantity: soLuongMua};
                    cart.push(cartItem);
                    searchValue.quantity -= soLuongMua;
                    alert(`Mua thành công! Sản phẩm còn lại: ${searchValue.quantity}`);
                }
            }
            break;
        }
        case 3: {
            console.log("--------- Case 3 ---------");
            let luaChonSapXep = prompt(`Menu lựa chọn\na. Tăng dần.\nb. Giảm dần`)
            switch (luaChonSapXep) {
                case "a": {
                    products.sort((a, b) => a.price - b.price);
                    console.log("Sắp xếp thành công");
                    displayProduct();
                    break;
                }
                case "b": {
                    products.sort((a, b) => b.price - a.price);
                    console.log("Sắp xếp thành công");
                    displayProduct();
                    break;
                }
                default:
                    alert("Lựa chọn sắp xếp không hợp lệ")
                    break;
            }
            break;
        }
        case 4: {
            console.log("--------- Case 4 ---------");
            if (cart.length === 0) {
                console.log("Giỏ hàng trống");
            } else {
                let tongTien = cart.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);
                console.log("Tổng tiền thanh toán:", tongTien);
            }
            break;
        }
        case 5: {
            alert("Tạm biệt");
            break;
        }
        default:
            alert("Lựa chọn không hợp lệ, vui lòng chọn lại");
            break;
    }
}
