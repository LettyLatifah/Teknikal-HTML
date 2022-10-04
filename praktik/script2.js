let umur = prompt ("Masukkan Angka");
let convert= parseInt(umur);
console.log(convert);
if (isNaN(convert)) alert ("Masukkan Angka");
//if (convert === true ) (console.log("Masukkan Angka"))
//digunakan untuk mengubah string ke number
//console.log(typeof convert);

if (umur <= 17) {
  console.log('Masih Kecil');
} else if (umur > 17 && umur <= 30) {
  console.log('Masih Remaja');
} else if (umur > 30 && umur < 70) {
  console.log('sudah tua');
} else {
  console.log('Sudah Meninggal');
}

let a = 15;
let b = 10;

console.log(a < 20 && b > 5);
// dua kondisi harus terpenuhi jika ingin mendapatkan nilai true
console.log(a < 30 || b < 5);
// cukup memenuhi satu kondisi untuk mendapatlan nilai true

let c = 10; //number
let d = "10"; //string

console.log(c == d);
// hanya membadingkan isi nilainya
console.log (c === d);
// membandingkan isi nilai dan tipe data

let language = 'French';
let greeting = null;

switch (language) {
  case 'english':
    greeting = 'Good Morning';
    break;
  case 'French':
    greeting = 'Bonjour!';
    break;
  case 'Japanse':
    greeting = 'Ohayou Gozaimasu';
    break;
  default:
    greeting = 'Selamat Pagi';
}

console.log(greeting);
