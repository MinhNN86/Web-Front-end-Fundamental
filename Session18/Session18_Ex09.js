let gio = +prompt("Nhập giờ (0 - 23)");
let phut = +prompt("Nhập số phút (0 - 59)");
let giay = +prompt("Nhập số giây (0 - 59)");

let amPm = "AM";

if (gio >= 12) {
  amPm = "PM";
  if (gio > 12) gio -= 12;
} else if (gio === 0) {
  gio = 12;
}

alert(`Thời gian: ${gio}:${phut}:${giay} ${amPm}`);
