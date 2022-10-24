import EventAggregator from './EventAggregator.js';
import Memory from './Memory.js';
import PageView from './PageView.js';
import Project from './Project.js';
import Todo from './Todo.js';
import './style.css';

const homeProject = Project("Home");
homeProject.setDescription("Your personal default project to store your todos.");
homeProject.addTodo(Todo("I'm a todo lol"));
homeProject.addTodo(Todo("Another test todo"));
Memory.addToProjects(homeProject);
Memory.addToBookmarked(homeProject.id);

const testProject = Project("Test Project");
Memory.addToProjects(testProject);

PageView.init();