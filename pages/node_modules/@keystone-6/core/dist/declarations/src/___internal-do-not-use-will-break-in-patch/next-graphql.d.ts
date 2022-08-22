import { ApolloServer } from 'apollo-server-micro';
import { KeystoneConfig } from '../types';
declare type Handler = ReturnType<ApolloServer['createHandler']>;
export declare function nextGraphQLAPIRoute(keystoneConfig: KeystoneConfig, prismaClient: any): Handler;
export {};
