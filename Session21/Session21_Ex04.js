let a = Number(prompt("Nhập hệ số a"));
let b = Number(prompt("Nhập hệ số b"));
let c = Number(prompt("Nhập hệ số c"));
let x;

if (a === 0) {
  if (b === 0) {
    alert(c === 0 ? "Phương trình vô số nghiệm" : "Phương trình vô nghiệm");
  } else {
    x = -c / b;
    alert(`Phương trình có một nghiệm: x = ${x}`);
  }
} else {
  let delta = Math.pow(b, 2) - 4 * a * c;
  if (delta < 0) {
    alert("Phương trình vô nghiệm");
  } else if (delta === 0) {
    x = -b / (2 * a);
    alert(`Phương trình có nghiệm kép: x = ${x}`);
  } else {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    alert(`Phương trình có hai nghiệm phân biệt: x1 = ${x1}; x2 = ${x2}`);
  }
}
