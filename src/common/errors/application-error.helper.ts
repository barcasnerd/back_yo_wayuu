import {CustomError, CustomErrorLevel, StatusErrorCode} from "./custom-error.helper";

export class ApplicationError extends CustomError{
    constructor(message: string, errorCode: number, statusCode: StatusErrorCode, statusMessage?: string) {
        super(CustomErrorLevel.APPLICATION, message, errorCode, statusCode, statusMessage);
    }
}
