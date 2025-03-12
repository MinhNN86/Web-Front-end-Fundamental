let arr = [];
for (let i = 0; i < 10; ) {
  let input = +prompt(`Nhập phần tử thứ ${i + 1}`);
  if (isNaN(input) || !Number.isInteger(input)) {
    alert("Dữ liệu không hợp lệ");
  } else {
    arr.push(input);
    i++;
  }
}
let mangChan = arr.filter((el) => el % 2 === 0);
mangChan = mangChan.map((el) => el * el);
alert(
  mangChan.length > 0 ? `${mangChan.join(", ")}` : "Không có số chẵn trong mảng"
);
