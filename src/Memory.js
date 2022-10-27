import Project from "./Project";
import { removeById } from "./Utils";

const Memory = (function () {
  const projects = [];
  const bookmarkedProjects = [];

  const addToProjects = (project) => {
    // eslint-disable-next-line no-param-reassign
    if (project.type !== "Project") project = Project(project);
    projects.push(project);
  };

  const addToBookmarked = (projectId) => {
    const index = projects.findIndex((project) => project.id === projectId);
    const target = projects[index];
    target.setBookmarked(true);
    bookmarkedProjects.push(target);
  };

  const removeFromBookmarked = (projectId) => {
    const index = bookmarkedProjects.findIndex(
      (project) => project.id === projectId
    );
    const target = bookmarkedProjects[index];
    target.setBookmarked(false);
    bookmarkedProjects.splice(index, 1);
  };

  const removeProjectId = (projectId) => {
    removeById(projects, projectId);
  };

  const getProjectId = (projectId) => {
    const index = projects.findIndex((project) => project.id === projectId);

    return projects[index];
  };

  const getTodoId = (projectId, todoId) => {
    const project = getProjectId(projectId);
    return project.getTodoId(todoId);
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
  };
})();

export default Memory;
