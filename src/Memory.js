import pubsub from 'pubsub.js';
import Project from './Project.js';
import { removeById } from "./Utils.js";

const Memory = (function () {
    let projects = [];
    let bookmarkedProjects = [];

    const addToProjects = (project) => {
        if (project.type !== "Project") project = Project(project);
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
        console.log(target);
        target.setBookmarked(true);
        bookmarkedProjects.push(target);
        console.log(bookmarkedProjects);
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
        console.log(target);
        target.setBookmarked(false);
        bookmarkedProjects.splice(index, 1);
    }

    const removeProjectId = (projectId) => {
        removeById(projects, projectId);
    }

    const getProjectId = (projectId) => {
        const index = projects.findIndex(
            (project) => project.id === projectId
        );

        return projects[index];
    }

    const addProjectToken = pubsub.subscribe("ProjectAdded", addToProjects);
    const removeProjectToken = pubsub.subscribe("ProjectDeleted", removeProjectId);
    const toggleBookmarkedToken = pubsub.subscribe(
        "ToggleBookmarked",
        (id) => {
            const project = getProjectId(id);
            project.isBookmarked ? removeFromBookmarked(id) : addToBookmarked(id);
            console.log(Memory);
        }
    );

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