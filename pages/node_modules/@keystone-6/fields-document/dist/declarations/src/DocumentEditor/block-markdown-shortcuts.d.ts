import { Editor } from 'slate';
import { DocumentFeatures } from '../views';
import { ComponentBlock } from './component-blocks/api';
export declare function withBlockMarkdownShortcuts(documentFeatures: DocumentFeatures, componentBlocks: Record<string, ComponentBlock>, editor: Editor): Editor;
