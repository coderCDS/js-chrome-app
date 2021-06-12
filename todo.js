const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
let toDos = [];

function deleteToDo(event) {
  const target_li = event.target.parentElement;
  toDoList.removeChild(target_li);

  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(target_li.id);
  });
  console.log(cleanToDos);
  toDos = cleanToDos;

  saveToDos(toDos);
}

function saveToDos(arr) {
  localStorage.setItem(TODOS_LS, JSON.stringify(arr));
}

function paintToDo(text) {
  const newID = toDos.length + 1;
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerText = "X";
  delBtn.addEventListener("click", deleteToDo);
  const span = document.createElement("span");
  span.innerText = text;

  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newID;
  toDoList.appendChild(li);

  const toDoObj = {
    text: text,
    id: newID,
  };
  toDos.push(toDoObj);

  saveToDos(toDos);
}
function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);

  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);

  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function (toDo) {
      paintToDo(toDo.text);
    });
    //toDos = toDos_LS;
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
