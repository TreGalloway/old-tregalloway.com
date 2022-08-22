import { KeystoneContext, GraphQLTypesForList } from '../../../types';
import { graphql } from '../../..';
import { InitialisedList } from '../types-for-lists';
import { NestedMutationState } from './create-update';
declare type _CreateValueType = Exclude<graphql.InferValueFromArg<graphql.Arg<Exclude<GraphQLTypesForList['relateTo']['many']['create'], undefined>>>, null | undefined>;
declare type _UpdateValueType = Exclude<graphql.InferValueFromArg<graphql.Arg<Exclude<GraphQLTypesForList['relateTo']['many']['update'], undefined>>>, null | undefined>;
export declare class RelationshipErrors extends Error {
    errors: {
        error: Error;
        tag: string;
    }[];
    constructor(errors: {
        error: Error;
        tag: string;
    }[]);
}
export declare function resolveRelateToManyForCreateInput(nestedMutationState: NestedMutationState, context: KeystoneContext, foreignList: InitialisedList, tag: string): (value: _CreateValueType) => Promise<{
    connect: (Record<string, any> & {
        _____?: "unique prisma filter" | undefined;
        then?: undefined;
    })[];
}>;
export declare function resolveRelateToManyForUpdateInput(nestedMutationState: NestedMutationState, context: KeystoneContext, foreignList: InitialisedList, tag: string): (value: _UpdateValueType) => Promise<{
    set: (Record<string, any> & {
        _____?: "unique prisma filter" | undefined;
        then?: undefined;
    })[] | undefined;
    disconnect: (Record<string, any> & {
        _____?: "unique prisma filter" | undefined;
        then?: undefined;
    })[];
    connect: (Record<string, any> & {
        _____?: "unique prisma filter" | undefined;
        then?: undefined;
    })[];
}>;
export {};
