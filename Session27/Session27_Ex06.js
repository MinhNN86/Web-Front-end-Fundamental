function checkCapSoCong(arr) {
  let n = arr[1] - arr[0];
  let check = true;
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] !== n) {
      check = false;
      break;
    }
  }
  alert(check ? "TRUE" : "FALSE");
}

let arr = [];
let sizeArr = +prompt("Nhập số phần tử có trong mảng:");
for (let i = 0; i < sizeArr; i++) {
  let input = +prompt("Nhập phần tử thứ " + (i + 1) + ":");
  arr.push(input);
}

checkCapSoCong(arr);
