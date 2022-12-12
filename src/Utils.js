const removeById = (list, objectId) => {
  const index = list.findIndex((obj) => obj.id === objectId);
  return list.splice(index, 1);
};

const displayDelete = (displayNode, deleteNode) => {
  displayNode.classList.remove("display-none");
  deleteNode.classList.add("display-none");
};

const updateLocalStorage = (Memory) => {
  const projects = [];
  const bookmarkedProjects = [];
  for (const project of Memory.projects) {
    const projectObj = {
      id: project.id,
      type: project.type,
      title: project.title,
      description: project.description,
      todoList: [],
      isBookmarked: project.isBookmarked,
    };

    projects.push(projectObj);
    if (project.isBookmarked) bookmarkedProjects.push(projectObj);

    project.todoList.forEach((todo) => {
      projects[projects.length - 1].todoList.push({
        id: todo.id,
        type: todo.type,
        title: todo.title,
        description: todo.description,
        dueDate: todo.dueDate,
        isDone: todo.isDone,
      });
    });
  }

  localStorage.projects = JSON.stringify(projects);
};

export { removeById, displayDelete, updateLocalStorage };
