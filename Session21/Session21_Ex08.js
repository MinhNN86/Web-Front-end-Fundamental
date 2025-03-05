for (let so = 100; so <= 999; so++) {
  let hangTram = Math.floor(so / 100);
  let hangChuc = Math.floor((so % 100) / 10);
  let hangDonVi = so % 10;
  let tongLapPhuong =
    Math.pow(hangTram, 3) + Math.pow(hangChuc, 3) + Math.pow(hangDonVi, 3);
  if (tongLapPhuong === so) {
    console.log(so);
  }
}
