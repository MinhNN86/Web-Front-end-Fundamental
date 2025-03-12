let arr = [];
for (let i = 0; i < 10; ) {
  let input = +prompt("Nhập số nguyên vào mảng");
  if (!Number.isInteger(input) || isNaN(input)) {
    alert("Dữ liệu không hợp lệ");
  } else {
    arr.push(input);
    i++;
  }
}
let result = arr.filter((element) => element >= 10);
alert(result.length > 0 ? `${result}` : ` Mảng không có phần tử nào`);
