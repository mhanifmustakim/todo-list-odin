import TodoControl from "./TodoControl.js";

const createTodo = (todo) => {
    const node = document.createElement("div");
    node.classList.add("todo");

    const title = document.createElement("header");
    title.classList.add("todo-title");
    title.textContent = todo.title;

    const dueDate = document.createElement("p");
    dueDate.classList.add("todo-dueDate");
    if (todo.dueDate) dueDate.textContent = todo.dueDate;
    else dueDate.textContent = "Add a due date";

    const isDone = document.createElement("input");
    isDone.classList.add("todo-checkbox");
    isDone.type = "checkbox";
    isDone.checked = todo.isDone;
    isDone.addEventListener(
        "click",
        TodoControl.toggleDone.bind(window, todo)
        )

    node.appendChild(title);
    node.appendChild(dueDate);
    node.appendChild(isDone);
    return node
}

export {createTodo}