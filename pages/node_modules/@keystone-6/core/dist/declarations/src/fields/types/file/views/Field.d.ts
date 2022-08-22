import { jsx } from '@keystone-ui/core';
import { FieldProps } from '../../../../types';
export declare function Field({ autoFocus, field, value, onChange, }: FieldProps<typeof import('.').controller>): jsx.JSX.Element;
export declare function validateFile({ validity }: {
    validity: ValidityState;
}): string | undefined;
