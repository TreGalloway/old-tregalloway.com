import { KeystoneContext, BaseItem } from '../../../types';
import { InitialisedList } from '../types-for-lists';
import { IdType } from '../utils';
import { UniqueInputFilter } from '../where-inputs';
export declare class NestedMutationState {
    #private;
    constructor(context: KeystoneContext);
    create(data: Record<string, any>, list: InitialisedList): Promise<{
        id: IdType;
    }>;
    afterOperation(): Promise<void>;
}
export declare function createOne(createInput: {
    data: Record<string, any>;
}, list: InitialisedList, context: KeystoneContext): Promise<BaseItem>;
export declare function createMany(createInputs: {
    data: Record<string, any>[];
}, list: InitialisedList, context: KeystoneContext): Promise<Promise<BaseItem>[]>;
export declare function updateOne(updateInput: {
    where: UniqueInputFilter;
    data: Record<string, any>;
}, list: InitialisedList, context: KeystoneContext): Promise<BaseItem>;
export declare function updateMany({ data }: {
    data: {
        where: UniqueInputFilter;
        data: Record<string, any>;
    }[];
}, list: InitialisedList, context: KeystoneContext): Promise<Promise<BaseItem>[]>;
