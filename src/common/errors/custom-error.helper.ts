 export class CustomError extends Error{

    private readonly _errorCode: number;
    private readonly _statusCode: number;
    private readonly _statusMessage?: string;
    private readonly _rawErrorMessage: string;
    private readonly _level: CustomErrorLevel;

    constructor(level: CustomErrorLevel, message: string, errorCode: number, statusCode: StatusErrorCode, statusMessage?: string) {
        super(`[ERROR:${level}] [${new Date().toJSON()}] ${message}`);
        this._level = level;
        this._rawErrorMessage = message;
        this._errorCode = errorCode;
        this._statusCode = statusCode;
        this._statusMessage = statusMessage;
    }

    get errorCode(): number {
        return this._errorCode;
    }
    get statusCode(): number{
        return this._statusCode;
    }
    get statusMessage(): string | undefined{
        return this._statusMessage;
    }
    get rawErrorMessage(): string{
        return this._rawErrorMessage;
    }
    get level(): CustomErrorLevel {
        return this._level;
    }
}

export enum CustomErrorLevel {
    APPLICATION = "ApplicationLevel",
    DATABASE = "DatabaseLevel"
}

export enum StatusErrorCode{
    BadRequest = 400,
    Unauthorized = 401,
    Forbidden = 403,
    NotFound= 404,
    MethodNotAllowed = 405,
    NotAcceptable = 406,
    Conflict = 409,
    UnsupportedMediaType = 415,
    UnprocessableEntity = 422,
    InternalServerError = 500,
    NotImplemented = 501,
    ServiceUnavailable = 503
}
