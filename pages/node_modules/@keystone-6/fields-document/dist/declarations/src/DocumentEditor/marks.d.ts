import { Editor } from 'slate';
import { DocumentFeatures } from '../views';
import { ComponentBlock } from './component-blocks/api';
export declare const allMarkdownShortcuts: {
    bold: string[];
    italic: string[];
    strikethrough: string[];
    code: string[];
};
export declare function withMarks(editorDocumentFeatures: DocumentFeatures, componentBlocks: Record<string, ComponentBlock>, editor: Editor): Editor;
