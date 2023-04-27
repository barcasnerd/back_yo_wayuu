
export interface Actor {
    id: number;
    name?: string;
    isActive?: boolean;
    status?: ActorEnum;
    createdAt: Date;
    updatedAt: Date;
}

export enum ActorEnum {
    OPEN = 'open',
    CLOSE = 'close'
}