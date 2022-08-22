/** @jsxRuntime classic */
/** @jsx jsx */
import { ReactNode } from 'react';
import { jsx } from '@keystone-ui/core';
import { FieldProps } from '../../../../types';
export declare function Field({ autoFocus, field, value, onChange, }: FieldProps<typeof import('.').controller>): jsx.JSX.Element;
export declare function validateImage({ file, validity, }: {
    file: File;
    validity: ValidityState;
}): string | undefined;
export declare const ImageMeta: ({ width, height, size, }: {
    width?: number | undefined;
    height?: number | undefined;
    size: number;
}) => jsx.JSX.Element;
export declare const ImageWrapper: ({ children, url }: {
    children: ReactNode;
    url?: string | undefined;
}) => jsx.JSX.Element;
export declare const Placeholder: () => jsx.JSX.Element;
