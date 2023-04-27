import {ControllerAction} from '../../../../application/ports/controllers/controller.port';
import {Request, Response, NextFunction} from 'express';
import {CustomErrorLevel} from "../../../../common/errors/custom-error.helper";

export function routeAdapter (action: ControllerAction){
    return async (req: Request, res: Response, next: NextFunction)=>{
        try {
            const response = await action({
                body: req.body,
                headers: req.headers,
                params: req.params,
                query: req.query,
                file: req.file,
                files: req.files
            });
            res.status(response.statusCode);
            return res.json({
                status: response.status,
                data: response.data
            });
        }catch (err: any){
            console.log('[ERROR]', err);
            if("_errorCode" in err){
                return res.status(err._statusCode).json({
                    status: err._statusMessage || err._statusCode + '',
                    errorCode: err._errorCode,
                    error: err._level !== CustomErrorLevel.APPLICATION ? undefined : err._rawErrorMessage
                });
            }else{
                // TODO: Remove this when fully migrated to Custom Errors
                return res.status(422).json({
                    status: "error",
                    error: err.message
                });
                /*
                return res.status(500).json({
                    status: "Server Error"
                });*/
            }
        }
    };
}

export function routeAdapterDownload(action: ControllerAction) {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const response = await action({
                body: req.body,
                headers: req.headers,
                params: req.params,
                query: req.query,
                file: req.file
            });
            res.status(response.statusCode);
            if (response.statusCode === 200) {
                return res.download(
                    response.data
                );
            } else {
                return res.json({
                    status: response.status,
                    data: response.data
                });
            }
        } catch (err) {
            console.log('[ERROR]', err);
            res.status(500);
            return res.json({
                status: 'error',
                error: err
            });
        }
    };
}
