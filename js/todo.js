const toDoForm = document.querySelector(".todo-form");
const toDoInput = document.querySelector(".todo-form input");
// const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".todo-list");

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
}

toDoForm.addEventListener("submit", handleToDoSubmit);