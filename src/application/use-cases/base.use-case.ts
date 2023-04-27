import {IRepository} from "../ports/repositories/repository.port";

export abstract class BaseUseCase {
    transactionWrapper<U>(transactionManager: any, repository: IRepository, operation: (manager: any)=> Promise<U>): Promise<U>{
        if(transactionManager){
            return operation(transactionManager);
        }else{
            return repository.transaction(operation);
        }
    }
}
