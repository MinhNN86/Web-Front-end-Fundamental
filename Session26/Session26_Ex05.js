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
let max = arr.reduce((acc, cur, index) => (cur > acc ? cur : acc), arr[0]);
let maxIndex = arr.indexOf(max);
alert(`Max = ${max}
position: ${maxIndex}`);
