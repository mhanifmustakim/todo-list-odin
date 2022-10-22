const removeById = (list, objectId) => {
    const index = list.findIndex((obj) => obj.id === objectId);
    if (index !== -1) {
        return list.splice(index, 1);
    } else {
        console.error("Trying to delete an item that does not exist!");
    }
}

const displayDelete = (displayNode, deleteNode) => {
    if (deleteNode.nodeName === "FORM") {
        [...deleteNode.querySelectorAll("textarea"), ...deleteNode.querySelectorAll("input")].forEach((input) => {
            input.value = "";
        })
    }

    displayNode.classList.remove("display-none");
    deleteNode.classList.add("display-none");
}

export { removeById, displayDelete }