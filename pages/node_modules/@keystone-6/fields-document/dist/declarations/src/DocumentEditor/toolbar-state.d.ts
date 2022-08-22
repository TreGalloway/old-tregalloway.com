import { ReactNode } from 'react';
import { Editor } from 'slate';
import { DocumentFeatures } from '../views';
import { ComponentBlock } from './component-blocks/api';
import { DocumentFeaturesForChildField } from './component-blocks/utils';
import { Relationships } from './relationship';
import { Mark } from './utils';
declare type BasicToolbarItem = {
    isSelected: boolean;
    isDisabled: boolean;
};
export declare type ToolbarState = {
    textStyles: {
        selected: 'normal' | 1 | 2 | 3 | 4 | 5 | 6;
        allowedHeadingLevels: (1 | 2 | 3 | 4 | 5 | 6)[];
    };
    marks: {
        [key in Mark]: BasicToolbarItem;
    };
    clearFormatting: {
        isDisabled: boolean;
    };
    alignment: {
        selected: 'start' | 'center' | 'end';
        isDisabled: boolean;
    };
    lists: {
        ordered: BasicToolbarItem;
        unordered: BasicToolbarItem;
    };
    links: BasicToolbarItem;
    blockquote: BasicToolbarItem;
    layouts: {
        isSelected: boolean;
    };
    dividers: {
        isDisabled: boolean;
    };
    code: BasicToolbarItem;
    relationships: {
        isDisabled: boolean;
    };
    editor: Editor;
    editorDocumentFeatures: DocumentFeatures;
};
export declare function useToolbarState(): ToolbarState;
export declare function getAncestorComponentChildFieldDocumentFeatures(editor: Editor, editorDocumentFeatures: DocumentFeatures, componentBlocks: Record<string, ComponentBlock>): DocumentFeaturesForChildField | undefined;
export declare const createToolbarState: (editor: Editor, componentBlocks: Record<string, ComponentBlock>, editorDocumentFeatures: DocumentFeatures) => ToolbarState;
export declare function getListTypeAbove(editor: Editor): 'none' | 'ordered-list' | 'unordered-list';
export declare const ToolbarStateProvider: ({ children, componentBlocks, editorDocumentFeatures, relationships, }: {
    children: ReactNode;
    componentBlocks: Record<string, ComponentBlock>;
    editorDocumentFeatures: DocumentFeatures;
    relationships: Relationships;
}) => JSX.Element;
export {};
