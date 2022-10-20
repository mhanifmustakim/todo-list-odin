import pubsub from 'pubsub.js';
import NavControl from './NavControl.js';
import Memory from './Memory.js';

const PageControl = (function () {
    const updateNavToken = pubsub.subscribe(
        "ProjectAdded",
        NavControl.updateNavSection.bind(NavControl, Memory));

    const deleteNavToken = pubsub.subscribe(
        "ProjectDeleted",
        NavControl.updateNavSection.bind(NavControl, Memory)
    )

})()

export default PageControl