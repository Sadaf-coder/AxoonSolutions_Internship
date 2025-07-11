

function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskText = taskInput.value.trim();

  if (taskText === "") return;

  let li = document.createElement("li");

  let span = document.createElement("span");
  span.className = "task-text";
  span.textContent = taskText;

  let editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.className = "edit-btn";

  let delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.className = "delete-btn";

  // Edit button
editBtn.onclick = function () {
  if (editBtn.textContent === "Edit") {
    let inputBox = document.createElement("input");
    inputBox.type = "text";
    inputBox.value = span.textContent;
    inputBox.className = "edit-input";
    li.insertBefore(inputBox, span);
    li.removeChild(span);
    editBtn.textContent = "Save";
    editBtn.className = "save-btn";
  } 
  else {
    let inputBox = li.querySelector("input");
    let newText = inputBox.value.trim();
    if (newText !== "") {
      span.textContent = newText;
      li.insertBefore(span, inputBox);
      li.removeChild(inputBox);
      editBtn.textContent = "Edit";
      editBtn.className = "edit-btn";
      }
    }
  };

delBtn.onclick = function () {
  li.remove();
};

let actionDiv = document.createElement("div");
actionDiv.className = "actions";
actionDiv.appendChild(editBtn);
actionDiv.appendChild(delBtn);

li.appendChild(span);
li.appendChild(actionDiv);

document.getElementById("taskList").appendChild(li);

taskInput.value = "";
taskInput.focus();
}
