function convertDates(dateArray) {
  if (!Array.isArray(dateArray)) return "Dữ liệu không hợp lệ";
  if (!dateArray.length) return "Mảng không có phần tử nào";

  return dateArray.map((dateStr) => {
    let parts = dateStr.split("-");
    if (parts.length !== 3 || parts.some((part) => isNaN(part)))
      return "Dữ liệu không hợp lệ";

    let [year, month, day] = parts;
    return `${day}/${month}/${year}`;
  });
}
console.log(convertDates(["2025-03-10", "2024-12-25", "2023-07-01"]));
console.log(convertDates([]));
console.log(convertDates("abc"));
