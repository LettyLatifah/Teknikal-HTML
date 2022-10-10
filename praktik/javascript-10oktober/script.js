let fruits = ['Apel', 'Mangga', 'Semangka', 'anggur', 'pisang'];

//method to string: mengubah data dalam bentuk string
document.getElementById('demo').innerHTML = fruits;

// console.log(fruits.toString());

// method join: mengubah data ke string beserta seperate operator
document.getElementById('demo2').innerHTML = fruits.join(' ');

// Method popping: menghapus value terakhir dan pushing: menambah value terakhir
fruits.pop();
document.getElementById('demo3').innerHTML = fruits;

fruits.push('Kiwi');
document.getElementById('demo4').innerHTML = fruits.join(' - ');

// shift method untuk menghapus elemen arrar pertama
fruits.shift();
document.getElementById('demo5').innerHTML = fruits;

// menambah element awal array
fruits.unshift('Buah Naga');
document.getElementById('demo6').innerHTML = fruits;

// concat method: menggabungkan dua data array dengan membuat array baru
let transportasi_darat = ['Motor', 'Mobil', 'Bus'];
let transportasi_umum = ['Pesawat', 'Kapal', 'Kereta'];

// dengan method concat
 let transportasi2 = transportasi_darat.concat(transportasi_umum);

//  menggunakan es6
let transportasi = [...transportasi_darat,...transportasi_umum]
document.getElementById('demo7').innerHTML = transportasi.join(', ');


// array baru
let fashion = ['Baju', 'Celana', 'Sepatu', 'Kaos'];

document.getElementById('demo8').innerHTML = fashion;

//  splicing(menambah) dan slicing(memotong) method: pada elemen yang ditentukan
fashion.splice(2,0, 'Sendal');
document.getElementById('demo9').innerHTML = fashion;

let remove = fashion.slice(1);
document.getElementById('demo10').innerHTML =  remove;