import * as Joi from 'joi';
import {EnumToJoi} from '../../helpers/enum-to-joi';
import {ActorEnum} from "../../../models/actor/actor.model.entity";


export const ActorCreateInputSchema = Joi.object({
    data: Joi.object({
        name: Joi.string().required(),
        isActive: Joi.boolean().required(),
        status: EnumToJoi({ActorEnum}).optional(),
    }).required(),
    auditData: Joi.object({}).optional()
}).meta({className: 'ActorCreateInput'});

export const ActorUpdateInputSchema = Joi.object({
    searchBy: Joi.object({
        id: Joi.number().required()
    }).required(),
    data: Joi.object({
        name: Joi.string().optional(),
        isActive: Joi.boolean().optional(),
        status: EnumToJoi({ActorEnum}).optional(),
    }).required(),
    auditData: Joi.object({}).optional()
}).meta({className: 'ActorUpdateInput'});

export const ActorSearchInputSchema = Joi.object({
    searchBy: Joi.object({
        id: Joi.number().optional(),
        name: Joi.string().optional(),
        isActive: Joi.boolean().optional(),
        status: EnumToJoi({ActorEnum}).optional(),
    }).required(),
    options: Joi.object({
        limit: Joi.number().optional(),
        skip: Joi.number().optional()
    }).optional(),
    auditData: Joi.object({}).optional()
}).meta({className: 'ActorSearchInput'});

export const ActorDeleteInputSchema = Joi.object({
    searchBy: Joi.object({
        id: Joi.number().required(),
    }).required(),
    auditData: Joi.object({}).optional(),
}).meta({className: 'ActorDeleteInput'});
