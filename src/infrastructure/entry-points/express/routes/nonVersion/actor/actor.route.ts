import { Router } from 'express';
import { routeAdapter } from '../../../adapters/route-adapter';
import { createActorControllerFactory } from '../../../../../../main/factories/controllers/actor.controller.factory';


export const actorRouter = () => {
    const router = Router();
    const actorController = createActorControllerFactory();
    
    router.
        route('/')
        .post(routeAdapter(actorController.create))
        .get(routeAdapter(actorController.search));
    
    router.
        route('/:id')
        .get(routeAdapter(actorController.getById))
        .patch(routeAdapter(actorController.update))
        .delete(routeAdapter(actorController.delete));
    
    return router;
}