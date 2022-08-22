import { GraphQLSchema } from 'graphql';
import { graphql } from '../..';
import { InitialisedList } from './types-for-lists';
export declare function getGraphQLSchema(lists: Record<string, InitialisedList>, extraFields: {
    mutation: Record<string, graphql.Field<unknown, any, graphql.OutputType, string>>;
    query: Record<string, graphql.Field<unknown, any, graphql.OutputType, string>>;
}): GraphQLSchema;
