const todoInput = document.querySelector("#task");
const buttonDOM = document.querySelector("#liveToastBtn");
const toDoList = document.querySelector("#list");
const alertDiv = document.querySelector("#alertDiv");

eventListeners(); 

function eventListeners() {
  buttonDOM.addEventListener("click", addTodo);
  document.addEventListener("DOMContentLoaded", loadAllTodosToUI); 
  toDoList.addEventListener("click", deleteTodo); 
}

function deleteTodoFromStorage(deleteTodo) {
  let todos = getTodosFromStorage(); 

  todos.forEach(function (todo, index) {
    if (todo === deleteTodo) {
      todos.splice(index, 1); 
    }
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}

function deleteTodo(e) {
  if (e.target.className === "fa fa-remove") {

    e.target.parentElement.parentElement.remove(); 

    deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
    showAlert("warning", "başarılı bir şekilde silindi :)");
  } else if (e.target.className === "list-group") {
    console.log("yakaladım");
    e.target.parentElement.innerHTML = "asfsafs";
  }

  console.log(e.target);
}

function loadAllTodosToUI() {
  let todos = getTodosFromStorage(); 
  todos.forEach((todo) => {
   
    addTodoToUI(todo);
  });
}

function addTodo(e) {
  const newTodo = todoInput.value.trim(); 

  if (newTodo == "") {
    showAlert("danger", "Lütfen giriş yapınız !");
  } else {
    addTodoToUI(newTodo);
    addTodoToStorage(newTodo);
    showAlert("success", "Başarılı bir şekilde eklendi");
  }

  e.preventDefault(); 
}

function addTodoToUI(newTodo) {
  const listItem = document.createElement("li");
  listItem.className =
    "list-group-item d-flex justify-content-between align-items-center text-dark";

  const link = document.createElement("a");
  link.href = "#";
  link.className = "delete-item";
  link.innerHTML = '<i class="fa fa-remove"></i>';

  listItem.appendChild(document.createTextNode(newTodo)); 
  listItem.appendChild(link);

  toDoList.appendChild(listItem);
  todoInput.value = "";
}

function getTodosFromStorage() {

  let todos;

  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos")); 
  }
  return todos;
}

function addTodoToStorage(newTodo) {
  let todos = getTodosFromStorage();
  todos.push(newTodo); 

  localStorage.setItem("todos", JSON.stringify(todos));
}

function showAlert(type, massage) {

  const alert = document.createElement("div");
  alert.className = `alert alert-${type}`;
  alert.textContent = massage;
  alertDiv.append(alert);

  setTimeout(function () {
    alert.remove();
  }, 1500);
}
