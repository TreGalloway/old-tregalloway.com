import { BaseListTypeInfo, FieldTypeFunc, CommonFieldConfig } from '../../../types';
export declare type IntegerFieldConfig<ListTypeInfo extends BaseListTypeInfo> = CommonFieldConfig<ListTypeInfo> & {
    isIndexed?: boolean | 'unique';
    defaultValue?: number | {
        kind: 'autoincrement';
    };
    validation?: {
        isRequired?: boolean;
        min?: number;
        max?: number;
    };
    graphql?: {
        create?: {
            isNonNull?: boolean;
        };
        read?: {
            isNonNull?: boolean;
        };
    };
    db?: {
        isNullable?: boolean;
        map?: string;
    };
};
export declare const integer: <ListTypeInfo extends BaseListTypeInfo>({ isIndexed, defaultValue: _defaultValue, validation, ...config }?: IntegerFieldConfig<ListTypeInfo>) => FieldTypeFunc<ListTypeInfo>;
