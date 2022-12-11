import pubsub from "pubsub.js";

const TodoControl = (function () {
  const toggleDone = (todo) => {
    pubsub.publish("ToggleIsDoneTodo", [todo]);
  };

  const submitDescription = (event) => {
    event.preventDefault();
    const todoId = event.target.getAttribute("data-id");
    const descValue = document.querySelector(
      `[data-id="${todoId}"]>[name="todo-description"]`
    ).value;
    pubsub.publish("ChangeTodoDescription", [parseInt(todoId), descValue]);
  };

  const submitDueDate = (event) => {
    event.preventDefault();
    const todoId = event.target.getAttribute("data-id");
    let date = null;
    event.target.childNodes.forEach((element) => {
      if (element.type === "date" && element.name === "todo-dueDate") {
        date = element.value;
      }
    });
    pubsub.publish("ChangeTodoDate", [parseInt(todoId), date]);
  };

  return {
    toggleDone,
    submitDescription,
    submitDueDate,
  };
})();

export default TodoControl;
