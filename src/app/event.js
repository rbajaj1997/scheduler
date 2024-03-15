class Event {
    constructor(title, time) {
        this.time = time;
        this.title = title;
        this.id = crypto.randomUUID();
        this.createdDate = Date.now();
    }
}

export default Event;
