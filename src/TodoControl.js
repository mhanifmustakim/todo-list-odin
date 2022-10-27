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

  return {
    toggleDone,
    submitDescription,
  };
})();

export default TodoControl;
