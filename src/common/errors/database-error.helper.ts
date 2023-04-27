import {CustomError, CustomErrorLevel, StatusErrorCode} from "./custom-error.helper";

export class DatabaseError extends CustomError{
    constructor(message: string, errorCode: number, statusCode: StatusErrorCode, statusMessage?: string) {
        super(CustomErrorLevel.DATABASE, message, errorCode, statusCode, statusMessage);
    }
}
