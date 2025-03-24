const products = [
  {
    id: 1,
    name: "Laptop Dell XPS 15",
    price: 35990000,
    image:
      "https://th.bing.com/th/id/R.dd66a48254aca2d1e37b8887993a100c?rik=Ileg6QdLFs2iTA&pid=ImgRaw&r=0",
    description:
      "Laptop cao cấp với màn hình 15 inch, CPU Intel Core i7 và RAM 16GB.",
  },
  {
    id: 2,
    name: "iPhone 15 Pro Max",
    price: 32990000,
    image:
      "https://th.bing.com/th/id/OIP.PO8M08Vxndz_455at0qGawHaFj?rs=1&pid=ImgDetMain",
    description:
      "Điện thoại flagship của Apple với camera 48MP và chip A17 Pro.",
  },
  {
    id: 3,
    name: "Samsung Galaxy S24 Ultra",
    price: 28990000,
    image:
      "https://images.samsung.com/is/image/samsung/p6pim/vn/2401/gallery/vn-galaxy-s24-s928-sm-s928bzkcxxv-539307320?$684_547_PNG$",
    description:
      "Điện thoại Android mạnh mẽ với bút S-Pen và camera siêu zoom.",
  },
  {
    id: 4,
    name: "Tai nghe Sony WH-1000XM5",
    price: 7990000,
    image:
      "https://sony.scene7.com/is/image/sonyglobalsolutions/360-RA-category-icon-20221202?$S7Product$&fmt=png-alpha",
    description:
      "Tai nghe chống ồn tốt nhất với thời lượng pin lên đến 30 giờ.",
  },
  {
    id: 5,
    name: "Apple Watch Series 9",
    price: 11990000,
    image:
      "https://bgr.com/wp-content/uploads/2023/09/Apple-Watch-Series-9.jpg?quality=82&strip=all",
    description:
      "Đồng hồ thông minh cao cấp với tính năng đo nhịp tim và hỗ trợ thể thao.",
  },
  {
    id: 6,
    name: "Loa JBL Charge 5",
    price: 3990000,
    image:
      "https://hoanghamobile.com/Uploads/2021/03/09/image-removebg-preview-6.png",
    description: "Loa Bluetooth chống nước với âm bass mạnh mẽ và pin 20 giờ.",
  },
];

let addProduct = document.getElementById("products");
let add = "";

products.forEach((e) => {
  add += `
    <div class="product">
      <div class="img">
        <img src="${e.image}" alt="${e.name}" />
      </div>
      <div class="titleProduct">${e.name}</div>
      <div class="describe">${e.description}</div>
      <div class="price">${e.price.toLocaleString()} VNĐ</div>
      <button class="buy">Buy</button>
    </div>
  `;
});

addProduct.innerHTML = add;
