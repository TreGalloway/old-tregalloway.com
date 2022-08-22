import { Text, Element, NodeEntry, Editor } from 'slate';
import { DocumentFeatures } from '../views';
import { Relationships } from './relationship';
export declare function areArraysEqual(a: readonly unknown[], b: readonly unknown[]): boolean;
export declare function normalizeTextBasedOnInlineMarksAndSoftBreaks([node, path]: NodeEntry<Text>, editor: Editor, inlineMarks: DocumentFeatures['formatting']['inlineMarks'], softBreaks: boolean): boolean;
export declare type DocumentFeaturesForNormalization = Omit<DocumentFeatures, 'formatting'> & {
    formatting: Omit<DocumentFeatures['formatting'], 'inlineMarks' | 'softBreaks'>;
    relationships: boolean;
};
export declare function normalizeInlineBasedOnLinksAndRelationships([node, path]: NodeEntry<Element>, editor: Editor, links: boolean, relationshipsEnabled: boolean, relationships: Relationships): boolean;
export declare function normalizeElementBasedOnDocumentFeatures([node, path]: NodeEntry<Element>, editor: Editor, { formatting, dividers, layouts, links, relationships: relationshipsEnabled, }: DocumentFeaturesForNormalization, relationships: Relationships): boolean;
export declare function withDocumentFeaturesNormalization(documentFeatures: DocumentFeatures, relationships: Relationships, editor: Editor): Editor;
