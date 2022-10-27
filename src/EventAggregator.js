import pubsub from "pubsub.js";
import NavControl from "./NavControl";
import Memory from "./Memory";
import MainControl from "./MainControl";

const EventAggregator = (function () {
  pubsub.subscribe("ProjectAdded", (data) => {
    Memory.addToProjects(data);
    NavControl.updateNavSection(Memory);
  });

  pubsub.subscribe("ProjectDeleted", (data) => {
    Memory.removeProjectId(data);
    NavControl.updateNavSection(Memory);
  });

  pubsub.subscribe("ToggleBookmarked", (id) => {
    const project = Memory.getProjectId(id);
    if (project.isBookmarked) {
      Memory.removeFromBookmarked(id);
    } else {
      Memory.addToBookmarked(id);
    }
    NavControl.updateNavSection(Memory);
  });

  pubsub.subscribe("SetActiveProject", (id) =>
    MainControl.updateMain(Memory.getProjectId(id))
  );

  pubsub.subscribe("AddProjectDesc", (id, desc) => {
    const project = Memory.getProjectId(id);
    project.setDescription(desc);
    MainControl.updateMain(project);
  });

  pubsub.subscribe("ToggleIsDoneTodo", (todo) => {
    const obj = Memory.getProjectId(todo.projectId).getTodoId(todo.id);
    obj.toggleDone();
  });

  pubsub.subscribe("ChangeTodoDescription", (id, desc) => {
    const projectId = parseInt(
      document.querySelector("[data-projectId]").getAttribute("data-projectId")
    );
    const todo = Memory.getTodoId(projectId, id);
    todo.setDescription(desc);
    MainControl.updateMain(Memory.getProjectId(projectId));
  });
})();

export default EventAggregator;
