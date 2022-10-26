import "./EventAggregator";
import Memory from "./Memory";
import PageView from "./PageView";
import Project from "./Project";
import Todo from "./Todo";
import "./style.css";

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

PageView.init();
