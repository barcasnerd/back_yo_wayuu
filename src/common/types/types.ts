export type LocalRecordCache<T> = {
    records?: T[],
    mappedRecords?: {[id: number]: T},
    fetchedAt?: Date;
    ttl?: number;
};