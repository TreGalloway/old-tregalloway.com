/** @jsxRuntime classic */
/** @jsx jsx */
import { Editor } from 'slate';
import { RenderElementProps } from 'slate-react';
import { jsx } from '@keystone-ui/core';
export declare const insertBlockquote: (editor: Editor) => void;
export declare function withBlockquote(editor: Editor): Editor;
export declare const BlockquoteElement: ({ attributes, children }: RenderElementProps) => jsx.JSX.Element;
export declare const blockquoteButton: jsx.JSX.Element;
