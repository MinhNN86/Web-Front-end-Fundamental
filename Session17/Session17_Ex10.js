let n = Number(prompt("Nhập một số nguyên:"));

let sqrtN = Math.sqrt(n);
let ketQua = Number.isInteger(sqrtN)
  ? `${n} là số chính phương`
  : `${n} không phải số chính phương`;

alert(ketQua);
