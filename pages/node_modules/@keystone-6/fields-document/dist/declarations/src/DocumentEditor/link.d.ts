/** @jsxRuntime classic */
/** @jsx jsx */
import { RenderElementProps } from 'slate-react';
import { Editor } from 'slate';
import { jsx } from '@keystone-ui/core';
import { DocumentFeatures } from '../views';
import { ComponentBlock } from './component-blocks/api';
export declare const wrapLink: (editor: Editor, url: string) => void;
export declare const LinkElement: ({ attributes, children, element: __elementForGettingPath, }: RenderElementProps & {
    element: {
        type: 'link';
    };
}) => jsx.JSX.Element;
export declare const linkButton: jsx.JSX.Element;
export declare function withLink(editorDocumentFeatures: DocumentFeatures, componentBlocks: Record<string, ComponentBlock>, editor: Editor): Editor;
