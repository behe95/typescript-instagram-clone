"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateNumber = exports.validateEmail = void 0;
function validateEmail(email) {
    // eslint-disable-next-line
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
exports.validateEmail = validateEmail;
function validateNumber(number) {
    return (/^\d+$/).test(number);
}
exports.validateNumber = validateNumber;
