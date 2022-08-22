import { GraphQLSchema } from 'graphql';
import { BaseListTypeInfo, KeystoneDbAPI, KeystoneListsAPI, KeystoneContext, GqlNames } from '../../types';
export declare function getDbAPIFactory(gqlNames: GqlNames, schema: GraphQLSchema): (context: KeystoneContext) => KeystoneDbAPI<Record<string, BaseListTypeInfo>>[string];
export declare function itemAPIForList(listKey: string, context: KeystoneContext): KeystoneListsAPI<Record<string, BaseListTypeInfo>>[string];
