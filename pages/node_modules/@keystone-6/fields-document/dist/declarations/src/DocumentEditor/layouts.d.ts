/** @jsxRuntime classic */
/** @jsx jsx */
/// <reference types="react" />
import { Editor } from 'slate';
import { RenderElementProps } from 'slate-react';
import { jsx } from '@keystone-ui/core';
import { DocumentFeatures } from '../views';
export declare const LayoutOptionsProvider: import("react").Provider<[number, ...number[]][]>;
export declare const LayoutContainer: ({ attributes, children, element, }: RenderElementProps & {
    element: {
        type: 'layout';
    };
}) => jsx.JSX.Element;
export declare const LayoutArea: ({ attributes, children }: RenderElementProps) => jsx.JSX.Element;
export declare const insertLayout: (editor: Editor, layout: [number, ...number[]]) => void;
export declare function withLayouts(editor: Editor): Editor;
export declare const LayoutsButton: ({ layouts }: {
    layouts: DocumentFeatures['layouts'];
}) => jsx.JSX.Element;
