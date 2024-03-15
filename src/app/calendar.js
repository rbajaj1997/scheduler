const DAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

function getColumnId(date) {
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
}

class Calendar {
    constructor() {
        this.today = new Date();
        this.calendarContainer = document.querySelector(".calendar");
        this.dayTemplate = document.getElementById("day-column");
        this.eventTemplate = document.getElementById("event");

        this.renderNext7Days(this.today);
    }

    renderNext7Days(startingDate) {
        const calendarFragment = document.createDocumentFragment();
        calendarFragment.appendChild(this.renderDay(startingDate));

        let nextDate = new Date();
        for (let i = 1; i < 7; i++) {
            nextDate.setDate(startingDate.getDate() + i);
            calendarFragment.appendChild(this.renderDay(nextDate));
        }

        this.calendarContainer.append(calendarFragment);
    }

    renderDay(date) {
        const node = this.dayTemplate.content.cloneNode(true);
        node.querySelector(".calenday--day_name").textContent =
            DAYS[date.getDay()].slice(0, 4) +
            " " +
            date.getDate() +
            " " +
            MONTHS[date.getMonth()];
        node.querySelector(".calendar--column").id = getColumnId(date);
        return node;
    }

    renderEvent(event) {
        const eventNode = this.eventTemplate.content.cloneNode(true);
        eventNode.querySelector(".event--time").textContent = new Date(
            event.time
        ).toLocaleString();
        eventNode.querySelector(".event--title").textContent = event.title;

        const eventDate = new Date(event.time);
        const columnId = getColumnId(eventDate);
        const columnNode = document.getElementById(`${columnId}`);

        if (columnNode) {
            columnNode.appendChild(eventNode);
        }
    }
}

export default Calendar;
