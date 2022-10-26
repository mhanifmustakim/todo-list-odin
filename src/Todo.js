const Todo = function (title) {
  const type = "Todo";
  const id = Todo.getId();
  let description, dueDate, priority;
  let isDone = false;

  const toggleDone = () => {
    isDone = isDone ? false : true;
  };

  const setTitle = (newTitle) => {
    title = newTitle;
  };

  const setDescription = (desc) => {
    description = desc;
  };

  const setDueDate = (date) => {
    dueDate = date;
  };

  const setPriority = (prio) => {
    priority = prio;
  };

  return {
    get title() {
      return title;
    },
    get description() {
      return description;
    },
    get dueDate() {
      return dueDate;
    },
    get priority() {
      return priority;
    },
    get isDone() {
      return isDone;
    },
    id,
    type,
    toggleDone,
    setTitle,
    setDescription,
    setDueDate,
    setPriority,
  };
};

// Initialize static count for Todo
Todo.count = 1;
Todo.getId = function () {
  return Todo.count++;
};

export default Todo;
