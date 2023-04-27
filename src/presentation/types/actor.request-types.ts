import {ActorEnum} from "../../entities/models/actor/actor.model.entity";
    
export type ActorRequestCreateInput = {
    name: string;
    isActive: boolean;
    status?: ActorEnum;
}

export type ActorRequestUpdateInput = {
    name?: string;
    isActive?: boolean;
    status?: ActorEnum;
}

export type ActorRequestSearchInput = {
    name?: string;
    isActive?: boolean;
    id?: number;
    limit?: number;
    skip?: number;
    status?: ActorEnum;
}

export type ActorGeneralParams = {
    id: number;
}