import NavControl from './NavControl.js';
const createBookmarkedSection = (memory) => {
    const ul = document.createElement("ul");
    ul.id = "nav-main";

    for (let project of memory.bookmarkedProjects) {
        // Only shows bookmarked projects in the top of nav section
        const item = document.createElement("li");
        item.setAttribute("data-id", project.id);
        item.textContent = project.title;
        item.addEventListener("click", NavControl.updateActiveNav);

        ul.appendChild(item);
    }

    return ul
}

const createProjectSection = (memory) => {
    const div = document.createElement("div");
    div.id = "projects";

    const header = document.createElement("header");
    header.textContent = "Projects";
    div.appendChild(header);

    const ul = document.createElement("ul");

    for (let project of memory.projects) {
        // skip Default (Home) Project
        if (project.isBookmarked) continue

        const item = document.createElement("li");
        item.setAttribute("data-id", project.id);
        item.textContent = project.title;
        item.addEventListener("click", NavControl.updateActiveNav);

        ul.appendChild(item);
    }
    div.appendChild(ul);

    return div
}

const createAddProjectBtn = () => {
    const div = document.createElement("div");
    div.id = "add-project";
    div.classList.add("text-bold");
    div.textContent = "Add Project";
    div.addEventListener("click", NavControl.toggleAddProjectForm);

    return div
}

const createProjectForm = () => {
    const form = document.createElement("form");
    form.id = "add-project-form";
    form.classList.add("display-none");

    const input = document.createElement("input");
    input.type = "text";
    input.name = "project-title";
    input.id = "project-title";
    input.placeholder = "New Project Title";
    form.appendChild(input);

    const addBtn = document.createElement("button");
    addBtn.type = "submit";
    addBtn.id = "add-project-btn";
    addBtn.textContent = "Add";
    form.appendChild(addBtn);

    const cancelBtn = document.createElement("button");
    cancelBtn.type = "button";
    cancelBtn.id = "cancel-project-btn";
    cancelBtn.textContent = "Cancel"
    cancelBtn.addEventListener("click", NavControl.toggleAddProjectForm);
    form.appendChild(cancelBtn);

    form.addEventListener("submit", NavControl.handleSubmit);
    return form
}

const createNav = (memory) => {
    const nav = document.createElement("div");
    nav.id = "nav";

    nav.appendChild(createBookmarkedSection(memory));
    nav.appendChild(createProjectSection(memory));
    nav.appendChild(createAddProjectBtn());
    nav.appendChild(createProjectForm());
    return nav
}

export { createNav }