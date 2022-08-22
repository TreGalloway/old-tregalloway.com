/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@keystone-ui/core';
import { ReactNode } from 'react';
declare type PageContainerProps = {
    children: ReactNode;
    header: ReactNode;
    title?: string;
};
export declare const HEADER_HEIGHT = 80;
export declare const PageContainer: ({ children, header, title }: PageContainerProps) => jsx.JSX.Element;
export {};
