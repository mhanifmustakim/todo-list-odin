import MainControl from "./MainControl";
import { createTodo } from "./TodoView";
import { displayDelete } from "./Utils";

const createTitle = (project) => {
  const title = document.createElement("h3");
  title.classList.add("project-title");
  title.appendChild(document.createTextNode(project.title));
  return title;
};

const createDesc = (project) => {
  const div = document.createElement("div");
  div.classList.add("input-group-description");

  const description = document.createElement("p");
  const content = project.description ? project.description : "";
  const prompt = document.createElement("span");
  prompt.classList.add("prompt");
  if (content) {
    prompt.textContent = "Edit description";
    prompt.classList.add("float-right");
  } else {
    prompt.textContent = "Add a project description...";
  }

  description.classList.add("project-description");
  description.appendChild(document.createTextNode(content));
  description.appendChild(prompt);

  const input = document.createElement("form");
  input.classList.add("display-none");
  input.setAttribute("data-id", project.id);

  const textarea = document.createElement("textarea");
  textarea.name = "project-description";
  textarea.placeholder = "Enter your project description here.";
  textarea.value = project.description ? project.description : "";
  textarea.required = true;
  textarea.classList.add("input-description");

  const saveBtn = document.createElement("button");
  saveBtn.appendChild(document.createTextNode("Save"));
  saveBtn.type = "submit";
  saveBtn.classList.add("save-btn");

  const cancelBtn = document.createElement("button");
  cancelBtn.appendChild(document.createTextNode("Cancel"));
  cancelBtn.type = "button";
  cancelBtn.classList.add("cancel-btn");

  prompt.addEventListener(
    "click",
    displayDelete.bind(window, input, description)
  );
  cancelBtn.addEventListener(
    "click",
    displayDelete.bind(window, description, input)
  );
  input.addEventListener("submit", MainControl.saveDescription);

  input.appendChild(textarea);
  input.appendChild(saveBtn);
  input.appendChild(cancelBtn);
  div.appendChild(description);
  div.appendChild(input);
  return div;
};

const createProjectHeader = (project) => {
  const div = document.createElement("div");
  div.classList.add("project-header");
  div.setAttribute("data-projectId", project.id);

  const title = createTitle(project);
  div.appendChild(title);

  const description = createDesc(project);
  div.appendChild(description);

  return div;
};

const createAddTodoForm = (project) => {
  const addTodo = document.createElement("div");
  const addTodoBtn = document.createElement("button");
  addTodoBtn.classList.add("add-todo-btn");
  addTodoBtn.textContent = "Add todo";

  const todoPrompt = document.createElement("form");
  todoPrompt.setAttribute("data-project", project.id);
  todoPrompt.classList.add("add-todo-form");

  const title = document.createElement("header");
  title.textContent = "Add a new Todo";
  title.classList.add("text-bold");
  title.classList.add("text-center");

  const titleFormGroup = document.createElement("div");
  titleFormGroup.classList.add("form-group");
  const todoTitlePrompt = document.createElement("label");
  const todoTitle = document.createElement("input");
  todoTitlePrompt.textContent = "Todo Title: ";
  todoTitlePrompt.for = "todo-title";
  todoTitle.classList.add("input-title");
  todoTitle.type = "text";
  todoTitle.required = true;
  todoTitle.name = "todo-title";
  todoTitle.id = "todo-title";
  todoTitle.placeholder = "Todo Title. (required)";
  titleFormGroup.appendChild(todoTitlePrompt);
  titleFormGroup.appendChild(todoTitle);

  const descFormGroup = document.createElement("div");
  descFormGroup.classList.add("form-group");
  const todoDescPrompt = document.createElement("label");
  const todoDesc = document.createElement("textarea");
  todoDescPrompt.textContent = "Todo Description: ";
  todoDescPrompt.for = "todo-desc";
  todoDesc.name = "todo-desc";
  todoDesc.id = "todo-desc";
  todoDesc.placeholder = "Enter your todo description here. (optional)";
  todoDesc.classList.add("input-description");
  descFormGroup.appendChild(todoDescPrompt);
  descFormGroup.appendChild(todoDesc);

  const buttons = document.createElement("div");
  buttons.classList.add("buttons");
  const cancelBtn = document.createElement("button");
  const saveBtn = document.createElement("button");
  cancelBtn.type = "button";
  cancelBtn.textContent = "Cancel";
  cancelBtn.classList.add("cancel-btn");
  saveBtn.type = "submit";
  saveBtn.textContent = "save";
  saveBtn.classList.add("save-btn");

  cancelBtn.addEventListener(
    "click",
    displayDelete.bind(window, addTodoBtn, todoPrompt)
  );

  buttons.appendChild(cancelBtn);
  buttons.appendChild(saveBtn);

  todoPrompt.appendChild(title);
  todoPrompt.appendChild(titleFormGroup);
  todoPrompt.appendChild(descFormGroup);
  todoPrompt.appendChild(buttons);
  todoPrompt.classList.add("display-none");
  todoPrompt.addEventListener("submit", MainControl.addTodo);

  addTodoBtn.addEventListener(
    "click",
    displayDelete.bind(window, todoPrompt, addTodoBtn)
  );

  addTodo.appendChild(addTodoBtn);
  addTodo.appendChild(todoPrompt);

  return addTodo;
};

const createTodos = (project) => {
  const todoList = document.createElement("div");
  todoList.id = "todo-list";
  for (const todo of project.todoList) {
    todoList.appendChild(createTodo(todo));
  }

  todoList.appendChild(createAddTodoForm(project));
  return todoList;
};

const createMain = (memory) => {
  const main = document.createElement("div");
  main.id = "main";

  const baseProject = memory.getProjectId(1);
  main.appendChild(createProjectHeader(baseProject));
  if (baseProject.todoList) {
    main.appendChild(createTodos(baseProject));
  }
  return main;
};

export { createMain, createProjectHeader, createTodos };
