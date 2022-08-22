/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@keystone-ui/core';
import { ReactNode } from 'react';
import { Text, Editor } from 'slate';
export declare function InsertMenu({ children, text }: {
    children: ReactNode;
    text: Text;
}): jsx.JSX.Element;
export declare function withInsertMenu(editor: Editor): Editor;
