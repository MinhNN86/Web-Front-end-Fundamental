let arr = [1, 2, 3, 4, 5, 6];
if (arr.length === 0) {
  alert("Không có số lớn nhất");
} else {
  let maxIndex = 0;
  let maxValue = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (maxValue < arr[i]) {
      maxIndex = i;
      maxValue = arr[i];
    }
  }
  alert(`Số lớn nhất: ${maxValue}\nVị trí: ${maxIndex}`);
}
