import { jsx } from '@keystone-ui/core';
import { CardValueComponent, CellComponent, FieldController, FieldControllerConfig, FieldProps } from '../../../../types';
export declare const Field: ({ field, value, onChange, autoFocus }: FieldProps<typeof controller>) => jsx.JSX.Element;
export declare const Cell: CellComponent<typeof controller>;
export declare const CardValue: CardValueComponent<typeof controller>;
export declare type AdminMultiSelectFieldMeta = {
    options: readonly {
        label: string;
        value: string | number;
    }[];
    type: 'string' | 'integer' | 'enum';
    defaultValue: string[] | number[];
};
declare type Config = FieldControllerConfig<AdminMultiSelectFieldMeta>;
declare type Option = {
    label: string;
    value: string;
};
declare type Value = readonly Option[];
export declare const controller: (config: Config) => FieldController<Value, Option[]> & {
    options: Option[];
    type: 'string' | 'integer' | 'enum';
    valuesToOptionsWithStringValues: Record<string, Option>;
};
export {};
