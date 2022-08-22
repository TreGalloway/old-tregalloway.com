import { Editor } from 'slate';
import { ComponentBlock } from '../../component-blocks';
import { DocumentFeatures } from '../../views';
import { Relationships } from '../relationship';
export declare function withComponentBlocks(blockComponents: Record<string, ComponentBlock | undefined>, editorDocumentFeatures: DocumentFeatures, relationships: Relationships, editor: Editor): Editor;
