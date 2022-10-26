import NavControl from "./NavControl";
import Icon from "./Icon";
import starIcon from "./Icons/star.svg";
import startOutlineIcon from "./Icons/star-outline.svg";

const createProjectNode = (project) => {
  const item = document.createElement("li");
  item.setAttribute("data-id", project.id);

  if (project.id !== 1) {
    const icon = project.isBookmarked ? Icon(starIcon) : Icon(startOutlineIcon);
    icon.addEventListener("click", NavControl.toggleBookmarked);
    item.appendChild(icon);
  }

  item.appendChild(document.createTextNode(project.title));

  if (project.id !== 1) {
    const dltBtn = document.createElement("button");
    dltBtn.classList.add("delete-btn");
    dltBtn.textContent = "X";
    dltBtn.addEventListener("click", NavControl.handleDelete);
    item.appendChild(dltBtn);
  }

  item.addEventListener("click", NavControl.updateActiveNav);
  return item;
};

const createBookmarkedSection = (memory) => {
  const ul = document.createElement("ul");
  ul.id = "projects-bookmarked";

  for (const project of memory.bookmarkedProjects) {
    // Only shows bookmarked projects in the top of nav section
    const item = createProjectNode(project);

    ul.appendChild(item);
  }

  return ul;
};

const createProjectSection = (memory) => {
  const div = document.createElement("div");
  div.id = "projects";

  const header = document.createElement("header");
  header.textContent = "Projects";
  div.appendChild(header);

  const ul = document.createElement("ul");

  for (const project of memory.projects) {
    // skip Default (Home) Project
    if (project.isBookmarked) continue;

    const item = createProjectNode(project);

    ul.appendChild(item);
  }
  div.appendChild(ul);

  return div;
};

const createAddProjectBtn = () => {
  const div = document.createElement("div");
  div.id = "add-project";
  div.classList.add("text-bold");
  div.textContent = "Add Project";
  div.addEventListener("click", NavControl.toggleAddProjectForm);

  return div;
};

const createProjectForm = () => {
  const form = document.createElement("form");
  form.id = "add-project-form";
  form.classList.add("display-none");

  const input = document.createElement("input");
  input.type = "text";
  input.required = true;
  input.name = "project-title";
  input.id = "project-title";
  input.placeholder = "New Project Title";
  form.appendChild(input);

  const cancelBtn = document.createElement("button");
  cancelBtn.type = "button";
  cancelBtn.id = "cancel-project-btn";
  cancelBtn.textContent = "Cancel";
  cancelBtn.addEventListener("click", NavControl.toggleAddProjectForm);
  form.appendChild(cancelBtn);

  const addBtn = document.createElement("button");
  addBtn.type = "submit";
  addBtn.id = "add-project-btn";
  addBtn.textContent = "Add";
  form.appendChild(addBtn);

  form.addEventListener("submit", NavControl.handleSubmit);
  return form;
};

const createNav = (memory) => {
  const nav = document.createElement("div");
  nav.id = "nav";

  nav.appendChild(createBookmarkedSection(memory));
  nav.appendChild(createProjectSection(memory));
  nav.appendChild(createAddProjectBtn());
  nav.appendChild(createProjectForm());
  return nav;
};

export { createNav, createProjectNode };
