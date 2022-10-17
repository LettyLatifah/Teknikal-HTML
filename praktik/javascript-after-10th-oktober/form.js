function inputValue() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const list = document.getElementById('list');

  list.innerHTML += `<li>
                        <p>${name}</p>
                        <p>${email}<p>
                      </li> `;

  console.log(name);
}

// es6

const onSubmit = (event) => {
  event.preventDefault();
  document.getElementById('formUser');
  const { name, nohp } = event.target;

  listUser.innerHTML += `
  
      <li class="list-group-item">
        <p>${name.value} </p>
        <p>${nohp.value} </p>
      </li>
    `;
};

//event pada button
addEventListener('submit', onSubmit);

let text = "ABDCEFGHIJHZXCVBNMNBV";
let length = text.length;

let buah = "apel, mangga, semangka";

let upperCase = "hElLo wORlD!"
let upperCase1 = "hElLo wORlD!"


document.getElementById('length').innerHTML = text.length;

document.getElementById('demo').innerHTML = buah.slice(6, 12); 
//rentang yang tidak dihapus dari 6 - 12

// document.getElementById('string').innerHTML = buah.slice(-8); 
// jika menggunakan - maka dihitung dari belakang

document.getElementById('upper').innerHTML = upperCase.toUpperCase();
//konversi huruf kecil menjadi besar

document.getElementById('lower').innerHTML = upperCase1.toLowerCase();