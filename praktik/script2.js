let umur = 12;

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

let c = 10;
let d = "10";

console.log(c == d);
// hanya membadingkna isi nilainya
console.log (c === d);
// membandingkan isi nilai dan tipe data