//menggunakan if else

let nilai = 87;

if (nilai >= 1 && nilai <= 30) {
  console.log('D');
} else if (nilai >= 31 && nilai <= 59) {
  console.log(' C');
} else if (nilai >= 60 && nilai <= 79) {
  console.log('B');
} else if (nilai >= 80 && nilai <= 100) {
  console.log('A');
} else if (nilai > 100) {
  console.log('Invalid Number');
} else {
  console.log('Negatif Invalid Number ');
} //alternatif menggunakan ==> (nilai < 0) pada else if

// menggunakan shortcut es6

const userInput = prompt('Masukan Nilai');

const checkValue = +userInput;
//const checkValue1 = parseInt(userInput);

if (isNaN(checkValue)) alert('Harap Masukkan Angka!'); //validasi jika value adalaah number

if (checkValue < 0 || checkValue > 100)
  alert('Harap Masukkan Diantara 1 - 100!'); //validasi angka range 1 - 100

if (checkValue >= 0 && checkValue <= 30) alert('D');
if (checkValue >= 31 && checkValue <= 59) alert('C');
if (checkValue >= 60 && checkValue <= 79) alert('B');
if (checkValue >= 80 && checkValue <= 100) alert('A');
