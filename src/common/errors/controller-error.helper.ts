import {ResponseHandler, ResponseModel} from "../../application/ports/responses/response.port";

export const errorHandler = (err: any, responseHandler: ResponseHandler): Promise<ResponseModel<any>> => {
    console.log("[ErrorHandler]", err);
    return responseHandler.response('error', err._status || err._statusCode || 500, err._rawErrorMessage || err.message);
}
