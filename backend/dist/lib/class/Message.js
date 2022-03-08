"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Message {
    constructor(title = "", message = "", email = "") {
        this.title = title;
        this.message = message;
        this.email = email;
    }
    get getTitle() {
        return this.title;
    }
    get getEmail() {
        return this.email;
    }
    get getMessage() {
        return this.message;
    }
}
exports.default = Message;
