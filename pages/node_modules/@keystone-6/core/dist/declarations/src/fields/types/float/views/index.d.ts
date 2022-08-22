/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@keystone-ui/core';
import { CardValueComponent, CellComponent, FieldController, FieldControllerConfig, FieldProps } from '../../../../types';
declare type Validation = {
    min?: number;
    max?: number;
    isRequired?: boolean;
};
declare type Value = {
    kind: 'update';
    initial: number | null;
    value: string | number | null;
} | {
    kind: 'create';
    value: string | number | null;
};
export declare const Field: ({ field, value, onChange, autoFocus, forceValidation, }: FieldProps<typeof controller>) => jsx.JSX.Element;
export declare const Cell: CellComponent;
export declare const CardValue: CardValueComponent;
export declare const controller: (config: FieldControllerConfig<{
    validation: Validation;
    defaultValue: number | null;
}>) => FieldController<Value, string> & {
    validation: Validation;
};
export {};
