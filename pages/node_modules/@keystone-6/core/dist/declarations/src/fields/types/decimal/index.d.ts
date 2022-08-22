import { FieldTypeFunc, BaseListTypeInfo, CommonFieldConfig } from '../../../types';
export declare type DecimalFieldConfig<ListTypeInfo extends BaseListTypeInfo> = CommonFieldConfig<ListTypeInfo> & {
    validation?: {
        min?: string;
        max?: string;
        isRequired?: boolean;
    };
    precision?: number;
    scale?: number;
    defaultValue?: string;
    isIndexed?: boolean | 'unique';
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
export declare const decimal: <ListTypeInfo extends BaseListTypeInfo>({ isIndexed, precision, scale, validation, defaultValue, ...config }?: DecimalFieldConfig<ListTypeInfo>) => FieldTypeFunc<ListTypeInfo>;
