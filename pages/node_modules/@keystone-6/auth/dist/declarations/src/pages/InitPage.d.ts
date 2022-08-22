/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@keystone-ui/core';
declare type InitPageProps = {
    listKey: string;
    fieldPaths: string[];
    enableWelcome: boolean;
};
export declare const getInitPage: (props: InitPageProps) => () => jsx.JSX.Element;
export {};
