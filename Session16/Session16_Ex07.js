let math = Number(prompt("nhập điểm toán"));
let physics = Number(prompt("nhập điểm vật lý"));
let chemistry = Number(prompt("Nhập điểm môn hóa học"));
let tongDiem = math + physics + chemistry;
let diemTrungBinh = parseFloat(tongDiem / 3);
alert(`điểm trung bình của 3 môn là: ${diemTrungBinh.toFixed(2)}`);
