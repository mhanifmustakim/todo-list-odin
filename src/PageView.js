import { createMain } from './MainView.js';
import { createNav } from './NavView.js';
import NavControl from './NavControl.js';
import Memory from './Memory.js';
import pubsub from 'pubsub.js';

const PageView = (function () {
    const pageMain = document.querySelector("#page-main");
    const navDropdown = document.querySelector("#nav-dropdown");

    const init = () => {
        navDropdown.addEventListener("click", NavControl.toggleNav);
        pageMain.appendChild(createNav(Memory));
        pageMain.appendChild(createMain(Memory));
        NavControl.updateActiveNav();

        // Always makes the nav appear if window width is >= 650px
        window.addEventListener("resize", () => {
            if (window.innerWidth >= 650) {
                document.querySelector("#nav").classList.remove("display-none");
            }
        });
    }

    return {
        init
    }
})()

export default PageView