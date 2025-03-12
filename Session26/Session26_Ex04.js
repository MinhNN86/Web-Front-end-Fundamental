let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result = arr.filter((el) => {
  if (el < 2) return false;
  for (let i = 2; i <= Math.sqrt(el); i++) {
    if (el % i === 0) return false;
  }
  return true;
});

alert(
  result.length > 0 ? `${result.join(", ")} ` : "Mảng không có số nguyên tố"
);
