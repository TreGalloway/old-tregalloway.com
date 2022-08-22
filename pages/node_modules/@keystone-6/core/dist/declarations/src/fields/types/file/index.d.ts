import { FieldTypeFunc, CommonFieldConfig, BaseListTypeInfo } from '../../../types';
export declare type FileFieldConfig<ListTypeInfo extends BaseListTypeInfo> = {
    storage: string;
} & CommonFieldConfig<ListTypeInfo>;
export declare const file: <ListTypeInfo extends BaseListTypeInfo>(config: FileFieldConfig<ListTypeInfo>) => FieldTypeFunc<ListTypeInfo>;
