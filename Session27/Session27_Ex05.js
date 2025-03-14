function chiaMang(arr, n) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += n) {
    newArr.push(arr.slice(i, i + n));
  }
  return newArr;
}

let arr = [];
let sizeArr = +prompt("Nhập số phần tử có trong mảng:");
for (let i = 0; i < sizeArr; i++) {
  let input = +prompt("Nhập phần tử thứ " + (i + 1) + ":");
  arr.push(input);
}

let n = +prompt("Nhập kích thước mảng con:");
if (isNaN(n) || !Number.isInteger(n) || n <= 0 || n > arr.length) {
  alert("Mảng con không hợp lệ!");
} else {
  console.log(chiaMang(arr, n));
}
