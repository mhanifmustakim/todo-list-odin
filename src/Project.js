import { removeById } from "./Utils";

const Project = (title) => {
    const id = Project.getId();
    const type = "Project";
    let todoList = [];
    let description;

    const addTodo = (todo) => {
        todoList.push(todo);
    }

    const removeTodoId = (todoId) => {
        removeById(todoList, todoId)
    }

    const setTitle = (newTitle) => {
        title = newTitle;
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
        removeTodoId,
        setTitle,
        setDescription
    }
}

// Set Project static counter for id
Project.counter = 1;
Project.getId = function () {
    return Project.counter++
}

export default Project