import { removeById } from "./Utils.js";

const Memory = (function () {
    let projects = [];

    const addToProjects = (project) => {
        projects.push(project);
    }

    const removeProjectId = (projectId) => {
        removeById(projects, projectId)
    }

    return {
        projects,
        addToProjects,
        removeProjectId
    }
})()

export default Memory