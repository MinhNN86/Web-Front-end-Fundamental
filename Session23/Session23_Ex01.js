let arr = [1, 22, 12, 8, 7, 9];
// [1,2,3,4,5]
let arr1 = [];
let check = false;
for (let num of arr) {
  if (num >= 10) {
    check = true;
    arr1.push(num);
  }
}
if (check) {
  alert(arr1.join(" "));
} else {
  alert("Không có số nào lớn hơn 10");
}
