// Get the modal
var modal = document.getElementById("myModal");
var time = document.getElementById("time");
var potision = document.getElementById("potision");
var hm = document.getElementById("height-main");
var hc = document.getElementById("height-content");
var id = 0;

// Get the button that opens the modal
var btn = document.getElementsByClassName("myEv")[0];
var btn2 = document.getElementsByClassName("myRe")[0];
var btn3 = document.getElementsByClassName("myTo")[0];

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span1 = document.getElementsByClassName("exit")[0];
// When the user clicks the button, open the modal 
btn.onclick = function () {
  modal.style.display = "block";
  time.style.display = "none";
  potision.style.display = "none";
  hm.style.height = "10px"
  hc.style.height = "120px"
}
btn2.onclick = function () {
  modal.style.display = "block";
  time.style.display = "block";
  potision.style.display = "block";
  hc.style.height = "210px"
}
btn3.onclick = function () {
  modal.style.display = "block";
  time.style.display = "block";
  potision.style.display = "block";
  hc.style.height = "210px"
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
  id = 0;
}
span1.onclick = function () {
  modal.style.display = "none";
  id = 0;
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function myFunction() {
  var check = document.getElementById("CheckDone");
  var check1 = document.getElementById("CheckDone1");
  var textTask = document.getElementById("TaskDone");
  var textTask1 = document.getElementById("TaskDone1");
  var where = document.getElementsByClassName("t_task_where")[0];
  var time = document.getElementsByClassName("t_task_time")[0];
  var padding = document.getElementsByClassName("t_task_content")[0];
  var he = document.getElementsByClassName("t_1")[0];
  if (check.checked == true) {
    textTask.style.textDecoration = "line-through";
  }
  else {
    textTask.style.textDecoration = "none";
  }
  if (check1.checked == true) {
    textTask1.style.textDecoration = "line-through";
    where.style.display = "none";
    where.style.height = "0px";
    time.style.display = "none";
    time.style.height = "0px";
    he.style.height = "65px";
    padding.style.paddingTop = "10px"
    padding.style.fontSize = "20px"
  }
  else {
    textTask1.style.textDecoration = "none";
    where.style.display = "block";
    where.style.height = "40px";
    time.style.display = "block";
    time.style.height = "40px";
    he.style.height = "90px";
    padding.style.paddingTop = "0px"
    padding.style.fontSize = "18px"
  }
}


$(".myEv").click(function () {
  id = 1;
  console.log(id);
})
$(".myRe").click(function () {
  id = 2;
  console.log(id);
})
$(".myTo").click(function () {
  id = 3;
  console.log(id);
})





const todoList = document.querySelector('.ev_content');
const list = document.querySelectorAll('.ev_content li'); //gives a NodeList of all li's
let listLength = list.length;

const todoListToday = document.querySelector('.t_content');
const listToday = document.querySelectorAll('.t_content li'); //gives a NodeList of all li's
let listLengthToday = list.length;

const todoListRe = document.querySelector('.re_content');
const listRe = document.querySelectorAll('.re_content li'); //gives a NodeList of all li's
let listLengthRe = list.length;

const generateTemplate = (todo) => {

  const html = `<li>
                    <input type="checkbox" id="todo_${listLength}" />
                    <label for="todo_${listLength}">
                        <span class="check"></span>${todo}
                    </label>
                    <i class="fa fa-edit ev_edit"></i>
                    <i class="fa fa-trash ev_delete"></i>
                  </li>`
  todoList.innerHTML += html;
};
const generateRe = (name, time, where) => {

  const html = `<li>
                    <input type="checkbox" id="r_todo_${listLengthRe}" />
                    <label for="r_todo_${listLengthRe}">
                        <div class="rd_name">
                            <span class="r_check"></span>${name}
                        </div>
                        <div class="rd_time">
                            <span class="r_check"></span>${time}
                        </div>
                        <div class="rd_where">
                            <span class="r_check"></span>${where}
                        </div>
                    </label>
                    <i class="fa fa-edit r_edit"></i>
                    <i class="fa fa-trash r_delete"></i>
                    </li>`
  todoListRe.innerHTML += html;
};
const generateToday = (name, time, where) => {

  const html = `<li>
                    <input type="checkbox" id="t_todo_${listLengthToday}" />
                    <label for="t_todo_${listLengthToday}">
                        <div class="td_name">
                            <span class="t_check"></span>${name}
                        </div>
                        <div class="td_time">
                            <span class="t_check"></span>${time}
                        </div>
                        <div class="td_where">
                            <span class="t_check"></span>${where}
                        </div>
                    </label>
                    <i class="fa fa-edit t_edit"></i>
                    <i class="fa fa-trash t_delete"></i>
                    </li>`
  todoListToday.innerHTML += html;
};

$(".btnA").click(function () {
  const todo = $("#taskname").val().trim();
  const time = $("#tasktime").val().trim();
  const where = $("#taskwhere").val().trim();
  console.log(todo);
  if (todo.length && (id == 1)) {
    listLength = listLength + 1; // to update the checkbox id when we add a new list item
    generateTemplate(todo);
    modal.style.display = "none";
    id = 0;
    $("#taskname").val(' ');
  }
  if (todo.length && (id == 3)) {
    listLengthToday = listLengthToday + 1; // to update the checkbox id when we add a new list item
    generateToday(todo, time, where);
    modal.style.display = "none";
    id = 0;
    $("#taskname").val(' ');
  }
  if (todo.length && (id == 2)) {
    listLengthRe = listLengthRe + 1; // to update the checkbox id when we add a new list item
    generateRe(todo, time, where);
    modal.style.display = "none";
    id = 0;
    $("#taskname").val(' ');
  }
});

function deleteTodos(e) {
  if (e.target.classList.contains('ev_delete')) {
    e.target.parentElement.remove();
  }
}

todoList.addEventListener('click', deleteTodos);

function deleteTodosToday(e) {
  if (e.target.classList.contains('t_delete')) {
    e.target.parentElement.remove();
  }
}

todoListToday.addEventListener('click', deleteTodosToday);

function deleteTodosRe(e) {
  if (e.target.classList.contains('r_delete')) {
    e.target.parentElement.remove();
  }
}

todoListRe.addEventListener('click', deleteTodosRe);