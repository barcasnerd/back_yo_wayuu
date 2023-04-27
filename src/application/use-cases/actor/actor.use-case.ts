import { IActorUseCase } from '../../../entities/use-cases/actor/actor.use-case.entity';
import { Actor } from '../../../entities/models/actor/actor.model.entity';
import {InputType, ITransaction, SearchResult} from '../../../entities/common/common';
import { IActorRepository } from '../../ports/repositories/actor/actor.repository.port';
import {ActorCreateInput, ActorSearchInput, ActorUpdateInput, ActorDeleteInput} from "../../../entities/schemas/types/actor";
import {ValidationResult} from "joi";
import {
    ActorCreateInputSchema, ActorDeleteInputSchema,  ActorSearchInputSchema,
     ActorUpdateInputSchema
} from "../../../entities/schemas/definitions/actor/actor.schema.entity";

export class ActorUseCase implements IActorUseCase {

    constructor(
        private readonly actorRepository: IActorRepository,
    ){}
  
    async create(input: ActorCreateInput, transactionManager?: ITransaction): Promise<Actor> {
        this.validateInput(input, InputType.CREATE);
        let actor: Actor = <Actor>{};
        const operationTransaction = async (manager: ITransaction) => {
            actor = await this.actorRepository.create(input, manager);
        }
        if(transactionManager) {
            await operationTransaction(transactionManager);
        }else {
            await this.actorRepository.transaction(operationTransaction);
        }
        return actor;
    }

    async getById(id: number, transactionManager?: ITransaction): Promise<Actor | undefined> {
        return await this.actorRepository.getById(id, transactionManager);
    }
  
    async search(input: ActorSearchInput, transactionManager?: ITransaction): Promise<SearchResult<Actor[]>>{
        this.validateInput(input, InputType.SEARCH);
        return await this.actorRepository.search(input, transactionManager);
    }

    async update(input: ActorUpdateInput, transactionManager?: ITransaction): Promise<Actor> {
        this.validateInput(input, InputType.UPDATE);
        let actor: Actor = <Actor>{};
        const operationTransaction = async (manager: ITransaction) => {
            actor = await this.actorRepository.update(input, manager);
        }
        if(transactionManager) {
            await operationTransaction(transactionManager);
        }else {
            await this.actorRepository.transaction(operationTransaction);
        }
        return actor
    }

    async delete(input: ActorDeleteInput, transactionManager?: ITransaction): Promise<void> {
        this.validateInput(input, InputType.DELETE);
        const operationTransaction = async (manager: ITransaction) => {
            await this.actorRepository.delete(input.searchBy.id, manager); 
        }
        if(transactionManager) {
            await operationTransaction(transactionManager);
        }else {
            await this.actorRepository.transaction(operationTransaction);
        }   
    }
  
    validateInput(input: any, type: InputType){
        let result: ValidationResult | undefined;
        switch (type) {
            case InputType.CREATE:
                result = ActorCreateInputSchema.validate(input);
                break;
            case InputType.UPDATE:
                result = ActorUpdateInputSchema.validate(input);
                break;
            case InputType.SEARCH:
                result = ActorSearchInputSchema.validate(input);
                break;
            case InputType.DELETE:
                result = ActorDeleteInputSchema.validate(input);
                break;
            default:
                throw new Error();
            }
            if(result.error){
                throw new Error(result.error.message);
            }
        }
    }