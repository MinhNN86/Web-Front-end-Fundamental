//! Khai báo biến
// Variable Declaration - Khai báo biến
var x = 10; //var (cách cũ, không khuyến nghị trong ES6 trở lên)
let y = 20; //let (khuyến nghị cho các biến có phạm vi khối)
const z = 10; //const (dùng cho các giá trị không thay đổi)
// Recall a value in a variable - Gọi lại giá trị
z;

//! Input và Output
//*Input trong javascript
// Hàm prompt() hiển thị hộp thoại để người dùng nhập dữ liệu.
// Dữ liệu nhận được từ prompt() luôn ở dạng chuỗi (string).
let input = prompt("Nhập tên của bạn:");
//* Output trong javascript
// Hàm console.log() dùng để ghi dữ liệu hoặc thông báo vào bảng điều khiển (console) của trình duyệt.
console.log("Tên của bạn là: " + input);
// Hàm document.write() ghi trực tiếp nội dung vào tài liệu HTML.
// Lưu ý: Sử dụng document.write() sẽ thay thế toàn bộ nội dung của trang nếu gọi sau khi trang đã tải.
document.write("<h1>Xin chào, JavaScript!</h1>");

//! Type conversion trong javascript
//* Chuyển đổi kiểu dữ liệu tự động (Implicit type conversion)
let a = "5" + 2; // "52" (chuỗi vì dấu "+" với chuỗi ưu tiên nối chuỗi)
let b = "5" - 2; // 3 (chuyển "5" thành số vì phép trừ không áp dụng cho chuỗi)
let c = 2 * "3"; // 6 (chuỗi "3" được chuyển sang số)
// * Chuyển đổi kiểu dữ liệu tường minh (Explicit type conversion)
console.log(Number("123")); // 123
console.log(parseInt("123.45")); // 123
console.log(parseFloat("123.45")); // 123.45
console.log(Number("abc")); // NaN (Không phải số)
//* Chuyển đổi sang chuỗi (string)
console.log(String(123)); // "123"
console.log((123).toString()); // "123"
console.log(String(true)); // "true"
//* Chuyển đổi sang kiểu luận lý (Boolean)
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean("Hello")); // true
console.log(Boolean(123)); // true

//! Kiểu dữ liệu number trong javascript
//* Các loại giá trị Number
let q = 10; // Số nguyên dương
let w = -5; // Số nguyên âm
let e = 3.14; // Số thực dương
let r = -0.001; // Số thực âm

//* Các giá trị đặc biệt
// NaN (Not a number)
let result = "abc" * 3; // NaN
console.log(isNaN(result)); // true (kiểm tra NaN)

// Infinity và -Infinity
let inf = 1 / 0; // Infinity
let negInf = -1 / 0; // -Infinity
console.log(Number.isFinite(inf)); // false (kiểm tra giá trị hữu hạn)

//* Các phương thức và thuộc tính của Number
// Thuộc tính của Number
console.log(Number.MAX_VALUE); // Số lớn nhất có thể biểu diễn
console.log(Number.MIN_VALUE); // Số nhỏ nhất có thể biểu diễn
console.log(Number.POSITIVE_INFINITY); // Đại diện cho dương vô cực

// Phương thức của Number
console.log(Number.isFinite(100)); // true - Kiểm tra xem giá trị có phải là số hữu hạn.
console.log(Number.isInteger(10.5)); // false - Kiểm tra xem giá trị có phải số nguyên.
console.log((123.456).toFixed(2)); // "123.46" - Định dạng số với số chữ số thập phân cụ thể.
console.log((255).toString(16)); // "ff" (chuyển sang hệ cơ số 16) - Chuyển đổi số thành chuỗi.

//! Kiểu dữ liệu string trong javascript
//* String cơ bản
// Bạn có thể khai báo một chuỗi bằng:
// Dấu ngoặc đơn (' ')
// Dấu ngoặc kép (" ")
let singleQuote = "Hello";
let doubleQuote = "World";

//* Template string
// Nội suy (Interpolation): Chèn giá trị biến hoặc biểu thức vào chuỗi bằng cú pháp ${expression}.
// Hỗ trợ xuống dòng: Cho phép viết chuỗi nhiều dòng mà không cần ký tự nối (\n hoặc +).
let name = "Alice";
let age = 25;

// Nội suy giá trị
let message = `Hello, my name is ${name}. I am ${age} years old.`;
console.log(message); // "Hello, my name is Alice. I am 25 years old."

// Chuỗi nhiều dòng
let paragraph = `This is a paragraph.
It can span multiple lines.
No need for manual line breaks.`;
console.log(paragraph);

//! Phương thức làm việc với string (String methods)
//* length
// Mô tả: Thuộc tính dùng để trả về độ dài (số ký tự) của chuỗi.
let str = "Hello, world!";
console.log(str.length); // Output: 13
//* toUpperCase()
let str1 = "hello";
console.log(str1.toUpperCase()); // Output: "HELLO"
//* toLowerCase()
let str2 = "HELLO";
console.log(str2.toLowerCase()); // Output: "hello"
//* indexOf()
let str3 = "Hello, world!";
// Mô tả: Trả về vị trí xuất hiện đầu tiên của một chuỗi con trong chuỗi chính.
// Nếu không tìm thấy, trả về -1.
console.log(str3.indexOf("world")); // Output: 7
console.log(str3.indexOf("JavaScript")); // Output: -1
//* includes()
// Mô tả: Kiểm tra xem chuỗi có chứa chuỗi con được chỉ định hay không. Trả về true hoặc false.
let str4 = "Hello, world!";
console.log(str4.includes("world")); // Output: true
console.log(str4.includes("JavaScript")); // Output: false
//* slice(start,end)
// Mô tả: Trích xuất một phần của chuỗi từ vị trí start đến end (không bao gồm end).
let str5 = "JavaScript";
console.log(str5.slice(0, 4)); // Output: "Java"
console.log(str5.slice(4)); // Output: "Script"
//* substring(start,end)
// Mô tả: Tương tự như .slice(), nhưng không hỗ trợ số âm.
let str6 = "JavaScript";
console.log(str6.substring(0, 4)); // Output: "Java"
//* replace(searchValue,newValue)
// Mô tả: Thay thế chuỗi con đầu tiên tìm thấy bằng chuỗi mới.
let str7 = "I love JavaScript";
console.log(str7.replace("JavaScript", "coding")); // Output: "I love coding"
//* trim()
// Mô tả: Xóa bỏ khoảng trắng ở đầu và cuối chuỗi.
let str8 = "   Hello, world!   ";
console.log(str8.trim()); // Output: "Hello, world!"
//* split(separator)
// Mô tả: Tách chuỗi thành một mảng các phần tử dựa trên separator.
let str9 = "A, B, C, D";
console.log(str9.split(", ")); // Output: ["A", "B", "C", "D"]
//* charAt(index)
// Mô tả: Trả về ký tự tại vị trí index trong chuỗi.
let str10 = "JavaScript";
console.log(str10.charAt(4)); // Output: "S"
//* concat()
// Mô tả: Nối các chuỗi lại với nhau.
let str11 = "Hello";
let str12 = "World";
console.log(str11.concat(", ", str12)); // Output: "Hello, World"
//* startsWith() và endsWith()
// .startsWith(): Kiểm tra chuỗi có bắt đầu bằng một chuỗi con không.
// .endsWith(): Kiểm tra chuỗi có kết thúc bằng một chuỗi con không.
let str13 = "JavaScript";
console.log(str13.startsWith("Java")); // Output: true
console.log(str13.endsWith("Script")); // Output: true

//! Null và Undefined trong javascript
//* Undefined xảy ra khi một biến được khai báo nhưng chưa được gán giá trị nào.
// Nó là giá trị mặc định của các biến chưa được khởi tạo.
let x; // x được khai báo nhưng chưa được gán giá trị
console.log(x); // undefined

function test() {}
console.log(test()); // undefined

const obj = {};
console.log(obj.nonExistentProperty); // undefined
//* Null là một giá trị đặc biệt biểu thị sự vắng mặt của bất kỳ giá trị nào.
// Nó được lập trình viên gán một cách rõ ràng để biểu thị rằng biến không có giá trị.
let m = null; // gán giá trị null
console.log(m); // null
//* So sánh bằng toán tử
// So sánh lỏng lẻo (==)
// null == undefined là true vì cả hai đều biểu thị giá trị "không xác định".
// So sánh chặt chẽ (===)
// null === undefined là false vì chúng là hai kiểu dữ liệu khác nhau.
console.log(null == undefined); // true
console.log(null === undefined); // false
//! Math object
//* Đặc điểm của Math Object
// Không phải là một constructor: Bạn không thể tạo một thể hiện của Math bằng từ khóa new.
// Cách sử dụng: Truy cập trực tiếp các phương thức và thuộc tính bằng cú pháp Math.method() hoặc Math.property.
//* Các thuộc tính phổ biến
// Math.PI : Là giá trị của π
//* Các phương thức phổ biến
// Phương thức số học
console.log(Math.abs(-5)); // 5 (Giá trị tuyệt đối)
console.log(Math.ceil(4.2)); // 5 (Làm tròn lên)
console.log(Math.floor(4.7)); // 4 (Làm tròn xuống)
console.log(Math.round(4.5)); // 5 (Làm tròn gần nhất)
// Phương thức lũy thừa và căn
console.log(Math.pow(2, 3)); // 8 (2^3)
console.log(Math.sqrt(16)); // 4 (Căn bậc hai)
// Phương thức ngẫu nhiên
console.log(Math.random()); // Số ngẫu nhiên từ 0 đến <1
console.log(Math.max(1, 5, 3)); // 5 (Giá trị lớn nhất)
console.log(Math.min(1, 5, 3)); // 1 (Giá trị nhỏ nhất)
