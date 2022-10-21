import EventAggregator from './EventAggregator.js';
import Memory from './Memory.js';
import PageView from './PageView.js';
import Project from './Project.js';
import './style.css';

const homeProject = Project("Home");
homeProject.setDescription("Your personal default project to store your todos.");
Memory.addToProjects(homeProject);
Memory.addToBookmarked(homeProject.id);

PageView.init();