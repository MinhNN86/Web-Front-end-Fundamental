function timSoNguyenBiThieu(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + 1 !== arr[i + 1]) {
      return arr[i] + 1;
    }
  }
}
let arr = [];
let sizeArr = +prompt("Nhập số phần tử có trong mảng:");
for (let i = 0; i < sizeArr; i++) {
  let input = +prompt("Nhập phần tử thứ " + (i + 1) + ":");
  arr.push(input);
}

alert(timSoNguyenBiThieu(arr));
