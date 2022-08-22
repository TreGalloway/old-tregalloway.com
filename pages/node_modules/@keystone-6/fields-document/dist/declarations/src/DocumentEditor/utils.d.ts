import React from 'react';
import { Editor, Node, NodeEntry, Path, Element, Location, Point } from 'slate';
import { ElementFromValidation } from '../structure-validation';
export { useSlateStatic as useStaticEditor } from 'slate-react';
export declare type Mark = 'bold' | 'italic' | 'underline' | 'strikethrough' | 'code' | 'superscript' | 'subscript' | 'keyboard';
export declare const allMarks: Mark[];
export declare const isElementActive: (editor: Editor, format: Exclude<ElementFromValidation, {
    text: string;
}>['type']) => boolean;
export declare function clearFormatting(editor: Editor): void;
export declare function moveChildren(editor: Editor, parent: NodeEntry | Path, to: Path, shouldMoveNode?: (node: Node) => boolean): void;
export declare function useElementWithSetNodes<TElement extends Element>(editor: Editor, element: TElement): readonly [TElement, (changesOrCallback: Partial<TElement> | ((current: TElement) => Partial<TElement>)) => void];
export declare function useEventCallback<Func extends (...args: any) => any>(callback: Func): Func;
export declare const modifierKeyText: string;
export declare const ForceValidationProvider: React.Provider<boolean>;
export declare function useForceValidation(): boolean;
export declare function insertNodesButReplaceIfSelectionIsAtEmptyParagraphOrHeading(editor: Editor, nodes: Node | Node[]): void;
/**
 * This is equivalent to Editor.after except that it ignores points that have no content
 * like the point in a void text node, an empty text node and the last point in a text node
 */
export declare function EditorAfterButIgnoringingPointsWithNoContent(editor: Editor, at: Location, { distance, }?: {
    distance?: number;
}): Point | undefined;
export declare function nodeTypeMatcher<Type extends Element['type'][]>(...args: Type): (node: Node) => node is Element & {
    type: Type[number];
};
export declare function assert(condition: boolean): asserts condition;
