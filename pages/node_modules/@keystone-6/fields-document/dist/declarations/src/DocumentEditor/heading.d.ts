/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@keystone-ui/core';
import { RenderElementProps } from 'slate-react';
import { Editor } from 'slate';
export declare const HeadingElement: ({ attributes, children, element, }: RenderElementProps & {
    element: {
        type: 'heading';
    };
}) => jsx.JSX.Element;
export declare function withHeading(editor: Editor): Editor;
