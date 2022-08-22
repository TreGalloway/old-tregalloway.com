import { BaseListTypeInfo, FieldTypeFunc, CommonFieldConfig } from '../../../types';
export declare type TimestampFieldConfig<ListTypeInfo extends BaseListTypeInfo> = CommonFieldConfig<ListTypeInfo> & {
    isIndexed?: boolean | 'unique';
    validation?: {
        isRequired?: boolean;
    };
    defaultValue?: string | {
        kind: 'now';
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
        updatedAt?: boolean;
        isNullable?: boolean;
        map?: string;
    };
};
export declare const timestamp: <ListTypeInfo extends BaseListTypeInfo>({ isIndexed, validation, defaultValue, ...config }?: TimestampFieldConfig<ListTypeInfo>) => FieldTypeFunc<ListTypeInfo>;
