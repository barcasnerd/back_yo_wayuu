import { getDbConnection } from '../../../infrastructure/driven-adapters/typeorm/config/db.config';
import { ActorUseCase } from '../../../application/use-cases/actor/actor.use-case';
import {
    ActorRepository
} from "../../../infrastructure/driven-adapters/typeorm/repositories/actor/actor.repository";
    
let actorUseCase: ActorUseCase;
    
export function createActorUseCaseFactory() {
    if(!actorUseCase) {
        actorUseCase = new ActorUseCase(new ActorRepository(getDbConnection()));
    }
    return actorUseCase;   
}