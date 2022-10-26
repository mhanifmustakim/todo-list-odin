import pubsub from "pubsub.js";
import { createProjectHeader, createTodos } from "./MainView";

const MainControl = (function () {
  const updateMain = (project) => {
    const main = document.querySelector("#main");
    main.innerHTML = "";
    main.appendChild(createProjectHeader(project));
    if (project.todoList) {
      main.appendChild(createTodos(project));
    }
  };

  const saveDescription = (event) => {
    event.preventDefault();
    const projectId = event.target.getAttribute("data-id");
    const description = event.target.querySelector(
      '[name="project-description"]'
    ).value;
    pubsub.publish("AddProjectDesc", [parseInt(projectId), description]);
  };

  return {
    updateMain,
    saveDescription,
  };
})();

export default MainControl;
