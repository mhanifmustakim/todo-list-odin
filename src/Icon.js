const Icon = (src) => {
    const icon = document.createElement("img");
    icon.classList.add("icon");
    icon.src = src;

    return icon
}

export default Icon