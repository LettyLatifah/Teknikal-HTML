const onSubmit = (event) => {
  event.preventDefault();
  document.getElementById('to-do');
  const { input } = event.target;

  list_group.innerHTML += `
  
    <li id="list-item">
      ${input.value}

      <button id="remove" class="btn btn-info btn-del" 
      onClick="deleteList()">
        Remove 
      </button>
    </li>
  
  `;
};

addEventListener('submit', onSubmit);

function deleteList() {
  document.getElementById('list-item').remove();
}
