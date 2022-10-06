// perualangan for

for (let i = 0; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log('Ganjil');
  } else {
    console.log('Genap');
  }
}

let array = ['Letty', 'Latifah', 21];
let object = [{
  fname: 'Letty',
  lname: 'Latifah',
  age: 21,
}];

array.map((key) => console.log(array));

//for in untuk mengakses index atau key pada array bukan isi atau valuenya
for (key in object) {
  console.log(key);
}

//for of digunakan untuk mengakses data atau value pada variabel array
for ({fname, lname, age} of object) {
  console.log(fname, lname, age);
}

//while

let i = 0;

while (i <= 10) {
  console.log(i);
  i++;
}

//do while
do {
  console.log(i)
i++
} while (i <= 10);
