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

//! toLocaleString()
// là phương thức trong JavaScript dùng để định dạng số và ngày giờ theo từng quốc gia.
//* Cú pháp: ten_Biến.toLocaleString([locales], [options])

//! Kiểu dữ liệu Boolean trong javascript
//* Boolean là một kiểu dữ liệu nguyên thủy trong JavaScript, chỉ có hai giá trị:
// true (đúng)
// false (sai)

//! Comparison operator trong javascript (Toán tử so sánh)
// ==  : So sánh bằng lỏng lẻo
// === : So sánh bằng nghiêm ngặt
// !=  : Không bằng lỏng lẻo
// !== : Không bằng nghiêm ngặt
// >   : Lớn hơn
// <   : Nhỏ hơn
// >=  : Lớn hơn hoặc bằng
// <=  : Nhỏ hơn hoặc bằng

//! Switch-case
switch (expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
  // code block
}

//! Truthy vs Falsy trong javascript
//* Falsy values
// "Falsy" là những giá trị được chuyển đổi thành false khi đánh giá trong ngữ cảnh Boolean.
// Có 6 giá trị được coi là falsy:
// false (giá trị Boolean false)
// 0 (số không)
// -0 (âm số không)
// "" hoặc '' (chuỗi rỗng)
// null (giá trị rỗng)
// undefined (giá trị chưa được định nghĩa)
// NaN (Not-a-Number)
//* Truthy values
// Ngoại trừ 6 giá trị falsy ở trên, mọi giá trị khác đều là Truthy.

//! For … Loop trong javascript
//* Cú pháp
// for (expression 1; expression 2; expression 3){
//   code
// }
//1. Khởi tạo: Xác định giá trị bắt đầu.
//2. Điều kiện: Kiểm tra xem vòng lặp có tiếp tục hay không.
//3. Biểu thức cập nhật: Thay đổi giá trị sau mỗi lần lặp.
for (let i = 1; i < 6; i++) {
  console.log(i);
}

//! Infinite loop và Nested loop trong javascript
//* Infinite Loop (Vòng lặp vô hạn)
//* Nested Loop (Vòng lặp lồng nhau)

//! Break và Continue
//* Câu lệnh break
// Chức năng: Dùng để thoát hoàn toàn khỏi một vòng lặp. Khi break được gọi, vòng lặp hiện tại sẽ dừng ngay lập tức,
// và chương trình tiếp tục chạy đoạn mã bên ngoài vòng lặp.
//* Câu lệnh continue
// Chức năng: Bỏ qua bước hiện tại trong vòng lặp và chuyển đến bước lặp tiếp theo.
// Không thoát khỏi vòng lặp, mà chỉ bỏ qua các câu lệnh sau continue trong lần lặp đó.

//! While … Loop
//* Cú pháp
// while (condition){
//   Khối mã được thực thi khi điều kiện là true
// }
// condition: Là một biểu thức điều kiện. Nếu biểu thức trả về true, khối mã bên trong vòng lặp sẽ được thực thi.
// Khi condition trở thành false, vòng lặp dừng lại.
let i = 1;
while (i <= 5) {
  console.log(i); // In ra giá trị của i
  i++; // Tăng i lên 1
}

//! Do while … Loop
// Điểm đặc biệt của nó là khối mã trong vòng lặp luôn được thực thi ít nhất một lần,
// ngay cả khi điều kiện kiểm tra là false.
//* Cú pháp
// do {
//   Khối mã được thực thi
// } while (condition);
do {
  console.log(i); // In ra giá trị của i
  i++;
} while (i <= 5);

//! Tổng quan về array trong javascript
//* Khai báo và khởi tạo Array
// Cách 1: Sử dụng cú pháp dấu ngoặc vuông []
let arr = []; // Mảng rỗng
let fruits = ["Apple", "Banana", "Cherry"]; // Mảng có 3 phần tử
// Cách 2: Sử dụng hàm tạo Array()
let arr1 = new Array(); // Mảng rỗng
let numbers = new Array(5); // Mảng có 5 phần tử (chưa khởi tạo)
let colors = new Array("Red", "Green", "Blue"); // Mảng với 3 phần tử
//* Mảng đa chiều
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(matrix[1][2]); // Output: 6

//! Thuật ngữ cơ bản trong array (element, index, length)
//* Element (Phần tử)
// Element là các giá trị được lưu trữ trong mảng.
//* Index (Chỉ số)
// Index là vị trí của phần tử trong mảng,
// bắt đầu từ 0 (chỉ số đầu tiên của mảng).
//* Length (Độ dài)
// Length là thuộc tính của mảng, trả về số lượng phần tử hiện có trong mảng.

//! Truy cập vào phần tử của mảng
//* Truy cập phần tử bằng chỉ số
// Mỗi phần tử có chỉ số (index) bắt đầu từ 0.
let fruits1 = ["Apple", "Banana", "Cherry"];
console.log(fruits1[0]); // Output: "Apple"
console.log(fruits1[2]); // Output: "Cherry"
//* Truy cập phần tử ngoài giới hạn (Out of bound)
// Khi truy cập phần tử có chỉ số không tồn tại, JavaScript trả về undefined.
let fruits2 = ["Apple", "Banana"];
console.log(fruits2[3]); // Output: undefined
//* Truy cập phần tử cuối cùng
// Có thể sử dụng thuộc tính length - 1 để lấy phần tử cuối.
let fruits3 = ["Apple", "Banana", "Cherry"];
console.log(fruits3[fruits3.length - 1]); // Output: "Cherry"
//* Lặp qua mảng để truy cập từng phần tử
// Có thể dùng vòng for, for...of, hoặc forEach.
let fruits4 = ["Apple", "Banana", "Cherry"];
// Dùng for thường
for (let i = 0; i < fruits4.length; i++) {
  console.log(fruits[i]);
}
// Dùng for...of
for (let fruit of fruits4) {
  console.log(fruit);
}
// Dùng forEach
fruits.forEach((fruit) => {
  console.log(fruit);
});

//! Cập nhật phần tử trong mảng
//* Cập nhật giá trị bằng chỉ số
// Bạn có thể thay đổi giá trị của một phần tử trong mảng
// bằng cách gán một giá trị mới vào chỉ số cụ thể.
//* Cú pháp
// array[index] = newValue;
let fruits5 = ["Apple", "Banana", "Cherry"];
fruits5[1] = "Mango"; // Thay "Banana" thành "Mango"
console.log(fruits5); // Output: ["Apple", "Mango", "Cherry"]
//* Cập nhật phần tử cuối cùng
let fruits6 = ["Apple", "Banana", "Cherry"];
fruits6[fruits6.length - 1] = "Grape"; // Thay "Cherry" thành "Grape"
console.log(fruits6); // Output: ["Apple", "Banana", "Grape"]

//! Thêm mới phần tử vào trong mảng
//* Thêm phần tử vào cuối mảng
// Sử dụng push()
let fruits7 = ["Apple", "Banana"];
fruits7.push("Cherry");
console.log(fruits7); // Output: ["Apple", "Banana", "Cherry"]
// Sử dụng chỉ số trực tiếp
let fruits8 = ["Apple", "Banana"];
fruits8[fruits8.length] = "Cherry";
console.log(fruits8); // Output: ["Apple", "Banana", "Cherry"]
//* Thêm phần tử vào đầu mảng
// Sử dụng unshift()
let fruits9 = ["Banana", "Cherry"];
fruits9.unshift("Apple");
console.log(fruits9); // Output: ["Apple", "Banana", "Cherry"]
//* Thêm phần tử tại vị trí bất kỳ
// Sử dụng splice()
// Cú pháp
// array.splice(start, deleteCount, item1, item2, ...);
// start: Vị trí để thêm phần tử (bắt đầu từ 0).
// deleteCount: Số phần tử cần xoá (0 nếu không muốn xoá gì).
// item1, item2, ...: Các phần tử cần thêm vào.
let fruits10 = ["Apple", "Cherry"];
fruits10.splice(1, 0, "Banana"); // Thêm "Banana" vào chỉ số 1
console.log(fruits10); // Output: ["Apple", "Banana", "Cherry"]

//! Xóa phần tử trong mảng
//* Phương thức pop() xóa phần tử cuối cùng khỏi mảng.
let fruits11 = ["Apple", "Banana", "Cherry"];
let removed = fruits11.pop();
console.log(fruits11); // Output: ["Apple", "Banana"]
console.log(removed); // Output: "Cherry"
//* Phương thức shift() xóa phần tử đầu tiên của mảng.
let fruits12 = ["Apple", "Banana", "Cherry"];
console.log("Before:", fruits12); // Output: ["Apple", "Banana", "Cherry"]

let removed1 = fruits12.shift();
console.log("After:", fruits12); // Output: ["Banana", "Cherry"]
console.log(removed1); // Output: "Apple"
//* Phương thức splice() có thể xóa một hoặc nhiều phần tử từ một vị trí chỉ định.
// Cú pháp
// array.splice(start, deleteCount);
// start: Chỉ số bắt đầu xóa.
// deleteCount: Số lượng phần tử cần xóa.
let fruits13 = ["Apple", "Banana", "Cherry", "Date"];
fruits13.splice(1, 2); // Xóa 2 phần tử bắt đầu từ chỉ số 1
console.log(fruits13); // Output: ["Apple", "Date"]

//! Cách sử dụng phương thức splice trong mảng
//* Cú pháp cơ bản
// array.splice(start, deleteCount, item1, item2, ..., itemN);
// start: Vị trí bắt đầu thay đổi trong mảng.
// deleteCount: Số phần tử cần xóa bắt đầu từ start.
// item1, item2, ...: Các phần tử mới sẽ được chèn vào vị trí start.
//* Xóa phần tử trong mảng
// Nếu chỉ định deleteCount, splice() sẽ xóa số lượng phần tử tương ứng.
let fruits14 = ["Apple", "Banana", "Cherry"];
fruits14.splice(1, 1); // Xóa 1 phần tử tại chỉ số 1
console.log(fruits14); // Output: ["Apple", "Cherry"]
//* Thêm phần tử vào mảng
// Nếu deleteCount là 0, các phần tử mới (item1, item2, ...) sẽ được thêm vào vị trí start.
let fruits15 = ["Apple", "Cherry"];
fruits15.splice(1, 0, "Banana"); // Thêm "Banana" vào chỉ số 1
console.log(fruits15); // Output: ["Apple", "Banana", "Cherry"]
// * Thay thế phần tử trong mảng
// Nếu deleteCount > 0 và có item1, item2, ..., thì các phần tử cũ sẽ bị thay thế bằng phần tử mới.
let fruits16 = ["Apple", "Banana", "Cherry"];
fruits16.splice(1, 1, "Grape"); // Thay "Banana" bằng "Grape"
console.log(fruits16); // Output: ["Apple", "Grape", "Cherry"]
//* Lưu ý khi sử dụng splice()
// ✅ Phá hủy mảng gốc: splice() thay đổi trực tiếp trên mảng gốc, nên cần cẩn thận khi thao tác dữ liệu.
// ✅ Trả về mảng bị xóa: splice() trả về một mảng chứa các phần tử đã bị xóa.
// ✅ Độ linh hoạt cao: splice() có thể xóa, thêm, thay thế phần tử chỉ với một lệnh duy nhất.

//! Array methods cơ bản
//* Thêm hoặc xóa các phần
// push()
// Thêm một hoặc nhiều phần tử vào cuối mảng.
// Trả về: Chiều dài mới của mảng.
// pop()
// Xóa phần tử cuối cùng của mảng.
// Trả về: Phần tử đã bị xóa.
// unshift()
// Thêm một hoặc nhiều phần tử vào đầu mảng.
// Trả về: Chiều dài mới của mảng.
// shift()
// Xóa phần tử đầu tiên của mảng.
// Trả về: Phần tử đã bị xóa.
//* Truy cập và thay đổi mảng
// splice()
// Thêm, xóa, hoặc thay thế phần tử tại vị trí chỉ định.
// Trả về: Mảng chứa các phần tử đã bị xóa.
// slice()
// Tạo một bản sao của một phần mảng (không thay đổi mảng gốc).
// Trả về: Một mảng mới.
//* Tìm kiếm phần tử
// indexOf()
// Tìm chỉ số của phần tử đầu tiên có giá trị chỉ định.
// Trả về: Chỉ số của phần tử (hoặc -1 nếu không tìm thấy).
let arr2 = [10, 20, 30, 40, 50, 20];
console.log(arr2.indexOf(20)); // Kết quả: 1
console.log(arr2.indexOf(100)); // Kết quả: -1 (không tìm thấy)
// lastIndexOf()
// Tìm chỉ số của phần tử cuối cùng có giá trị chỉ định.
// Trả về: Chỉ số của phần tử (hoặc -1 nếu không tìm thấy).
let arr3 = [10, 20, 30, 40, 50, 20];
console.log(arr3.lastIndexOf(20)); // Kết quả: 5
console.log(arr3.lastIndexOf(100)); // Kết quả: -1 (không tìm thấy)
//* Sắp xếp và đảo ngược mảng
// sort()
// Sắp xếp các phần tử trong mảng (theo thứ tự chuỗi mặc định hoặc một hàm tùy chỉnh).
// Trả về: Mảng đã sắp xếp.
// reverse()
// Đảo ngược thứ tự các phần tử trong mảng.
// Trả về: Mảng đã bị đảo ngược

//! Vòng lặp nâng cao duyệt qua mảng
//* Vòng lặp for...in
// for...in dùng để duyệt qua các thuộc tính (key) của một đối tượng, bao gồm cả mảng.
// Phù hợp khi cần làm việc với chỉ số (index) hoặc thuộc tính của đối tượng.
// Cú pháp
// for (let key in array) {
//  Code xử lý
// }
let numbers1 = [10, 20, 30];
for (let index in numbers1) {
  console.log(`Index ${index}: Value ${numbers1[index]}`);
}
// Output:
// Index 0: Value 10
// Index 1: Value 20
// Index 2: Value 30
// Ưu điểm
// ✅ Truy cập được chỉ số của phần tử.
// Nhược điểm
// ❌ Không tối ưu khi duyệt qua mảng (có thể duyệt qua cả thuộc tính không mong muốn nếu mở rộng mảng).
//* Vòng lặp for...of
// for...of dùng để duyệt qua giá trị của phần tử trong một đối tượng có thể lặp (iterable), như mảng, chuỗi, Map, Set...
// Phù hợp khi cần làm việc với giá trị của từng phần tử.
// for (let value of array) {
//    Code xử lý
// }
let numbers2 = [10, 20, 30];
for (let num of numbers2) {
  console.log(num);
}
// Output:
// 10
// 20
// 30
// Ưu điểm
// ✅ Ngắn gọn, dễ đọc.
// ✅ Phù hợp khi chỉ cần làm việc với giá trị từng phần tử.
// Nhược điểm
// ❌ Không truy cập được chỉ số trực tiếp.

//! Hàm trong javascript
//* Khai báo hàm
function sum(a, b) {
  return a + b;
}
sum(5, 6);

//! Tham số và đối số
//* Tham số: Tham số được đặt trong cặp ngoặc tròn () khi khai báo hàm.
// Định nghĩa: Tham số là các biến được định nghĩa trong khai báo hàm.
// Chúng đóng vai trò như placeholder để nhận giá trị từ bên ngoài khi hàm được gọi.
function greet(name) {
  console.log("Hello, " + name + "!");
}
//* Đối số: Đối số được đặt trong cặp ngoặc tròn () khi gọi hàm.
// Định nghĩa: Đối số là các giá trị cụ thể được truyền vào hàm khi hàm được gọi.
// Các giá trị này sẽ được gán cho tham số tương ứng.
greet("Alice");

//! return trong JavaScript
//* Giới thiệu
// return kết thúc hàm và trả về một giá trị.
//* Cú pháp return
// return value; trả về giá trị từ hàm.
function add(a, b) {
  return a + b;
}
console.log(add(3, 5)); // Output: 8
//* Kết thúc hàm với return
// Mã sau return không được thực thi.
//* Trả về các giá trị khác nhau
// Hàm có thể trả về số, chuỗi, mảng, đối tượng, hàm khác, hoặc undefined.
//* return trong hàm mũi tên (arrow function)
// Hàm mũi tên với từ khóa return
const add = (a, b) => {
  return a + b;
};
// Hàm mũi tên không cần từ khóa return
const add = (a, b) => a + b;
console.log(add(2, 3)); // Output: 5
//* Trả về nhiều giá trị
function getMultipleValues() {
  return [1, "hello", true];
}
console.log(getMultipleValues()); // [1, 'hello', true]

//! Function expression
//* Cách sử dụng Function expression
// Bạn tạo một hàm và gán nó cho một biến.
// Hàm này có thể được gọi thông qua tên biến.
const greet1 = function (name) {
  return `Hello, ${name}!`;
};
console.log(greet1("Alice")); // Output: Hello, Alice!
//* Đặc điểm của Function expression
//* Ẩn danh (Anonymous Function):
// Function Expression thường được sử dụng với các hàm không tên (hàm ẩn danh).
// Bạn cũng có thể đặt tên, nhưng tên đó chỉ hữu ích trong ngữ cảnh nội bộ của chính hàm.
const anonymousFunction = function () {
  console.log("This is an anonymous function.");
};
anonymousFunction();
//* Không bị hoisting:
// Khác với Function Declaration, Function Expression không được hoisting.
// Bạn phải khai báo hàm trước khi gọi nó.
greet("Alice"); // ❌ ReferenceError: Cannot access 'greet' before initialization
const greet = function (name) {
  return `Hello, ${name}!`;
};
//* Lưu trữ hàm trong biến:
// Function Expression cho phép lưu trữ hàm trong các biến hoặc truyền chúng làm đối số.
const add = function (a, b) {
  return a + b;
};
console.log(add(3, 4)); // Output: 7

//! Higher order function (HOF) trong javascript
// Higher order function trong javascript
// Định nghĩa:
// Nhận một hàm khác làm tham số
// Trả về một hàm khác như kết quả
// Lợi ích của Higher order function
// Tái sử dụng mã: Giúp viết các đoạn mã có thể tái sử dụng và dễ đọc hơn
// Trừu tượng hóa: Tách biệt logic chung và các chi tiết thực hiện
// Dễ quản lý và bảo trì: Giảm sự phức tạp trong mã khi xử lý dữ liệu hoặc logic
// Ví dụ
let result3 = applyFormula([1, 2, 3, 4], function (el) {
  el = el + 10;
  return el;
});
let result4 = applyFormula([-1, -2, -3, -4], function (el) {
  el = el ** 2;
  return el;
});
function applyFormula(arr, fn) {
  let result = [];
  for (let index in arr) {
    let el = fn(arr[index]);
    result.push(el);
  }
  return result;
}

//! For each method
// forEach là một phương thức được sử dụng để lặp qua từng phần tử của một mảng.
// arr.forEach(callback(currentValue, index, arr), thisArg);
// callback: Hàm được gọi cho mỗi phần tử trong mảng. Hàm này có thể nhận các tham số:
// currentValue: Giá trị của phần tử hiện tại.
// index (tuỳ chọn): Chỉ mục (index) của phần tử hiện tại.
// arr (tuỳ chọn): Mảng đang được lặp qua.
// thisArg (tuỳ chọn): Giá trị để sử dụng làm this khi thực thi hàm callback.
let arr4 = [10, 20, 30, 40];
arr.forEach(function (element, index) {
  console.log(element, index);
});

//! Map
// tạo một mảng mới bằng cách áp dụng một hàm lên từng phần tử của mảng gốc.
// arr.map(callback(element, index, arr), thisArg);
// callback: Hàm được gọi cho từng phần tử trong mảng. Hàm này nhận 3 tham số:
// element: Phần tử hiện tại của mảng.
// index (tùy chọn): Chỉ số của phần tử hiện tại.
// array (tùy chọn): Mảng mà phương thức map được gọi.
// thisArg (tùy chọn): Giá trị được sử dụng làm this trong hàm callback
let newArr = arr.map(function (element, index) {
  return element + 10;
});
console.log(newArr);

//! Filter
// tạo một mảng mới từ các phần tử của mảng gốc mà thỏa mãn một điều kiện được xác định bởi hàm callback.
// arr.filter(callback(element, index, arr), thisArg)
// callback: Hàm được gọi cho từng phần tử trong mảng. Hàm này nhận 3 tham số:
// element: Phần tử hiện tại của mảng.
// index (tùy chọn): Chỉ số của phần tử hiện tại.
// array (tùy chọn): Mảng mà phương thức filter được gọi.
// thisArg (tùy chọn): Giá trị được sử dụng làm this trong hàm callback
let newArr1 = arr.filter(function (element, index) {
  return element < 10;
});
console.log(newArr1);

//! Reduce
// duyệt qua các phần tử của mảng  và tính toán một giá trị duy nhất dựa trên các phần tử của mảng đó
// arr.reduce(callback(accumulator, currentValue, index, array), intialValue)
// callback: Hàm được gọi cho từng phần tử trong mảng, nhận 4 tham số:
// accumulator: Giá trị tích lũy (lưu trữ kết quả sau mỗi lần thực hiện).
// currentValue: Phần tử hiện tại đang được xử lý.
// index (tùy chọn): Chỉ số của phần tử hiện tại.
// array (tùy chọn): Mảng mà phương thức reduce được gọi.
// initialValue (tùy chọn): Giá trị ban đầu của accumulator. Nếu không được cung cấp, giá trị ban đầu sẽ là phần tử đầu tiên của mảng, và reduce sẽ bắt đầu từ phần tử thứ hai.
let result5 = arr.reduce(function (acc, cur) {
  acc = acc + cur;
  return acc;
});
// tìm số lớn nhất
let arr5 = [10, 20, 5, 40, 15];
let max = arr5.reduce((acc, curr) => (curr > acc ? curr : acc), arr5[0]);
console.log(max); // Output: 40

//! Some & Every
//some(): Kiểm tra nếu ít nhất một phần tử thỏa mãn điều kiện → Trả về true / false.
// arr.some(callback(currentValue, index, arr), thisArg)
// callback: Hàm callback được gọi cho mỗi phần tử trong mảng
// currentValue: Phần tử hiện tại trong mảng.
// index (tùy chọn): Chỉ số của phần tử hiện tại.
// array (tùy chọn): Mảng mà phương thức some được gọi.
// thisArg (tùy chọn): Giá trị được sử dụng làm this khi gọi hàm callback
let result6 = arr.some(function (element, index) {
  return element > 40;
});
//every(): Kiểm tra nếu tất cả phần tử thỏa mãn điều kiện → Trả về true / false.
//arr.every(callback(currentValue, index, arr), thisArg)
// callback: Hàm callback được gọi cho mỗi phần tử trong mảng
// currentValue: Phần tử hiện tại trong mảng.
// index (tùy chọn): Chỉ số của phần tử hiện tại.
// array (tùy chọn): Mảng mà phương thức every được gọi.
// thisArg (tùy chọn): Giá trị được sử dụng làm this khi gọi hàm callback.
let result7 = arr.every(function (element, index) {
  return element > 40;
});

//! object trong javascript
//* Cách tạo Object
// Sử dụng dấu ngoặc nhọn {} (Object literal)
const person = {
  name: "John",
  age: 30,
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};
//* Thuộc tính và phương thức
//Thuộc tính
console.log(person.name); //John
// Phương thức
console.log(person.greet()); //Hello, my name is John

//! Truy cập vào thuộc tính trong đối tượng
//* Truy cập thuộc tính bằng dấu chấm (.)
// Cú pháp
// object.property
person.name; //John
//* Truy cập thuộc tính bằng dấu ngoặc vuông ([])
// Cú pháp
// object["propetyName"];
person["name"]; //John
//* Xử lý an toàn khi truy cập thuộc tính (Optional Chaining)
const person1 = null;
console.log(person1?.name); // undefined, không gây lỗi

//! Duyệt qua đối tượng
//* Duyệt qua bằng for … in
//Cú pháp
// for(let key in object){
//   Xử lý từng thuộc tính
// }
// Chỉ liệt kê các thuộc tính có thể liệt kê (enumerable).
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
//* Duyệt qua bằng Object.keys()
// Phương thức Object.keys() trả về một mảng chứa tất cả các tên thuộc tính (key) của đối tượng
Object.keys(person).forEach((key) => {
  console.log(`${key}: ${person[key]}`);
});
//* Duyệt qua bằng Object.values()
// Phương thức Object.values() trả về một mảng chứa tất cả các giá trị của đối tượng.
Object.values(person).forEach((value) => {
  console.log(value);
});

//! Các thao tác thêm, sửa, xóa thuộc tính của đối tượng
//* Thêm thuộc tính
// Cú pháp
// object.propetyName = value;
// object["propetyName"] = value;
person.weight = "50kg";
//* Sửa đổi thuộc tính
// Cú pháp
// object.propetyName = newValue;
// object["propetyName"] = newValue;
person.age = 50;
//* Xóa thuộc tính
// Cú pháp
// delete object.propetyName;
// delete object["propetyName"];
delete person.name;

//! Mảng đối tượng
//* Tạo mảng đối tượng
const students = [
  { name: "Alice", age: 20, grade: "A" },
  { name: "Bob", age: 22, grade: "B" },
  { name: "Charlie", age: 19, grade: "C" },
];
// Truy cập phần tử trong mảng đối tượng
students[0];
//* Duyệt qua mảng đối tượng
for (let i = 0; i < students.length; i++) {
  students[i].name;
}
//* Thao tác với mảng đối tượng
// thêm
students.push({ name: "Minh", age: 19, grade: "A" });
// sửa
students[3].grade = "A+";
// xóa
students.splice(1, 1);
// tìm
let student = students.find((s) => s.name === "Minh");
// lọc
let toStudents = students.filter((s) => s.grade === "A");
// sắp xếp
student.sort((a, b) => a.age - b.age); // Sắp xếp tuổi tăng dần
