/** @jsxRuntime classic */
/** @jsx jsx */
/// <reference types="react" />
import { RenderElementProps } from 'slate-react';
import { Editor } from 'slate';
import { jsx } from '@keystone-ui/core';
import { ComponentBlock } from '../../component-blocks';
export { withComponentBlocks } from './with-component-blocks';
export declare const ComponentBlockContext: import("react").Context<Record<string, ComponentBlock<Record<string, import("./api").ComponentSchema>>>>;
export declare function ComponentInlineProp(props: RenderElementProps): jsx.JSX.Element;
export declare function insertComponentBlock(editor: Editor, componentBlocks: Record<string, ComponentBlock>, componentBlock: string): void;
export declare const BlockComponentsButtons: ({ onClose }: {
    onClose: () => void;
}) => jsx.JSX.Element;
export declare const ComponentBlocksElement: ({ attributes, children, element: __elementToGetPath, }: RenderElementProps & {
    element: {
        type: 'component-block';
    };
}) => jsx.JSX.Element;
