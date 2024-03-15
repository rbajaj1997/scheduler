import "./style.css";

import Store from "./app/store";
import View from "./app/view";

export const loadApp = () => {
    const store = new Store();
    const viewService = new View();

    const eventList = store.eventList;

    eventList.forEach((event) => {
        viewService.createEventView(event);
    });

    viewService.handleNewEventCreation(({ title, time }) => {
        return store.addNewEvent({ title, time });
    });
};

loadApp();
