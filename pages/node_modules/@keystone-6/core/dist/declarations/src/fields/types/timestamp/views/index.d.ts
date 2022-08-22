import { jsx } from '@keystone-ui/core';
import { CardValueComponent, CellComponent, FieldController, FieldControllerConfig, FieldProps } from '../../../../types';
import { Value } from './utils';
export declare const Field: ({ field, value, onChange, forceValidation, }: FieldProps<typeof controller>) => jsx.JSX.Element;
export declare const Cell: CellComponent;
export declare const CardValue: CardValueComponent;
export declare type TimestampFieldMeta = {
    defaultValue: string | {
        kind: 'now';
    } | null;
    updatedAt: boolean;
    isRequired: boolean;
};
export declare const controller: (config: FieldControllerConfig<TimestampFieldMeta>) => FieldController<Value, string> & {
    fieldMeta: TimestampFieldMeta;
};
