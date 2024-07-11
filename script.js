const form = document.querySelector("form");

// Stocker dans le local storage
const storeList = () => {
  window.localStorage.todoList = list.innerHTML;
};

const getTodos = () => {
  if (window.localStorage.todoList) {
    list.innerHTML = window.localStorage.todoList;
  } else {
    list.innerHTML = `<li> Créez votre To Do List </li>`;
  }
};

// Charger le contenu du Local Storage au lancement de la page
window.addEventListener("load", getTodos);

// Ajouter une ToDo
form.addEventListener("submit", (e) => {
  e.preventDefault();
  list.innerHTML += `<li>${item.value} </li> `;
  item.value = "";
  storeList();
});

// Supprimer une Todo
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("checked")) {
    e.target.remove();
  } else {
    e.target.classList.add("checked");
  }
  storeList();
});
