let product = [
  {
    id: 1,
    img: "https://cdn.tgdd.vn/Products/Images/42/335177/samsung-galaxy-a56-5g-green-thumb-600x600.jpg",
    name: "Điện thoại Samsung Galaxy A54",
    price: "7.490.000₫",
  },
  {
    id: 2,
    img: "https://bizweb.dktcdn.net/100/446/400/products/laptop-dell-vostro-3490-1-gia-loc.jpg?v=1699258008053",
    name: "Laptop Dell Inspiron 15",
    price: "15.990.000₫",
  },
  {
    id: 3,
    img: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airpods-pro-2-hero-select-202409_FMT_WHH?wid=750&hei=556&fmt=jpeg&qlt=90&.v=1724041668836",
    name: "Tai nghe AirPods Pro",
    price: "4.990.000₫",
  },
  {
    id: 4,
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXM23ref_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-aluminum-jetblack-s10_VW_34FR?wid=752&hei=720&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=TnVrdDZWRlZzTURKbHFqOGh0dGpVRW5TeWJ6QW43NUFnQ2V4cmRFc1VnYUdWejZ5THhpKzJwRmRDYlhxN2o5aXB2QjR6TEZ4ZThxM3VqYkZobmlXM3RGNnlaeXQ4NGFKQTAzc0NGeHR2aVk0VEhOZEFKYmY1ZHNpalQ3YVhOWk9WVlBjZVFuazArV21YaFcvTVJ5dzR2eDMxaWg4TFhITTVrUW41Z084dENpYmZuSTdFUnErS0g3SWYxazQrNDdyRzE3K0tORmZaUy9vOVdqTEp2dmJNL3gwYlE3R0w4Z1RCbG9qQTd1MjYyL1owaE5aVCt2Ri82aDRacTg0bXlaZA",
    name: "Đồng hồ thông minh Apple Watch",
    price: "8.990.000₫",
  },
  {
    id: 5,
    img: "https://cdn.vjshop.vn/may-anh/mirrorless/canon/canon-eos-r50/black-18-45/canon-eos-r50-lens-18-45mm-500x500.jpg",
    name: "Máy ảnh Canon EOS M50",
    price: "12.490.000₫",
  },
  {
    id: 6,
    img: "https://bizweb.dktcdn.net/100/445/498/products/jbl-go-4-3-4-left-black-48178-x1.jpg?v=1732646465910",
    name: "Loa Bluetooth JBL Flip 5",
    price: "2.190.000₫",
  },
  {
    id: 7,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1MvD76Mt-Ne0IC2DPMMsTZpG05xDxJOzkqw&s",
    name: "Bàn phím cơ Logitech G Pro",
    price: "2.490.000₫",
  },
  {
    id: 8,
    img: "https://product.hstatic.net/200000722513/product/h_mx_master_3_wireless__graphite_.jpg_1e5491e35f754dcc90b90582a9c3be95_ca0c63ca59de4ed1b4d46fcc5c81c1ed.png",
    name: "Chuột không dây Logitech MX Master",
    price: "1.890.000₫",
  },
];
let cartContainer = document.getElementById("cartContainer");
let productContainer = document.getElementById("product-list");
product.forEach((item) => {
  let productDiv = document.createElement("div");
  productDiv.classList.add("product");

  productDiv.innerHTML = `
    <img src="${item.img}" alt="${item.name}" />
    <div class="productTitle">${item.name}</div>
    <div class="productPrice">${item.price}</div>
    <button class="addCart">Thêm vào giỏ hàng</button>
  `;

  productContainer.appendChild(productDiv);
});

const addCartButtons = document.querySelectorAll(".addCart");
const cartItemsContainer = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");

let cart = [];
updateCart();

function updateCart() {
  cartItemsContainer.innerHTML = "";
  let totalPrice = 0;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `<p style="text-align: center;">Giỏ hàng trống</p>`;
  } else {
    cart.forEach((item) => {
      const cartItem = document.createElement("div");
      cartItem.classList.add("cartItem");

      cartItem.innerHTML = `
        <div class="cartItemInfo">
          <div class="cartItemTitle">${item.title}</div>
          <div class="cartItemPrice"><b>${item.price.toLocaleString()}₫</b> x ${
        item.quantity
      }</div>
        </div>
        <div class="quantityControls">
          <button class="quantityBtn decreaseBtn" data-id="${
            item.id
          }">-</button>
          <span>${item.quantity}</span>
          <button class="quantityBtn increaseBtn" data-id="${
            item.id
          }">+</button>
          <button class="removeBtn" data-id="${item.id}">X</button>
        </div>
      `;

      cartItemsContainer.appendChild(cartItem);
      totalPrice += item.price * item.quantity;
    });
    document
      .querySelectorAll(".decreaseBtn")
      .forEach((btn) => btn.addEventListener("click", decreaseQuantity));
    document
      .querySelectorAll(".increaseBtn")
      .forEach((btn) => btn.addEventListener("click", increaseQuantity));
    document
      .querySelectorAll(".removeBtn")
      .forEach((btn) => btn.addEventListener("click", removeFromCart));
  }
  let baseHeight = 253;
  let itemHeight = 57;
  cartContainer.style.height = `${baseHeight + cart.length * itemHeight}px`;
  cartTotal.textContent = `Tổng: ${totalPrice.toLocaleString()}₫`;
}

function addToCart(event) {
  const button = event.target;
  const productContainer = button.parentElement;
  const title = productContainer.querySelector(".productTitle").textContent;
  const priceText = productContainer.querySelector(".productPrice").textContent;
  const price = Number(
    priceText
      .split("")
      .filter((char) => !isNaN(char) && char !== " ")
      .join("")
  );
  const id = title;
  const existingItem = cart.find((item) => item.id === id);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ id, title, price, quantity: 1 });
  }
  updateCart();
}

function decreaseQuantity(event) {
  const id = event.target.getAttribute("data-id");
  const item = cart.find((item) => item.id === id);

  if (item && item.quantity > 1) {
    item.quantity--;
  } else {
    cart = cart.filter((item) => item.id !== id);
  }

  updateCart();
}

function increaseQuantity(event) {
  const id = event.target.getAttribute("data-id");
  const item = cart.find((item) => item.id === id);

  if (item) {
    item.quantity++;
  }

  updateCart();
}

function removeFromCart(event) {
  const id = event.target.getAttribute("data-id");
  cart = cart.filter((item) => item.id !== id);
  updateCart();
}

addCartButtons.forEach((btn) => btn.addEventListener("click", addToCart));

function handleCheckout() {
  let totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  if (totalAmount === 0) {
    alert("Giỏ hàng của bạn đang trống!");
  } else {
    alert(
      `Cảm ơn bạn đã mua hàng!\nTổng giá trị đơn hàng: ${totalAmount.toLocaleString()}₫`
    );
  }
  cart = [];
  updateCart();
}
checkoutBtn.addEventListener("click", handleCheckout);
