"use strict";
var Task = (function () {
    function Task(date, title, description, priority, _id) {
        if (date && title && description && priority) {
            this.date = date;
            this.title = title;
            this.description = description;
            this.priority = priority;
        }
        else if (date && title && description && priority && _id) {
            this.date = date;
            this.title = title;
            this.description = description;
            this.priority = priority;
            this._id = _id;
        }
        else {
            this.date = "";
            this.title = "";
            this.description = "";
            this.priority = "";
            this._id = "";
        }
    }
    return Task;
}());
exports.Task = Task;
//# sourceMappingURL=task.js.map