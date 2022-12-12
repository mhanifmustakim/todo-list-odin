import pubsub from "pubsub.js";
import NavControl from "./NavControl";
import Memory from "./Memory";
import MainControl from "./MainControl";
import Todo from "./Todo";
import { updateLocalStorage } from "./Utils";

const EventAggregator = (function () {
  pubsub.subscribe("ProjectAdded", (data) => {
    Memory.addToProjects(data);
    updateLocalStorage(Memory);
    NavControl.updateNavSection(Memory);
  });

  pubsub.subscribe("ProjectDeleted", (data) => {
    Memory.removeProjectId(data);
    updateLocalStorage(Memory);
    NavControl.updateNavSection(Memory);
  });

  pubsub.subscribe("ToggleBookmarked", (id) => {
    const project = Memory.getProjectId(id);
    if (project.isBookmarked) {
      Memory.removeFromBookmarked(id);
    } else {
      Memory.addToBookmarked(id);
    }
    updateLocalStorage(Memory);
    NavControl.updateNavSection(Memory);
  });

  pubsub.subscribe("SetActiveProject", (id) =>
    MainControl.updateMain(Memory.getProjectId(id))
  );

  pubsub.subscribe("AddProjectDesc", (id, desc) => {
    const project = Memory.getProjectId(id);
    project.setDescription(desc);
    updateLocalStorage(Memory);
    MainControl.updateMain(project);
  });

  pubsub.subscribe("ToggleIsDoneTodo", (todo) => {
    const obj = Memory.getProjectId(todo.projectId).getTodoId(todo.id);
    obj.toggleDone();
    updateLocalStorage(Memory);
  });

  pubsub.subscribe("ChangeTodoDescription", (id, desc) => {
    const projectId = parseInt(
      document.querySelector("[data-projectId]").getAttribute("data-projectId")
    );
    const todo = Memory.getTodoId(projectId, id);
    todo.setDescription(desc);
    updateLocalStorage(Memory);
    MainControl.updateMain(Memory.getProjectId(projectId));
  });

  pubsub.subscribe("ChangeTodoDate", (id, date) => {
    const projectId = parseInt(
      document.querySelector("[data-projectId]").getAttribute("data-projectId")
    );
    const todo = Memory.getTodoId(projectId, id);
    todo.setDueDate(date);
    updateLocalStorage(Memory);
    MainControl.updateMain(Memory.getProjectId(projectId));
  });

  pubsub.subscribe("AddTodo", (projectId, todoTitle, todoDesc) => {
    const newTodo = Todo(todoTitle);
    const project = Memory.getProjectId(projectId);
    if (todoDesc) newTodo.setDescription(todoDesc);
    project.addTodo(newTodo);
    updateLocalStorage(Memory);
    MainControl.updateMain(project);
  });
})();

export default EventAggregator;
