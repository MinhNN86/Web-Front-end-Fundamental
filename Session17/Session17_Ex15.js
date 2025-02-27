let banKinh = Number(prompt("Nhập bán kính hình cầu"));
const pi = Math.PI;
let theTich = (4 / 3) * pi * Math.pow(banKinh, 3);
let dienTichBeMat = 4 * pi * Math.pow(banKinh, 2);
let chuViLonNhat = 2 * pi * banKinh;
alert(`Thể tích hình cầu: ${theTich.toFixed(2)} 
Diện tích bề mặt: ${dienTichBeMat.toFixed(2)} 
Chu vi lớn nhất: ${chuViLonNhat.toFixed(2)}`);
