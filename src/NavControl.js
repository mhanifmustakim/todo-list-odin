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
    }

    const toggleAddProjectForm = () => {
        document.querySelector("#add-project-form").classList.toggle("display-none");
        document.querySelector("#add-project").classList.toggle("display-none");
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
    }

    return {
        get currentActive() {
            return currentActive
        },
        updateActiveNav,
        toggleAddProjectForm,
        handleSubmit,
        updateNavSection
    }
})()

export default NavControl