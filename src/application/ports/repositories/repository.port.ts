export interface IRepository{
    transaction<U>( transaction: <T>(manager: T) => Promise<U> ): Promise<U>;
}
