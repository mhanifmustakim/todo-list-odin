import { removeById } from "./Utils";

const Project = (title) => {
    const id = Project.getId();
    const type = "Project";
    let todoList = [];
    let description;

    const addTodo = (todo) => {
        todoList.push(todo);
    }

    const removeTodoWithId = (todoId) => {
        removeById(todoList, todoId)
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