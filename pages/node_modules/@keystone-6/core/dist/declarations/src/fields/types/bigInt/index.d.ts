import { BaseListTypeInfo, FieldTypeFunc, CommonFieldConfig } from '../../../types';
export declare type BigIntFieldConfig<ListTypeInfo extends BaseListTypeInfo> = CommonFieldConfig<ListTypeInfo> & {
    isIndexed?: boolean | 'unique';
    defaultValue?: bigint | {
        kind: 'autoincrement';
    };
    validation?: {
        isRequired?: boolean;
        min?: bigint;
        max?: bigint;
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
export declare const bigInt: <ListTypeInfo extends BaseListTypeInfo>({ isIndexed, defaultValue: _defaultValue, validation: _validation, ...config }?: BigIntFieldConfig<ListTypeInfo>) => FieldTypeFunc<ListTypeInfo>;
