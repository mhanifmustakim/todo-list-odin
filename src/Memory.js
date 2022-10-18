import { removeById } from "./Utils.js";

const Memory = (function () {
    let projects = [];

    const addToProjects = (project) => {
        projects.push(project);
    }

    const removeFromProjects = (projectId) => {
        removeById(projects, projectId)
    }

    return {
        projects,
        addToProjects,
        removeFromProjects
    }
})()

export default Memory