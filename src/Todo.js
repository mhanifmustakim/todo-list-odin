const Todo = function (title) {
    const type = "Todo";
    const id = Todo.getId();
    let description, dueDate, priority;
    let isDone = false;

    const toggleDone = () => {
        isDone = isDone ? false : true;
    }


    return {
        title,
        description,
        dueDate,
        priority,
        id,
        type,
        isDone,
        toggleDone
    }
}

// Initialize static count for Todo
Todo.count = 1;
Todo.getId = function () {
    return Todo.count++;
}

export default Todo