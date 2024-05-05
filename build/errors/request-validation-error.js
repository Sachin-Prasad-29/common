"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestValidationError = void 0;
const custom_error_1 = require("./custom-error");
class RequestValidationError extends custom_error_1.CustomError {
    // errors: ValidationError[];
    constructor(errors) {
        // this.errors = this.errors;
        super('Invalid request Parameters');
        this.errors = errors;
        this.statusCode = 400;
        // only because we are extending a build in class
        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }
    serializeErrors() {
        return this.errors.map((err) => {
            if (err.type === 'field') {
                return { message: err.msg, field: err.path };
            }
            return { message: err.msg };
        });
    }
}
exports.RequestValidationError = RequestValidationError;
