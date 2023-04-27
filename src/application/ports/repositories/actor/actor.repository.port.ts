import { Actor } from '../../../../entities/models/actor/actor.model.entity';
import { SearchResult, ITransaction } from "../../../../entities/common/common";
import { IRepository } from '../repository.port';
import {ActorCreateInput, ActorSearchInput, ActorUpdateInput} from "../../../../entities/schemas/types/actor";

export type ActorDataCreateInput = ActorCreateInput;
export type ActorDataSearchInput = ActorSearchInput;
export type ActorDataUpdateInput = ActorUpdateInput;

export interface IActorRepository extends IRepository {
  create(input: ActorDataCreateInput, transactionManager?: ITransaction): Promise<Actor>;
  getById(id: number, transactionManager?: ITransaction): Promise<Actor | undefined>;
  search(input: ActorDataSearchInput, transactionManager?: ITransaction): Promise<SearchResult<Actor[]>>;
  update(input: ActorDataUpdateInput, transactionManager?: ITransaction): Promise<Actor>;
  delete(id: number, transactionManager?: ITransaction): Promise<void>;
}