/**
 * throws exception if body not defined
 * @param request
 */
import {ApplicationError} from "../errors/application-error.helper";
import {RequestModel} from "@smartsoft/backend-utils/dist/ports/requests/request.port";
import {StatusErrorCode} from "../errors/custom-error.helper";
import {KnownApplicationErrors} from "@smartsoft/backend-utils/dist/entities/errors/errors.entity";


export const validateBody = <Body, Params, Query, Headers, File, Files>(request: RequestModel<Body, Params, Query, Headers, File, Files>): Omit<RequestModel<Body, Params, Query, Headers, File, Files>, "body"> & { body: Body } => {
    if (!request.body || Object.keys(request.body).length === 0) {
        throw new ApplicationError("no body was provided", KnownApplicationErrors.EMPTY_BODY, StatusErrorCode.BadRequest);
    }
    return {
        ...request,
        body: request.body!
    }
}
