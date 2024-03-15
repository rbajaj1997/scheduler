import Event from "./event";

class Store {
    constructor() {
        this._events = [];
        this.getLocalStorage();
    }

    get eventList() {
        return this._events;
    }

    getLocalStorage() {
        const eventList = window.localStorage.getItem("events");
        if (eventList) {
            this._events = JSON.parse(eventList);
        }
    }

    setLocalStorage() {
        window.localStorage.setItem("events", JSON.stringify(this._events));
    }

    addNewEvent({ title, time }) {
        const newEvent = new Event(title, time);
        this._events.push(newEvent);
        this.setLocalStorage();
        return newEvent;
    }
}

export default Store;
