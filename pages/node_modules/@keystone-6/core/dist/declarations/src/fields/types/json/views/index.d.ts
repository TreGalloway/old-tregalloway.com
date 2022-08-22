/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@keystone-ui/core';
import { CardValueComponent, CellComponent, FieldController, FieldControllerConfig, FieldProps, JSONValue } from '../../../../types';
export declare const Field: ({ field, forceValidation, value, onChange, autoFocus, }: FieldProps<typeof controller>) => jsx.JSX.Element;
export declare const Cell: CellComponent;
export declare const CardValue: CardValueComponent;
declare type Config = FieldControllerConfig<{
    defaultValue: JSONValue;
}>;
export declare const controller: (config: Config) => FieldController<string, string>;
export {};
