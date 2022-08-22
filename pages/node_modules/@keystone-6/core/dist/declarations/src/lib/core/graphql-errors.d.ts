import { ApolloError } from 'apollo-server-errors';
export declare const userInputError: (msg: string) => ApolloError;
export declare const accessDeniedError: (msg: string) => ApolloError;
export declare const prismaError: (err: Error) => ApolloError;
export declare const validationFailureError: (messages: string[]) => ApolloError;
export declare const extensionError: (extension: string, things: {
    error: Error;
    tag: string;
}[]) => ApolloError;
export declare const resolverError: (things: {
    error: Error;
    tag: string;
}[]) => ApolloError;
export declare const relationshipError: (things: {
    error: Error;
    tag: string;
}[]) => ApolloError;
export declare const accessReturnError: (things: {
    tag: string;
    returned: string;
}[]) => ApolloError;
export declare const limitsExceededError: (args: {
    type: string;
    limit: number;
    list: string;
}) => ApolloError;
export declare const filterAccessError: ({ operation, fieldKeys, }: {
    operation: 'filter' | 'orderBy';
    fieldKeys: string[];
}) => ApolloError;
