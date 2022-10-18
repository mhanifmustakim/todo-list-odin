const Project = (title) => {
    const id = Project.getId();
    const type = "Project";
    let todoList = [];
    let description;

    const addTodo = (todo) => {
        todoList.push(todo);
    }

    const removeTodoWithId = (id) => {
        const index = todoList.findIndex((todo) => todo.id === id);
        if (index !== -1) {
            return todoList.splice(index, 1);
        } else {
            console.error("Trying to delete an item that does not exist");
        }
    }

    const setDescription = (desc) => {
        description = desc;
    }

    return {
        id,
        type,
        title,
        description,
        todoList,
        addTodo,
        removeTodoWithId,
        setDescription
    }
}

// Set Project static counter for id
Project.counter = 1;
Project.getId = function () {
    return Project.counter++
}

export default Project