import { GraphQLSchema } from 'graphql';
import { InitialisedList } from './core/types-for-lists';
export declare function printGeneratedTypes(graphQLSchema: GraphQLSchema, lists: Record<string, InitialisedList>): string;
