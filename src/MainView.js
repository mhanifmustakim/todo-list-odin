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
  saveBtn.classList.add("save-description-btn");

  const cancelBtn = document.createElement("button");
  cancelBtn.appendChild(document.createTextNode("Cancel"));
  cancelBtn.type = "button";
  cancelBtn.classList.add("cancel-description-btn");

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

  const title = createTitle(project);
  div.appendChild(title);

  const description = createDesc(project);
  div.appendChild(description);

  return div;
};

const createTodos = (project) => {
  const todoList = document.createElement("div");
  todoList.id = "todo-list";
  for (const todo of project.todoList) {
    todoList.appendChild(createTodo(todo));
  }
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
