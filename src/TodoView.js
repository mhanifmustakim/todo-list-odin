import TodoControl from "./TodoControl.js";
import { displayDelete } from "./Utils.js";

const createTitle = (todo) => {
    const title = document.createElement("header");
    title.classList.add("todo-title");
    title.textContent = todo.title;

    return title
}

const createDueDate = (todo) => {
    const dueDate = document.createElement("p");
    dueDate.classList.add("todo-dueDate");
    if (todo.dueDate) dueDate.textContent = todo.dueDate;
    else dueDate.textContent = "Add a due date";

    return dueDate
}

const createCheckbox = (todo) => {
    const isDone = document.createElement("input");
    isDone.classList.add("todo-checkbox");
    isDone.type = "checkbox";
    isDone.checked = todo.isDone;
    isDone.addEventListener(
        "click",
        TodoControl.toggleDone.bind(window, todo)
        )

    return isDone
}

const createDescription = (todo) => {
    const desc = document.createElement("div");
    let prompt;
    
    desc.classList.add("todo-desc");
    desc.classList.add("display-none");
    if (todo.description){
        const todoDesc = document.createElement("p");
        todoDesc.textContent = todo.description;
        desc.appendChild(todoDesc);

        prompt = document.createElement("span");
        prompt.classList.add("float-right");
        prompt.textContent = "Edit description ";
    } else {
        prompt = document.createElement("p");
        prompt.textContent = "Add description";
    };

    prompt.classList.add("text-fade");
    desc.appendChild(prompt);
    return desc
}

const createTodo = (todo) => {
    const node = document.createElement("div");
    node.classList.add("todo");

    const title = createTitle(todo);
    const dueDate = createDueDate(todo);
    const isDone = createCheckbox(todo);
    const description = createDescription(todo);
    title.addEventListener("click", () => description.classList.toggle("display-none"));

    node.appendChild(title);
    node.appendChild(dueDate);
    node.appendChild(isDone);
    node.appendChild(description);
    return node
}

export {createTodo}