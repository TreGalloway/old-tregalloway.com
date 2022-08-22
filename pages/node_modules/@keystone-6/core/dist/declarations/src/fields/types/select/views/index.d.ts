import { jsx } from '@keystone-ui/core';
import { CardValueComponent, CellComponent, FieldController, FieldControllerConfig, FieldProps } from '../../../../types';
export declare const Field: ({ field, value, onChange, autoFocus, forceValidation, }: FieldProps<typeof controller>) => jsx.JSX.Element;
export declare const Cell: CellComponent<typeof controller>;
export declare const CardValue: CardValueComponent<typeof controller>;
export declare type AdminSelectFieldMeta = {
    options: readonly {
        label: string;
        value: string | number;
    }[];
    type: 'string' | 'integer' | 'enum';
    displayMode: 'select' | 'segmented-control' | 'radio';
    isRequired: boolean;
    defaultValue: string | number | null;
};
declare type Config = FieldControllerConfig<AdminSelectFieldMeta>;
declare type Option = {
    label: string;
    value: string;
};
declare type Value = {
    value: Option | null;
    kind: 'create';
} | {
    value: Option | null;
    initial: Option | null;
    kind: 'update';
};
export declare const controller: (config: Config) => FieldController<Value, Option[]> & {
    options: Option[];
    type: 'string' | 'integer' | 'enum';
    displayMode: 'select' | 'segmented-control' | 'radio';
    isRequired: boolean;
};
export {};
