import { BaseListTypeInfo, FieldTypeFunc, CommonFieldConfig } from '../../../types';
export declare type CalendarDayFieldConfig<ListTypeInfo extends BaseListTypeInfo> = CommonFieldConfig<ListTypeInfo> & {
    isIndexed?: boolean | 'unique';
    validation?: {
        isRequired?: boolean;
    };
    defaultValue?: string;
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
export declare const calendarDay: <ListTypeInfo extends BaseListTypeInfo>({ isIndexed, validation, defaultValue, ...config }?: CalendarDayFieldConfig<ListTypeInfo>) => FieldTypeFunc<ListTypeInfo>;
