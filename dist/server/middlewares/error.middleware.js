"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function errorMiddleware(error, request, response, next) {
    var status = error.status || 500;
    var message = error.message || 'Something went wrong';
    // if(status === 401) response.clearCookie('JWT__AUTH__TOKEN')
    response
        .status(status)
        .send({
        message: message,
        status: status
    });
}
exports.default = errorMiddleware;
;
