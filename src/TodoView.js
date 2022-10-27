import TodoControl from "./TodoControl";
import { displayDelete } from "./Utils";

const createTitle = (todo) => {
  const title = document.createElement("header");
  title.classList.add("todo-title");
  title.textContent = todo.title;

  return title;
};

const createDueDate = (todo) => {
  const dueDate = document.createElement("p");
  dueDate.classList.add("todo-dueDate");
  if (todo.dueDate) dueDate.textContent = todo.dueDate;
  else dueDate.textContent = "Add a due date";

  return dueDate;
};

const createCheckbox = (todo) => {
  const isDone = document.createElement("input");
  isDone.classList.add("todo-checkbox");
  isDone.type = "checkbox";
  isDone.checked = todo.isDone;
  isDone.addEventListener("click", TodoControl.toggleDone.bind(window, todo));

  return isDone;
};

const createDescription = (todo) => {
  const div = document.createElement("div");
  const desc = document.createElement("div");
  let prompt;

  div.classList.add("display-none");
  div.classList.add("todo-desc");
  if (todo.description) {
    const todoDesc = document.createElement("p");
    todoDesc.textContent = todo.description;
    desc.appendChild(todoDesc);

    prompt = document.createElement("span");
    prompt.classList.add("float-right");
    prompt.textContent = "Edit description ";
  } else {
    prompt = document.createElement("p");
    prompt.textContent = "Add description";
  }

  const input = document.createElement("form");
  input.classList.add("display-none");
  input.setAttribute("data-id", todo.id);

  const textarea = document.createElement("textarea");
  textarea.name = "todo-description";
  textarea.placeholder = "Enter your todo description here.";
  textarea.value = todo.description ? todo.description : "";
  textarea.required = true;
  textarea.classList.add("input-todo-description");

  const saveBtn = document.createElement("button");
  saveBtn.appendChild(document.createTextNode("Save"));
  saveBtn.type = "submit";
  saveBtn.classList.add("save-description-btn");

  const cancelBtn = document.createElement("button");
  cancelBtn.appendChild(document.createTextNode("Cancel"));
  cancelBtn.type = "button";
  cancelBtn.classList.add("cancel-description-btn");

  prompt.addEventListener("click", displayDelete.bind(window, input, desc));
  cancelBtn.addEventListener("click", displayDelete.bind(window, desc, input));
  input.addEventListener("submit", TodoControl.submitDescription);

  input.appendChild(textarea);
  input.appendChild(saveBtn);
  input.appendChild(cancelBtn);

  prompt.classList.add("text-fade");
  desc.appendChild(prompt);
  desc.appendChild(input);
  div.appendChild(desc);
  div.appendChild(input);
  return div;
};

const createTodo = (todo) => {
  const node = document.createElement("div");
  node.classList.add("todo");

  const title = createTitle(todo);
  const dueDate = createDueDate(todo);
  const isDone = createCheckbox(todo);
  const description = createDescription(todo);
  title.addEventListener("click", () =>
    description.classList.toggle("display-none")
  );

  node.appendChild(title);
  node.appendChild(dueDate);
  node.appendChild(isDone);
  node.appendChild(description);
  return node;
};

// eslint-disable-next-line import/prefer-default-export
export { createTodo };
