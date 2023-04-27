import {IRepository} from "../../../../application/ports/repositories/repository.port";
import {Connection, EntityManager} from "typeorm";

export class GeneralRepository implements IRepository {

    private dbConnection: Connection;
    constructor(connection: Connection) {
        this.dbConnection = connection;
    }

    async transaction<U>(transaction: (manager: EntityManager) => Promise<U>): Promise<U> {
        return this.dbConnection.transaction(async (entityManager)=>{
            return await transaction(entityManager);
        });
    }

}

export type QueryConstructorParameters = {
    condition: string,
    params: { [key: string]: BasicQueryType | BasicQueryType[] }
}
export type BasicQueryType = string | number;
