import { removeById } from "./Utils.js";

const Memory = (function () {
    let projects = [];
    let bookmarkedProjects = [];

    const addToProjects = (project) => {
        projects.push(project);
    }

    const addToBookmarked = (projectId) => {
        const index = projects.findIndex(
            (project) => project.id === projectId
        );

        if (index === -1) {
            console.error("Index of item not found in Projects list");
            return
        }

        const target = projects[index];
        target.setBookmarked(true);
        bookmarkedProjects.push(target);
    }

    const removeFromBookmarked = (projectId) => {
        const index = bookmarkedProjects.findIndex(
            (project) => project.id === projectId
        );

        if (index === -1) {
            console.error("Index of item not found in Projects list");
            return
        }


        const target = bookmarkedProjects[index];
        target.setBookmarked(false);
        bookmarkedProjects.splice(index, 1);
    }

    const removeProjectId = (projectId) => {
        removeById(projects, projectId)
    }

    return {
        projects,
        bookmarkedProjects,
        addToProjects,
        removeProjectId,
        addToBookmarked,
        removeFromBookmarked
    }
})()

export default Memory