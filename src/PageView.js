import { createMain } from "./MainView";
import { createNav } from "./NavView";
import NavControl from "./NavControl";
import Memory from "./Memory";
import Project from "./Project";
import Todo from "./Todo";

const PageView = (function () {
  const pageMain = document.querySelector("#page-main");
  const navDropdown = document.querySelector("#nav-dropdown");

  const init = () => {
    if ("projects" in localStorage) {
      Memory.populate(localStorage);
    } else {
      const homeProject = Project("Home");
      const firstTodo = Todo("I'm a todo lol");
      firstTodo.setDescription("Hello, I'm a description");
      homeProject.setDescription(
        "Your personal default project to store your todos."
      );
      homeProject.addTodo(firstTodo);
      homeProject.addTodo(Todo("Another test todo"));
      Memory.addToProjects(homeProject);
      Memory.addToBookmarked(homeProject.id);

      const testProject = Project("Test Project");
      Memory.addToProjects(testProject);
    }

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
  };

  return {
    init,
  };
})();

export default PageView;
