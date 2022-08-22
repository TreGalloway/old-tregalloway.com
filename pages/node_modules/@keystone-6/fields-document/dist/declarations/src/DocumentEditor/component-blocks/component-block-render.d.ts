/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@keystone-ui/core';
import React from 'react';
import { Element } from 'slate';
import { ComponentBlock } from './api';
export declare const ChildrenByPathContext: React.Context<Record<string, React.ReactElement<any, string | React.JSXElementConstructor<any>>>>;
export declare function ChildFieldEditable({ path }: {
    path: readonly string[];
}): React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
export declare function ComponentBlockRender({ componentBlock, element, onChange, children, }: {
    element: Element & {
        type: 'component-block';
    };
    onChange: (cb: (props: Record<string, unknown>) => Record<string, unknown>) => void;
    componentBlock: ComponentBlock;
    children: any;
}): jsx.JSX.Element;
