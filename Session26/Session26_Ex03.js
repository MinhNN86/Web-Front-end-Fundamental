let arr = [];
let n = +prompt("Nhập số email thêm vào mảng");
if (!Number.isInteger(n) || n < 0) {
  alert("Dữ liệu không hợp lệ");
} else if (n === 0) {
  alert("Mảng không có phần tử nào");
} else {
  for (let i = 0; i < n; i++) {
    let input = prompt(`Nhập email thứ ${i + 1}`);
    arr.push(input);
  }
  let result = arr.filter((el) => el.includes("@") && !el.includes(" "));
  alert(
    result.length > 0 ? `${result.join(", ")}` : "Không có email đúng định dạng"
  );
}
