import pubsub from 'pubsub.js';
import { createProjectNode } from './NavView.js';

const NavControl = (function () {
    let currentActive = 1;

    const updateActiveNav = (event) => {
        if (event) {
            currentActive = event.target.getAttribute("data-id");
            const prev = document.querySelector("#nav .active")
            prev.classList.remove("active");
            prev.addEventListener("click", updateActiveNav);
        };

        const nav = document.querySelector(`#nav [data-id="${currentActive}"]`);
        nav.classList.add("active");
        nav.removeEventListener("click", updateActiveNav);
        pubsub.publish("SetActiveProject", [currentActive]);
    }

    const toggleAddProjectForm = () => {
        document.querySelector("#add-project-form").classList.toggle("display-none");
        document.querySelector("#add-project").classList.toggle("display-none");
    }

    const toggleBookmarked = (event) => {
        event.stopPropagation();
        const targetProjectId = event.target.parentElement.getAttribute("data-id");

        pubsub.publish("ToggleBookmarked", [parseInt(targetProjectId)]);
    }

    const toggleNav = () => {
        document.querySelector("#nav").classList.toggle("display-none");
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const title = document.querySelector(`input[name="project-title"]`);
        pubsub.publish("ProjectAdded", [title.value]);
        title.value = "";
        toggleAddProjectForm();
    }

    const updateNavSection = (memory) => {
        const projectsList = document.querySelector("#projects>ul");
        const bookmarkedList = document.querySelector("#projects-bookmarked");

        projectsList.innerHTML = "";
        bookmarkedList.innerHTML = "";

        for (let project of memory.projects) {
            const projectNode = createProjectNode(project);
            if (project.isBookmarked) {
                bookmarkedList.appendChild(projectNode);
            } else {
                projectsList.appendChild(projectNode);
            }
        }

        updateActiveNav();
    }

    const handleDelete = (event) => {
        event.stopPropagation();
        const targetProjectId = event.target.parentElement.getAttribute("data-id");

        // If delete current active nav, default back to home nav
        if (currentActive === targetProjectId) currentActive = 1;
        pubsub.publish("ProjectDeleted", [parseInt(targetProjectId)]);
    }

    return {
        get currentActive() {
            return currentActive
        },
        updateActiveNav,
        toggleAddProjectForm,
        toggleNav,
        toggleBookmarked,
        handleSubmit,
        updateNavSection,
        handleDelete
    }
})()

export default NavControl