import pubsub from 'pubsub.js';
import NavControl from './NavControl.js';
import Memory from './Memory.js';
import MainControl from './MainControl.js';

const EventAggregator = (function () {
    const updateNavToken = pubsub.subscribe(
        "ProjectAdded",
        NavControl.updateNavSection.bind(NavControl, Memory));

    const deleteNavToken = pubsub.subscribe(
        "ProjectDeleted",
        NavControl.updateNavSection.bind(NavControl, Memory)
    )

    const toggleBookmarkedToken = pubsub.subscribe(
        "ToggleBookmarked",
        NavControl.updateNavSection.bind(NavControl, Memory)
    )

    const setActiveProjectToken = pubsub.subscribe(
        "SetActiveProject",
        (id) => MainControl.updateMain(Memory.getProjectId(id))
    )

    const addProjectDescToken = pubsub.subscribe(
        "AddProjectDesc",
        (id, desc) => {
            const project = Memory.getProjectId(id);
            project.setDescription(desc);
            MainControl.updateMain(project);
        }
    )

})()

export default EventAggregator