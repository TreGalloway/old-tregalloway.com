import { jsx } from '@keystone-ui/core';
import { CardValueComponent, CellComponent, FieldController, FieldControllerConfig, FieldProps } from '../../../../types';
export declare type Value = {
    kind: 'create';
    value: string | null;
} | {
    kind: 'update';
    value: string | null;
    initial: string | null;
};
export declare const Field: ({ field, value, onChange, forceValidation, }: FieldProps<typeof controller>) => jsx.JSX.Element;
export declare const Cell: CellComponent;
export declare const CardValue: CardValueComponent;
export declare type CalendarDayFieldMeta = {
    defaultValue: string | null;
    isRequired: boolean;
};
export declare const controller: (config: FieldControllerConfig<CalendarDayFieldMeta>) => FieldController<Value, string> & {
    fieldMeta: CalendarDayFieldMeta;
};
