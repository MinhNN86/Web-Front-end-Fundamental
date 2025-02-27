let banKinh = Number(prompt("Nhập bán kính"));
let chieuCao = Number(prompt("Nhập chiều cao"));
const pi = Math.PI;
let chuViDay = 2 * pi * banKinh;
let dienTichXungQuanh = 2 * pi * banKinh * chieuCao;
let dienTichToanPhan = 2 * pi * banKinh * (chieuCao + banKinh);
let theTich = pi * Math.pow(banKinh, 2) * chieuCao;
alert(`Chu vi đáy: ${chuViDay.toFixed(2)} 
Diện tích xung quanh: ${dienTichXungQuanh.toFixed(2)} 
Diện tích toàn phần: ${dienTichToanPhan.toFixed(2)} 
Thể tích hình trụ: ${theTich.toFixed(2)}`);
