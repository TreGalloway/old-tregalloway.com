import { InitialisedList } from '../types-for-lists';
declare type DistributiveOmit<T, K extends keyof T> = T extends any ? Omit<T, K> : never;
declare type UpdateCreateHookArgs = Parameters<Exclude<InitialisedList['hooks']['validateInput'], undefined>>[0];
export declare function validateUpdateCreate({ list, hookArgs, }: {
    list: InitialisedList;
    hookArgs: DistributiveOmit<UpdateCreateHookArgs, 'addValidationError'>;
}): Promise<void>;
declare type DeleteHookArgs = Parameters<Exclude<InitialisedList['hooks']['validateDelete'], undefined>>[0];
export declare function validateDelete({ list, hookArgs, }: {
    list: InitialisedList;
    hookArgs: Omit<DeleteHookArgs, 'addValidationError'>;
}): Promise<void>;
export {};
