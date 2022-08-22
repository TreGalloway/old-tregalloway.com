/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@keystone-ui/core';
import { CardValueComponent, CellComponent, FieldController, FieldControllerConfig, FieldProps } from '../../../../types';
export declare const Field: ({ field, value, onChange, autoFocus, forceValidation, }: FieldProps<typeof controller>) => jsx.JSX.Element;
export declare const Cell: CellComponent;
export declare const CardValue: CardValueComponent;
declare type Config = FieldControllerConfig<import('..').TextFieldMeta>;
declare type Validation = {
    isRequired: boolean;
    match: {
        regex: RegExp;
        explanation: string | null;
    } | null;
    length: {
        min: number | null;
        max: number | null;
    };
};
declare type InnerTextValue = {
    kind: 'null';
    prev: string;
} | {
    kind: 'value';
    value: string;
};
declare type TextValue = {
    kind: 'create';
    inner: InnerTextValue;
} | {
    kind: 'update';
    inner: InnerTextValue;
    initial: InnerTextValue;
};
export declare const controller: (config: Config) => FieldController<TextValue, string> & {
    displayMode: 'input' | 'textarea';
    validation: Validation;
    isNullable: boolean;
};
export {};
