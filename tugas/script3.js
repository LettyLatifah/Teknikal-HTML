for (let angka = 1; angka <= 50; angka++) {
  if (angka % 5 == 0 && angka % 3 == 0) {
    console.log('ApaBoleh');
  } else if (angka % 5 == 0) {
    console.log('Boleh');
  } else if (angka % 3 == 0) {
    console.log('Apa');
  } else {
    console.log(angka);
  }
}
