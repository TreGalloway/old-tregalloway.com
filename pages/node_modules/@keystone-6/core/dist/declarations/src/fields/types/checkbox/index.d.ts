import { BaseListTypeInfo, CommonFieldConfig, FieldTypeFunc } from '../../../types';
export declare type CheckboxFieldConfig<ListTypeInfo extends BaseListTypeInfo> = CommonFieldConfig<ListTypeInfo> & {
    defaultValue?: boolean;
    graphql?: {
        read?: {
            isNonNull?: boolean;
        };
        create?: {
            isNonNull?: boolean;
        };
    };
    db?: {
        map?: string;
    };
};
export declare const checkbox: <ListTypeInfo extends BaseListTypeInfo>({ defaultValue, ...config }?: CheckboxFieldConfig<ListTypeInfo>) => FieldTypeFunc<ListTypeInfo>;
