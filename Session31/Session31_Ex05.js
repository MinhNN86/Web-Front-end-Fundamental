let employees = [{ id: 1, name: "test", age: 18, address: "test" }];
let n = +prompt("Nhập số nhân viên muốn thêm");
for (let i = 0; i < n; i++) {
  let inputId = employees.length + 1;
  let inputName = prompt("Nhập tên nhân viên");
  let inputAge = +prompt("Nhập tuổi nhân viên");
  let inputAddress = prompt("Nhập địa chỉ của nhân viên");
  employees.push({
    id: inputId,
    name: inputName,
    age: inputAge,
    address: inputAddress,
  });
}
let add = "";
employees.forEach((el) => {
  add += "<tr>";
  add += "<td>" + el.id + "</td>";
  add += "<td>" + el.name + "</td>";
  add += "<td>" + el.age + "</td>";
  add += "<td>" + el.address + "</td>";
  add += "</tr>";
});
let table = document.getElementById("table");
table.innerHTML =
  `
        <tr>
            <th>STT</th>
            <th>NAME</th>
            <th>AGE</th>
            <th>ADDRESS</th>
        </tr>
        
` + add;
