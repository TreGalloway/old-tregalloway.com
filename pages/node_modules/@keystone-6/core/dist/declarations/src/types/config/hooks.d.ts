import type { KeystoneContextFromListTypeInfo, MaybePromise } from '..';
import { BaseListTypeInfo } from '../type-info';
declare type CommonArgs<ListTypeInfo extends BaseListTypeInfo> = {
    context: KeystoneContextFromListTypeInfo<ListTypeInfo>;
    /**
     * The key of the list that the operation is occurring on
     */
    listKey: string;
};
export declare type ListHooks<ListTypeInfo extends BaseListTypeInfo> = {
    /**
     * Used to **modify the input** for create and update operations after default values and access control have been applied
     */
    resolveInput?: ResolveInputListHook<ListTypeInfo>;
    /**
     * Used to **validate the input** for create and update operations once all resolveInput hooks resolved
     */
    validateInput?: ValidateInputHook<ListTypeInfo>;
    /**
     * Used to **validate** that a delete operation can happen after access control has occurred
     */
    validateDelete?: ValidateDeleteHook<ListTypeInfo>;
    /**
     * Used to **cause side effects** before a create, update, or delete operation once all validateInput hooks have resolved
     */
    beforeOperation?: BeforeOperationHook<ListTypeInfo>;
    /**
     * Used to **cause side effects** after a create, update, or delete operation operation has occurred
     */
    afterOperation?: AfterOperationHook<ListTypeInfo>;
};
declare type AddFieldPathToObj<T extends (arg: any) => any> = T extends (args: infer Args) => infer Result ? (args: Args & {
    fieldKey: string;
}) => Result : never;
declare type AddFieldPathArgToAllPropsOnObj<T extends Record<string, (arg: any) => any>> = {
    [Key in keyof T]: AddFieldPathToObj<T[Key]>;
};
declare type FieldKeysForList<ListTypeInfo extends BaseListTypeInfo> = keyof ListTypeInfo['prisma']['create'] | keyof ListTypeInfo['prisma']['update'];
export declare type FieldHooks<ListTypeInfo extends BaseListTypeInfo, FieldKey extends FieldKeysForList<ListTypeInfo> = FieldKeysForList<ListTypeInfo>> = AddFieldPathArgToAllPropsOnObj<{
    /**
     * Used to **modify the input** for create and update operations after default values and access control have been applied
     */
    resolveInput?: ResolveInputFieldHook<ListTypeInfo, FieldKey>;
    /**
     * Used to **validate the input** for create and update operations once all resolveInput hooks resolved
     */
    validateInput?: ValidateInputHook<ListTypeInfo>;
    /**
     * Used to **validate** that a delete operation can happen after access control has occurred
     */
    validateDelete?: ValidateDeleteHook<ListTypeInfo>;
    /**
     * Used to **cause side effects** before a create, update, or delete operation once all validateInput hooks have resolved
     */
    beforeOperation?: BeforeOperationHook<ListTypeInfo>;
    /**
     * Used to **cause side effects** after a create, update, or delete operation operation has occurred
     */
    afterOperation?: AfterOperationHook<ListTypeInfo>;
}>;
declare type ArgsForCreateOrUpdateOperation<ListTypeInfo extends BaseListTypeInfo> = {
    operation: 'create';
    item?: ListTypeInfo['item'];
    /**
     * The GraphQL input **before** default values are applied
     */
    inputData: ListTypeInfo['inputs']['create'];
    /**
     * The GraphQL input **after** being resolved by the field type's input resolver
     */
    resolvedData: ListTypeInfo['prisma']['create'];
} | {
    operation: 'update';
    item: ListTypeInfo['item'];
    /**
     * The GraphQL input **before** default values are applied
     */
    inputData: ListTypeInfo['inputs']['update'];
    /**
     * The GraphQL input **after** being resolved by the field type's input resolver
     */
    resolvedData: ListTypeInfo['prisma']['update'];
};
declare type ResolveInputListHook<ListTypeInfo extends BaseListTypeInfo> = (args: ArgsForCreateOrUpdateOperation<ListTypeInfo> & CommonArgs<ListTypeInfo>) => MaybePromise<ListTypeInfo['prisma']['create'] | ListTypeInfo['prisma']['update']>;
declare type ResolveInputFieldHook<ListTypeInfo extends BaseListTypeInfo, FieldKey extends FieldKeysForList<ListTypeInfo>> = (args: ArgsForCreateOrUpdateOperation<ListTypeInfo> & CommonArgs<ListTypeInfo>) => MaybePromise<ListTypeInfo['prisma']['create'][FieldKey] | ListTypeInfo['prisma']['update'][FieldKey] | undefined>;
declare type ValidateInputHook<ListTypeInfo extends BaseListTypeInfo> = (args: ArgsForCreateOrUpdateOperation<ListTypeInfo> & {
    addValidationError: (error: string) => void;
} & CommonArgs<ListTypeInfo>) => Promise<void> | void;
declare type ValidateDeleteHook<ListTypeInfo extends BaseListTypeInfo> = (args: {
    operation: 'delete';
    item: ListTypeInfo['item'];
    addValidationError: (error: string) => void;
} & CommonArgs<ListTypeInfo>) => Promise<void> | void;
declare type BeforeOperationHook<ListTypeInfo extends BaseListTypeInfo> = (args: (ArgsForCreateOrUpdateOperation<ListTypeInfo> | {
    operation: 'delete';
    item: ListTypeInfo['item'];
    inputData: undefined;
    resolvedData: undefined;
}) & CommonArgs<ListTypeInfo>) => Promise<void> | void;
declare type AfterOperationHook<ListTypeInfo extends BaseListTypeInfo> = (args: (ArgsForCreateOrUpdateOperation<ListTypeInfo> | {
    operation: 'delete';
    item: undefined;
    inputData: undefined;
    resolvedData: undefined;
}) & ({
    operation: 'delete';
} | {
    operation: 'create' | 'update';
    item: ListTypeInfo['item'];
}) & (// technically this will never actually exist for a create
{
    operation: 'create';
    originalItem: undefined;
} | {
    operation: 'delete' | 'update';
    originalItem: ListTypeInfo['item'];
}) & CommonArgs<ListTypeInfo>) => Promise<void> | void;
export {};
