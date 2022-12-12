import Project from "./Project";
import Todo from "./Todo";
import { removeById, updateLocalStorage } from "./Utils";

const Memory = (function () {
  const projects = [];
  const bookmarkedProjects = [];

  const addToProjects = (project) => {
    // eslint-disable-next-line no-param-reassign
    if (project.type !== "Project") project = Project(project);
    projects.push(project);
    updateLocalStorage(Memory);
  };

  const addToBookmarked = (projectId) => {
    const index = projects.findIndex((project) => project.id === projectId);
    const target = projects[index];
    target.setBookmarked(true);
    bookmarkedProjects.push(target);
    updateLocalStorage(Memory);
  };

  const removeFromBookmarked = (projectId) => {
    const index = bookmarkedProjects.findIndex(
      (project) => project.id === projectId
    );
    const target = bookmarkedProjects[index];
    target.setBookmarked(false);
    bookmarkedProjects.splice(index, 1);
    updateLocalStorage(Memory);
  };

  const removeProjectId = (projectId) => {
    removeById(projects, projectId);
    updateLocalStorage(Memory);
  };

  const getProjectId = (projectId) => {
    const index = projects.findIndex((project) => project.id === projectId);

    return projects[index];
  };

  const getTodoId = (projectId, todoId) => {
    const project = getProjectId(projectId);
    return project.getTodoId(todoId);
  };

  const populate = (storage) => {
    const storedProjects = JSON.parse(storage.getItem("projects"));
    storedProjects.forEach((project) => {
      const projectObj = Project(project.title);
      if (project.description) projectObj.setDescription(project.description);
      project.todoList.forEach((todo) => {
        const todoObj = Todo(todo.title);
        if (todo.description) todoObj.setDescription(todo.description);
        if (todo.dueDate) todoObj.setDueDate(todo.dueDate);
        if (todo.isDone) todoObj.toggleDone();
        projectObj.addTodo(todoObj);
      });

      if (project.isBookmarked) {
        projectObj.setBookmarked(true);
        bookmarkedProjects.push(projectObj);
      }

      projects.push(projectObj);
    });
  };

  return {
    projects,
    bookmarkedProjects,
    addToProjects,
    removeProjectId,
    addToBookmarked,
    removeFromBookmarked,
    getProjectId,
    getTodoId,
    populate,
  };
})();

export default Memory;
