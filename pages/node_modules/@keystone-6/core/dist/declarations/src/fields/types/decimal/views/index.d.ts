/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@keystone-ui/core';
import { Decimal } from 'decimal.js';
import { CardValueComponent, CellComponent, FieldController, FieldControllerConfig, FieldProps } from '../../../../types';
export declare const Field: ({ field, value, onChange, autoFocus, forceValidation, }: FieldProps<typeof controller>) => jsx.JSX.Element;
export declare const Cell: CellComponent;
export declare const CardValue: CardValueComponent;
export declare type DecimalFieldMeta = {
    precision: number;
    scale: number;
    defaultValue: string | null;
    validation: {
        isRequired: boolean;
        max: string | null;
        min: string | null;
    };
};
declare type Config = FieldControllerConfig<DecimalFieldMeta>;
declare type Validation = {
    isRequired: boolean;
    max: Decimal | null;
    min: Decimal | null;
};
declare type InnerValue = string | Decimal | null;
declare type Value = {
    kind: 'create';
    value: InnerValue;
} | {
    kind: 'update';
    initial: InnerValue;
    value: InnerValue;
};
export declare const controller: (config: Config) => FieldController<Value, string> & {
    scale: number;
    validation: Validation;
};
export {};
