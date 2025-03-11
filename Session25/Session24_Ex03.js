function timSoChan(arr) {
  if (arr.length === 0) {
    console.log("Mảng rỗng");
    return;
  }
  let check = true;
  let arrChan = [];
  for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) {
      check = false;
    } else if (arr[i] % 2 === 0) {
      arrChan.push(arr[i]);
    }
  }
  if (!check) {
    console.log("Dữ liệu không hợp lệ");
  } else if (arrChan.length === 0) {
    console.log("mảng không chứa số chẵn");
  } else {
    console.log(arrChan.join(", "));
  }
}

console.log(timSoChan([11, 4, 65, 6]));
console.log(timSoChan([1, 3, 5, 17]));
console.log(timSoChan("text"));
