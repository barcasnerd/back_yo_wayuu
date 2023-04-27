import {GeneralResponseHandler} from "../../../presentation/responses/general-response-handler.adapter";
import { getConnectApiInstance } from '../connectors/keycloak.connect.api.factory';
import { ActorController } from '../../../presentation/controllers/actor/actor.controller';
import { createActorUseCaseFactory } from '../use-cases/actor.use-case.factory';


let actorController: ActorController;

export function createActorControllerFactory() {
    if(!actorController) {
        actorController = new ActorController(
            createActorUseCaseFactory(),
            new GeneralResponseHandler(),
            getConnectApiInstance(),
        )
    }
    return actorController;
}