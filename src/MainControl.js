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

  const addTodo = (event) => {
    event.preventDefault();
    const projectId = parseInt(event.target.getAttribute("data-project"));
    let title;
    let description;
    Array.from(event.target.elements).forEach((node) => {
      if (node.name === "todo-title") {
        title = node.value;
      } else if (node.name === "todo-desc") {
        description = node.value;
      }
    });

    pubsub.publish("AddTodo", [projectId, title, description]);
  };

  return {
    updateMain,
    saveDescription,
    addTodo,
  };
})();

export default MainControl;
