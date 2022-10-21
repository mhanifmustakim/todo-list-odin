const createProjectHeader = (project) => {
    const div = document.createElement("div");
    div.classList.add("project-header");

    const title = document.createElement("h3");
    title.classList.add("project-title");
    title.appendChild(document.createTextNode(project.title));
    div.appendChild(title);

    if (project.description) {
        const description = document.createElement("p");
        description.classList.add("project-description");
        description.appendChild(document.createTextNode(project.description));
        div.appendChild(description);
    }

    return div
}

const createMain = (memory) => {
    const main = document.createElement("div");
    main.id = "main";

    const baseProject = memory.getProjectId(1);
    main.appendChild(createProjectHeader(baseProject));
    return main;
}

export { createMain, createProjectHeader }