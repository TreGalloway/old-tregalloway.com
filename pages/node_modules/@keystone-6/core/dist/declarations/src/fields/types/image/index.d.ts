import { BaseListTypeInfo, FieldTypeFunc, CommonFieldConfig } from '../../../types';
export declare type ImageFieldConfig<ListTypeInfo extends BaseListTypeInfo> = {
    storage: string;
} & CommonFieldConfig<ListTypeInfo>;
export declare const image: <ListTypeInfo extends BaseListTypeInfo>(config: ImageFieldConfig<ListTypeInfo>) => FieldTypeFunc<ListTypeInfo>;
