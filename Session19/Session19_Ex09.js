// Phép toán với chuỗi và số
let result1 = "javascript" + 5; // "javascript5" → Nối chuỗi.
let result2 = "javascript" - 1; // NaN → Không thể trừ chuỗi với số.

// Phép toán giữa chuỗi số và số
let result3 = "3" + 2; // "32" → Nối chuỗi vì có phép cộng.
let result4 = "5" - 4; // 1 → "5" được chuyển thành số.

// Kiểm tra NaN với isNaN()
let result5 = isNaN("123"); // false → "123" có thể chuyển thành số.
let result6 = isNaN("hello"); // true → "hello" không thể chuyển thành số (NaN).

// Kiểm tra NaN với Number.isNaN()
let result7 = Number.isNaN("123"); // false → "123" không phải NaN.
let result8 = Number.isNaN(NaN); // true → Chỉ NaN mới là NaN.
