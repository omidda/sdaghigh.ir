"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OperationInfo {
    constructor() {
        this.makeError = () => {
            this.status = "error";
            return this;
        };
        this.makeSuccess = () => {
            this.status = "success";
            return this;
        };
        this.setMessage = (message) => {
            this.message = message;
            return this;
        };
        return this;
    }
}
exports.default = OperationInfo;
module.exports = OperationInfo;
