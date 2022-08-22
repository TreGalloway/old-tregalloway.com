import { BaseListTypeInfo, BaseItem, CommonFieldConfig, FieldTypeFunc, ListGraphQLTypes } from '../../../types';
import { graphql } from '../../..';
declare type VirtualFieldGraphQLField<Item extends BaseItem> = graphql.Field<Item, any, graphql.OutputType, string>;
export declare type VirtualFieldConfig<ListTypeInfo extends BaseListTypeInfo> = CommonFieldConfig<ListTypeInfo> & {
    field: VirtualFieldGraphQLField<ListTypeInfo['item']> | ((lists: Record<string, ListGraphQLTypes>) => VirtualFieldGraphQLField<ListTypeInfo['item']>);
    unreferencedConcreteInterfaceImplementations?: readonly graphql.ObjectType<any>[];
    ui?: {
        /**
         * Defines what the Admin UI should fetch from this field, it's interpolated into a query like this:
         * ```graphql
         * query {
         *   item(where: { id: "..." }) {
         *     field${ui.query}
         *   }
         * }
         * ```
         *
         * This is only needed when you your field returns a GraphQL type other than a scalar(String and etc.)
         * or an enum or you need to provide arguments to the field.
         */
        query?: string;
    };
};
export declare const virtual: <ListTypeInfo extends BaseListTypeInfo>({ field, ...config }: VirtualFieldConfig<ListTypeInfo>) => FieldTypeFunc<ListTypeInfo>;
export {};
