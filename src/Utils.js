const removeById = (list, objectId) => {
  const index = list.findIndex((obj) => obj.id === objectId);
  return list.splice(index, 1);
};

const displayDelete = (displayNode, deleteNode) => {
  displayNode.classList.remove("display-none");
  deleteNode.classList.add("display-none");
};

export { removeById, displayDelete };
