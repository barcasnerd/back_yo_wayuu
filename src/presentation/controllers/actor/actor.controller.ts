import { RequestModel } from '../../../application/ports/requests/request.port';
import { ResponseModel, ResponseHandler } from '../../../application/ports/responses/response.port';
import { SearchResult } from "../../../entities/common/common";
import { KeycloakConnectExtended } from '@smartsoft/auth-connector-admin';
import { ActorUseCase } from '../../../application/use-cases/actor/actor.use-case';
import { Actor } from '../../../entities/models/actor/actor.model.entity';
import {
    ActorGeneralParams,
    ActorRequestCreateInput, ActorRequestSearchInput,
    ActorRequestUpdateInput
} from "../../types/actor.request-types";
import {
    ActorCreateInput,
    ActorDeleteInput,
    ActorSearchInput,
    ActorUpdateInput
} from "../../../entities/schemas/types/actor";
import {ControllerAction, IController} from "../../../application/ports/controllers/controller.port";

export class ActorController implements IController {
  
    public static instance: ActorController;
  
    [name: string]: ControllerAction | unknown;
  
    constructor(
        private readonly actorUseCase: ActorUseCase,
        private readonly responseHandler: ResponseHandler,
        private readonly keycloakAdminApi: KeycloakConnectExtended,
    ){
        ActorController.instance = this;
    }
  
    async create(request: RequestModel<ActorRequestCreateInput>): Promise<ResponseModel<Actor>> {
        try {
            const grant = await ActorController.instance.keycloakAdminApi.validateAccess(
                request,
                { role: 'actor_w' }
            );
            if(!request.body || Object.keys(request.body).length === 0) {
                throw new Error('no body was provided');
            } 
            const input: ActorCreateInput = {
                data: {
                    name: request.body.name,
                    isActive: request.body.isActive
                },
                auditData: {}
            }
            const actor = await ActorController.instance.actorUseCase.create(input);
            return await ActorController.instance.responseHandler.response(
                'success',
                201,
                actor
            );
        } catch(error) {
            return ActorController.instance.errorHandler(error, ActorController.instance.responseHandler);
        }
    }

    async update(request: RequestModel<ActorRequestUpdateInput, ActorGeneralParams>): Promise<ResponseModel<Actor>> {
        try {
            const grant = await ActorController.instance.keycloakAdminApi.validateAccess(
                request,
                { role: 'actor_w' }
            );
            if(request.params?.id === undefined){
                throw new Error('no id was provided');
            }
            if(!request.body || Object.keys(request.body).length === 0) {
                throw new Error('no body was provided');
            } 
            const input: ActorUpdateInput = {
                searchBy:{
                    id: request.params.id
                },
                data: {
                    name: request.body?.name,
                    isActive: request.body?.isActive
                },
                auditData: {}
            }
            const actor = await ActorController.instance.actorUseCase.update(input);
            return await ActorController.instance.responseHandler.response(
                'success',
                200,
                actor
            );
        } catch(error) {
            return ActorController.instance.errorHandler(error, ActorController.instance.responseHandler);
        }
    }

    async getById(request: RequestModel<ActorGeneralParams>): Promise<ResponseModel<Actor | undefined>> {
        try {
            const grant = await ActorController.instance.keycloakAdminApi.validateAccess(
                request,
                { role: 'actor_r' }
            );
            if(request.params?.id === undefined){
                throw new Error('no id was provided');
            }
            const actor = await ActorController.instance.actorUseCase.getById(request.params.id); 
            return await ActorController.instance.responseHandler.response(
                'success',
                200,
                actor
            );
        } catch(error) {
            return ActorController.instance.errorHandler(error, ActorController.instance.responseHandler);
        }
    }
  
    async search(request: RequestModel<unknown, unknown, ActorRequestSearchInput>): Promise<ResponseModel<SearchResult<Actor[]>>>{
        try {
            const grant = await ActorController.instance.keycloakAdminApi.validateAccess(
                request,
                { role: 'actor_r' }
            );
            const input: ActorSearchInput = {
                searchBy: {
                    id: request.query?.id,
                    name: request.query?.name,
                    isActive: request.query?.isActive,
                    status: request.query?.status
                },
                options: {
                    limit: request.query?.limit,
                    skip: request.query?.skip
                },
                auditData: {}
            }
            const actor = await ActorController.instance.actorUseCase.search(input); 
            return await ActorController.instance.responseHandler.response(
                'success',
                200,
                actor
            );
        } catch(error) {
            return ActorController.instance.errorHandler(error, ActorController.instance.responseHandler);
        }
    }

    async delete(request: RequestModel<ActorGeneralParams>): Promise<ResponseModel<void>> {
        try {
            const grant = await ActorController.instance.keycloakAdminApi.validateAccess(
                request,
                { role: 'actor_w' }
            );
            if(request.params?.id === undefined){
                throw new Error('no id was provided');
             }
            const input: ActorDeleteInput = {
                searchBy: {id: request.params.id},
                auditData: {}
            }
            const actor = await ActorController.instance.actorUseCase.delete(input); 
            return await ActorController.instance.responseHandler.response(
                'success',
                204,
                actor   
            );
        } catch(error) {
            return ActorController.instance.errorHandler(error, ActorController.instance.responseHandler);
        }
    }
  
    private async errorHandler (err: any, responseHandler: ResponseHandler): Promise<ResponseModel<any>> {
        console.log("[ErrorHandler]", err);
        return responseHandler.response('error', err._status || err._statusCode || 500, err._rawErrorMessage || err.message);
    }
}