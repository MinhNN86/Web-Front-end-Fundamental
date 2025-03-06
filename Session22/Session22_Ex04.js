let input = prompt("Nhập vào dãy số bất kì");

if (isNaN(input) || input.includes(" ")) {
  alert("Dãy không hợp lệ");
} else {
  let arr = input.split("");
  let soLonNhat = 0;
  for (let i = 0; i < arr.length; i++) {
    let soHienTai = Number(arr[i]);
    if (soHienTai > soLonNhat) {
      soLonNhat = soHienTai;
    }
  }
  alert(soLonNhat + " là số lớn nhất trong dãy số");
}
