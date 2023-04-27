import { Actor } from '../../models/actor/actor.model.entity';
import {SearchResult, ITransaction} from "../../common/common";
import {ActorCreateInput, ActorSearchInput, ActorUpdateInput, ActorDeleteInput} from "../../schemas/types/actor";

export interface IActorUseCase {
  create(input: ActorCreateInput, transactionManager?: ITransaction): Promise<Actor>;
  getById(id: number, transactionManager?: ITransaction): Promise<Actor | undefined>;
  search(input: ActorSearchInput, transactionManager?: ITransaction): Promise<SearchResult<Actor[]>>
  update(input: ActorUpdateInput, transactionManager?: ITransaction): Promise<Actor>;
  delete(input: ActorDeleteInput, transactionManager?: ITransaction): Promise<void>;
}