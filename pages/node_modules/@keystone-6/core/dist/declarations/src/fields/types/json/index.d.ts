import { BaseListTypeInfo, JSONValue, FieldTypeFunc, CommonFieldConfig } from '../../../types';
export declare type JsonFieldConfig<ListTypeInfo extends BaseListTypeInfo> = CommonFieldConfig<ListTypeInfo> & {
    defaultValue?: JSONValue;
    db?: {
        map?: string;
    };
};
export declare const json: <ListTypeInfo extends BaseListTypeInfo>({ defaultValue, ...config }?: JsonFieldConfig<ListTypeInfo>) => FieldTypeFunc<ListTypeInfo>;
