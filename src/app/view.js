import Calendar from "./calendar";

class View {
    constructor() {
        this.calendar = new Calendar();
        this.createEventBtn = document.querySelector(".create-event");
        this.newEventFormModal = document.querySelector(".new-event-modal");
        this.newEventForm = document.getElementById("new-event-form");
        this.formCloseBtn = document.querySelector(".close--btn");
        this.body = document.body;

        this.initEventHanlders();
    }

    toggleClassOnEventHandling() {
        this.newEventFormModal.classList.toggle("hidden");
        this.body.classList.toggle("overlay");
    }

    initEventHanlders() {
        this.createEventBtn.addEventListener("click", (e) => {
            this.toggleClassOnEventHandling();
        });

        this.formCloseBtn.addEventListener("click", (e) => {
            e.preventDefault();
            this.newEventForm.reset();
            this.toggleClassOnEventHandling();
        });
    }

    createEventView(event) {
        this.calendar.renderEvent(event);
    }

    handleNewEventCreation(storeCb) {
        this.newEventForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const event = storeCb({
                title: e.target.title.value,
                time: e.target.date.value,
            });
            e.target.reset();
            this.toggleClassOnEventHandling();
            this.calendar.renderEvent(event);
        });
    }
}

export default View;
