
export type ITransaction = unknown;  
    
export interface SearchResult<T> {
result: T;
pagination: {
     totalItems: number;
     itemsPerPage: number;
     totalPages: number;
     currentPage: number;
   };
}
export enum InputType {
    CREATE,
    UPDATE,
    SEARCH,
    DELETE,
    ACTION
}