import { IActorRepository, ActorDataCreateInput, ActorDataUpdateInput, ActorDataSearchInput } from '../../../../../application/ports/repositories/actor/actor.repository.port';
import { Actor, ActorEnum } from '../../../../../entities/models/actor/actor.model.entity';
import {SearchResult} from '../../../../../entities/common/common';
import {
    Connection,
    EntityManager,
    Repository,
    SelectQueryBuilder,
} from 'typeorm';
import { ActorEntity } from '../../entities/actor/actor.entity';
import { GeneralRepository } from '../general.repository';


export class ActorRepository extends GeneralRepository implements IActorRepository {

    private repository: Repository<ActorEntity>;
  
    constructor(connection: Connection){
        super(connection);
        this.repository = connection.getRepository(ActorEntity);
    }

    async create(input: ActorDataCreateInput , transactionManager?: EntityManager): Promise<Actor> {
        const actor = new ActorEntity(input.data.name, input.data.isActive);
        if(input.data.status) {
            actor.status = input.data.status as ActorEnum;
        }
        if(transactionManager){
            await transactionManager.save(actor);
        }else {
            await this.repository.save(actor);
        }
        return ActorRepository.actorEntityToDomainActor(actor);
    }

    async getById(id: number, transactionManager?: EntityManager): Promise<Actor | undefined> {
        const actor = await this.findBy({searchBy:{id}}, transactionManager);
        if(actor.result.length === 0) {
            return undefined;
        }
        return ActorRepository.actorEntityToDomainActor(actor.result[0]);
    }
  
    async search(input: ActorDataSearchInput, transactionManager?: EntityManager): Promise<SearchResult<Actor[]>>{
        const result = await this.findBy(input, transactionManager);
        return {
            result: result.result.map(ActorRepository.actorEntityToDomainActor),
            pagination: result.pagination
        }
    }
  
    private async findBy(input: ActorDataSearchInput, transactionManager?: EntityManager): Promise<SearchResult<ActorEntity[]>> {
        const query = await this.generateFilterOptions(input, transactionManager);
        const result = await query.result.getMany();
        return {
            result,
            pagination: query.pagination
        }
    }

    async update(input: ActorDataUpdateInput, transactionManager?: EntityManager): Promise<Actor> {
        const actor = (await this.findBy({searchBy:{id: input.searchBy.id}}, transactionManager)).result[0];
        if(!actor) {
            throw new Error();
        }
        if(input.data.name !== undefined) {
            actor.name = input.data.name;
        }
        if(input.data.isActive !== undefined) {
            actor.isActive = input.data.isActive;
        }
        if(transactionManager) {
            await transactionManager.save(actor);
        }else {
            await this.repository.save(actor);
        }
        return ActorRepository.actorEntityToDomainActor(actor);
    }

    async delete(id: number, transactionManager?: EntityManager): Promise<void> {
        const actor = (await this.findBy({searchBy:{id}}, transactionManager)).result[0];
        if(!actor) {
            throw new Error();
        }
        if(transactionManager) {
            await transactionManager.softRemove(actor);
        }else {
            await this.repository.softRemove(actor);
        }
    }
  
    async generateFilterOptions(input: ActorDataSearchInput, transactionManager?: EntityManager): Promise<SearchResult<SelectQueryBuilder<ActorEntity>>> {
  
        let sq = transactionManager?.createQueryBuilder(ActorEntity, 'actor') || this.repository.createQueryBuilder('actor');
        const query: {where: Array<string>, params: {[att: string]: any}} = {params: {}, where: []};
        const output: SearchResult<SelectQueryBuilder<ActorEntity>> = {
            result: sq,
            pagination: {
                itemsPerPage: 0,
                totalItems: 0,
                totalPages: 0,
                currentPage: 1,
            },
        }
     
        if(input.searchBy.id !== undefined) {
            query.where.push('actor.id = :id');
            query.params['id'] = input.searchBy.id;
        }
     
        if(input.searchBy.isActive !== undefined) {
            query.where.push('actor.isActive = :isActive');
            query.params['isActive'] = input.searchBy.isActive;
        }
     
        if(input.searchBy.name !== undefined) {
            query.where.push('actor.name = :name');
            query.params['name'] = input.searchBy.name;
        }
     
        if(query.where.length > 0){
            sq = sq.where(query.where.join(" and "), query.params);
        }
     
        if(input.options?.limit && input.options.limit > 30) {
            throw new Error('max limit reached, cannot fetch more than 30 objects');
        }
  
        let totalItems: number = await output.result.getCount();
        output.pagination.totalItems = totalItems;
        output.pagination.totalPages = Math.ceil(totalItems/ (input.options?.limit || 10));
        output.pagination.currentPage = Math.ceil((input.options?.skip || 0) / (input.options?.limit || 10)) + 1;
        output.pagination.itemsPerPage = (input.options?.limit || 10);
        output.result = sq.take(input.options?.limit || 10);
        output.result = sq.skip(input.options?.skip || 0);
        return output;
    }
  
    static actorEntityToDomainActor (actorEntity: ActorEntity): Actor {
        return {
            id: actorEntity.id,
            name: actorEntity.name,
            isActive: actorEntity.isActive,
            createdAt: actorEntity.createdAt,
            updatedAt: actorEntity.updatedAt,
        }       
    }
}