// TODO: Implement the addTask function
function addTask() {
  const input = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Будь ласка, введіть завдання!");
    return;
  }

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;

  const completeBtn = document.createElement("button");
  completeBtn.innerHTML = "&#10003;";

  completeBtn.onclick = function () {
    span.classList.toggle("completed");

    if (span.classList.contains("completed")) {
      completeBtn.innerHTML = "&#10007;";
    } else {
      completeBtn.innerHTML = "&#10003;";
    }
  };

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.classList.add("remove-btn");
  removeBtn.onclick = function () {
    li.remove();
  };

  li.appendChild(completeBtn);
  li.appendChild(span);
  li.appendChild(removeBtn);

  taskList.appendChild(li);

  input.value = "";
}
