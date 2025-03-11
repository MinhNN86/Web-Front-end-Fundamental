function timSoNhoNhat(arr) {
  if (arr.length === 0) {
    alert("Mảng không có phần tử");
  }
  let check = true;
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
    if (isNaN(arr[i])) {
      check = false;
    }
  }
  if (!check) {
    alert("Giá trị không hợp lệ");
  } else {
    alert(`Phần tử nhỏ nhất trong mảng là ${min}`);
  }
}

timSoNhoNhat([2, 4, 8, 1, 9]);
timSoNhoNhat("abc");
