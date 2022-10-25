import pubsub from "pubsub.js";

const TodoControl = (function(){
    const toggleDone = (todo) => {
        pubsub.publish("ToggleIsDoneTodo", [todo])
    }

    return {
        toggleDone
    }
})();

export default TodoControl