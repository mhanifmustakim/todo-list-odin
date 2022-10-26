const Todo = function (_title) {
  const type = "Todo";
  const id = Todo.getId();
  let title = _title;
  let description;
  let dueDate;
  let priority;
  let isDone = false;

  const toggleDone = () => {
    isDone = !isDone;
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
  const current = Todo.count;
  Todo.count += 1;
  return current;
};

export default Todo;
