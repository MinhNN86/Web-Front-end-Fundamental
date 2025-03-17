let contact = [
  { id: 1, name: "test", email: "test@gmail.com", phone: "0123456789" },
  { id: 2, name: "test1", email: "test1@gmail.com", phone: "0123456788" },
];
let menu = `Menu
1. Thêm đối tượng Contact vào danh sách liên hệ.
2. Hiển thị danh sách danh bạ.
3. Tìm kiếm thông tin Contact theo số điện thoại.
4. Cập nhật thông tin Contact(name, email, phone) theo id.
5. Xóa một đối tượng Contact  khỏi danh sách danh bạ theo id.
6. Thoát.
`;

let luaChon;
while (luaChon !== 6) {
  luaChon = +prompt(menu);
  switch (luaChon) {
    case 1: //Thêm đối tượng Contact vào danh sách liên hệ.
      let n = +prompt("Nhập số lượng contact cần thêm vào liên hệ");
      for (let i = 0; i < n; i++) {
        let inputId = contact.length + 1;
        let inputName = prompt("Nhập tên người liên hệ");
        let inputEmail = prompt("Nhập Email của người liên hệ");
        let inputPhone = prompt("Nhập số điện thoại của người liên hệ");
        contact.push({
          id: inputId,
          name: inputName,
          email: inputEmail,
          phone: inputPhone,
        });
      }
      break;
    case 2: //Hiển thị danh sách danh bạ.
      displayContact();
      break;
    case 3: // Tìm kiếm Contact theo số điện thoại
      {
        let inputPhone = prompt("Nhập số điện thoại:").trim();
        let foundContact = contact.find((c) => c.phone === inputPhone);

        if (!foundContact) {
          alert("Số điện thoại không tồn tại trong danh bạ.");
        } else {
          console.log(`Thông tin liên hệ:`);
          console.log(`ID: ${foundContact.id}`);
          console.log(`Tên: ${foundContact.name}`);
          console.log(`Email: ${foundContact.email}`);
          console.log(`Số điện thoại: ${foundContact.phone}`);
          console.log("-------------------------------");
        }
      }
      break;

    case 4: //Cập nhật thông tin Contact(name, email, phone) theo id.
      {
        let inputId = prompt("Nhập số id cần tìm");
        let findIndex = -1;
        for (let i in contact) {
          if (contact[i].id === inputId) {
            findIndex = i;
            break;
          }
        }
        if (findIndex === -1) {
          alert("Số id không tồn tại trong mảng");
        } else {
          let inputName = prompt("Nhập vào tên cần cập nhật");
          let inputEmail = prompt("Nhập vào email muốn cập nhật");
          let inputPhone = prompt("Nhập vào số điện thoại cần cập nhật");
          contact[findIndex].name = inputName;
          contact[findIndex].email = inputEmail;
          contact[findIndex].phone = inputPhone;
          alert("Đã cập nhật Contact thành công");
        }
      }
      break;
    case 5: //Xóa một đối tượng Contact  khỏi danh sách danh bạ theo id.
      {
        let inputId = prompt("Nhập số id cần xóa");
        let findIndex = -1;
        findIndex = contact.findIndex((e) => e.id === inputId);
        if (findIndex === -1) {
          alert("Không tìm thấy id cần xóa");
        } else {
          contact.splice(findIndex, 1);
          alert(`Xóa thành công ID: ${inputId}`);
        }
      }
      break;
    case 6: //Thoát
      {
        alert("Tạm biệt");
      }
      break;
    default:
      alert("Lựa chọn không hợp lệ");
      break;
  }
}

function displayContact() {
  contact.forEach((el, i) => {
    console.log(`Contact ${i + 1}: `);
    console.log("ID Contact", el.id);
    console.log("Email Contact", el.email);
    console.log("Phone Contact", el.phone);
    console.log("-------------------------------");
  });
}
