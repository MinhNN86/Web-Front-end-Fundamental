function demSoNguyenDuong(arr) {
  if (arr.length === 0) {
    return "Mảng rỗng";
  }
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Number.isInteger(arr[i]) && arr[i] > 0) {
      count++;
    }
  }
  if (count === 0) {
    return "Không có số nguyên dương trong mảng";
  } else {
    return count;
  }
}

console.log(demSoNguyenDuong([4, 5.4, 6, -2]));
console.log(demSoNguyenDuong([1, 2, 5, 7, -8, 6]));
console.log(demSoNguyenDuong([1.2, -3, -6]));
