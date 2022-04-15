"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Start = void 0;
const test_1 = require("./test");
/* eslint-disable no-console */
class Start {
    async start() {
        (0, test_1.test)();
        console.log('Start Template!!');
    }
}
exports.Start = Start;
const start = new Start();
start.start();
