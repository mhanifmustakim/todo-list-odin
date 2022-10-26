import { removeById } from "./Utils";

const Project = (projectTitle) => {
  const id = Project.getId();
  const type = "Project";
  let todoList = [];
  let title = projectTitle;
  let isBookmarked = false;
  let description;

  const addTodo = (todo) => {
    todo.projectId = id;
    todoList.push(todo);
  };

  const removeTodoId = (todoId) => {
    removeById(todoList, todoId);
  };

  const setTitle = (newTitle) => {
    title = newTitle;
  };

  const setDescription = (desc) => {
    description = desc;
  };

  const setBookmarked = (bool) => {
    isBookmarked = bool;
  };

  const getTodoId = (todoId) => {
    const index = todoList.findIndex((todo) => todo.id === todoId);

    return todoList[index];
  };

  return {
    id,
    type,
    get title() {
      return title;
    },
    get description() {
      return description;
    },
    get todoList() {
      return todoList;
    },
    get isBookmarked() {
      return isBookmarked;
    },
    addTodo,
    removeTodoId,
    setTitle,
    setDescription,
    setBookmarked,
    getTodoId,
  };
};

// Set Project static counter for id
Project.counter = 1;
Project.getId = function () {
  return Project.counter++;
};

export default Project;
