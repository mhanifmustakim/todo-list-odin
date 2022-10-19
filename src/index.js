import Memory from './Memory.js';
import PageView from './PageView.js';
import Project from './Project.js';
import './style.css';

const homeProject = Project("Home");
Memory.addToProjects(homeProject);
Memory.addToBookmarked(homeProject.id);
Memory.addToProjects(Project("Random Project"));
Memory.addToProjects(Project("Another Project"));

PageView.init();