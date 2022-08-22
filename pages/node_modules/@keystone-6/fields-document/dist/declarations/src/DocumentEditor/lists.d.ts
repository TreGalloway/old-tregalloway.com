/** @jsxRuntime classic */
/** @jsx jsx */
import { ReactNode } from 'react';
import { Editor, Node } from 'slate';
export declare const isListType: (type: string | undefined) => boolean;
export declare const isListNode: (node: Node) => node is {
    type: "code" | "blockquote" | "divider" | "ordered-list" | "unordered-list" | "list-item" | "layout-area" | "list-item-content";
} & import("slate").BaseElement & {
    type: 'ordered-list' | 'unordered-list';
};
export declare const toggleList: (editor: Editor, format: 'ordered-list' | 'unordered-list') => void;
export declare function withList(editor: Editor): Editor;
export declare const ListButton: import("react").ForwardRefExoticComponent<{
    type: 'ordered-list' | 'unordered-list';
    children: ReactNode;
} & import("react").RefAttributes<HTMLButtonElement>>;
export declare function nestList(editor: Editor): boolean;
export declare function unnestList(editor: Editor): boolean;
