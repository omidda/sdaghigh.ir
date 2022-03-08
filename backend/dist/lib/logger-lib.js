"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const logger = (req, res, next) => {
    console.log(`${req.url} : ${req.method}`);
    console.log(`Body: \n ${JSON.stringify(req.body)}}`);
    next();
};
exports.logger = logger;
