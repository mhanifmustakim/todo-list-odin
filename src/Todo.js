const Todo = function (title) {
    const type = "Todo";
    const id = Todo.getId();
    let description, dueDate, priority;
    let isDone = false;

    const toggleDone = () => {
        isDone = isDone ? false : true;
    }

    const setTitle = (newTitle) => {
        title = newTitle;
    }

    const setDescription = (desc) => {
        description = desc;
    }

    const setDueDate = (date) => {
        dueDate = date;
    }

    const setPriority = (prio) => {
        priority = prio
    }

    return {
        title,
        description,
        dueDate,
        priority,
        id,
        type,
        isDone,
        toggleDone,
        setTitle,
        setDescription,
        setDueDate,
        setPriority
    }
}

// Initialize static count for Todo
Todo.count = 1;
Todo.getId = function () {
    return Todo.count++;
}

export default Todo