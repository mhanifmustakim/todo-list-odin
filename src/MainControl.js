import pubsub from 'pubsub.js';
import { createProjectHeader } from './MainView.js';

const MainControl = (function () {
    const updateMain = (project) => {
        const main = document.querySelector("#main");
        main.innerHTML = "";
        main.appendChild(createProjectHeader(project));
    }

    return {
        updateMain
    }
})();

export default MainControl