import { createMain } from './Main.js';
import { createNav } from './NavView.js';
import NavControl from './NavControl.js';
import Memory from './Memory.js';

const PageView = (function () {
    const pageMain = document.querySelector("#page-main");

    const init = () => {
        pageMain.appendChild(createNav(Memory));
        pageMain.appendChild(createMain());
        NavControl.updateActiveNav();
    }

    return {
        init
    }
})()

export default PageView