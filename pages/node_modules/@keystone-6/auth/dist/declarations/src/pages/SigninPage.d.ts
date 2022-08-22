/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@keystone-ui/core';
declare type SigninPageProps = {
    identityField: string;
    secretField: string;
    mutationName: string;
    successTypename: string;
    failureTypename: string;
};
export declare const getSigninPage: (props: SigninPageProps) => () => jsx.JSX.Element;
export declare const SigninPage: ({ identityField, secretField, mutationName, successTypename, failureTypename, }: SigninPageProps) => jsx.JSX.Element;
export {};
