let  students=[
    { name: "Trần Trí Dương", scores: { math: 9, english: 8, literature : 7 } },
    { name: "Hà Bích Ngọc", scores: { math: 3, english: 2, literature : 5} },
    { name: "Bùi Thái Sơn", scores: { math: 9.5, english: 9, literature : 9 } }
];
function diemCao(students){
    let sinhVien = [];
    for(let i in students){
        let check = true;
        for(let j in students[i].scores){
            if(students[i].scores[j] < 8){
                check = false;
                break;
            }
        }
            if(check){
                sinhVien.push(students[i]);
            }
    }
    if(sinhVien.length === 0){
        console.log("Không có sinh viên điểm cao");
    } else {
        console.log(sinhVien);
    }
}
diemCao(students);