import { KeystoneContext, GraphQLTypesForList } from '../../../types';
import { graphql } from '../../..';
import { InitialisedList } from '../types-for-lists';
import { NestedMutationState } from './create-update';
declare type _CreateValueType = Exclude<graphql.InferValueFromArg<graphql.Arg<Exclude<GraphQLTypesForList['relateTo']['one']['create'], undefined>>>, null | undefined>;
declare type _UpdateValueType = Exclude<graphql.InferValueFromArg<graphql.Arg<graphql.NonNullType<Exclude<GraphQLTypesForList['relateTo']['one']['update'], undefined>>>>, null | undefined>;
export declare function resolveRelateToOneForCreateInput(nestedMutationState: NestedMutationState, context: KeystoneContext, foreignList: InitialisedList): (value: _CreateValueType) => Promise<{
    connect: import("../where-inputs").UniquePrismaFilter;
} | undefined>;
export declare function resolveRelateToOneForUpdateInput(nestedMutationState: NestedMutationState, context: KeystoneContext, foreignList: InitialisedList): (value: _UpdateValueType) => Promise<{
    connect: import("../where-inputs").UniquePrismaFilter;
} | {
    disconnect: boolean;
} | undefined>;
export {};
