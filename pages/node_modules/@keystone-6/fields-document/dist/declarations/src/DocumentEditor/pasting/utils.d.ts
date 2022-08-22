import { Text } from 'slate';
import { Mark } from '../utils';
export declare function addMarkToChildren<T>(mark: Mark, cb: () => T): T;
export declare function setLinkForChildren<T>(href: string, cb: () => T): T;
export declare function addMarksToChildren<T>(marks: Set<Mark>, cb: () => T): T;
export declare function forceDisableMarkForChildren<T>(mark: Mark, cb: () => T): T;
/**
 * This type is more strict than `Element & { type: 'link'; }` because `children`
 * is constrained to only contain Text nodes. This can't be assumed generally around the editor
 * (because of inline relationships or nested links(which are normalized away but the editor needs to not break if it happens))
 * but where this type is used, we're only going to allow links to contain Text and that's important
 * so that we know a block will never be inside an inline because Slate gets unhappy when that happens
 * (really the link inline should probably be a mark rather than an inline,
 * non-void inlines are probably always bad but that would imply changing the document
 * structure which would be such unnecessary breakage)
 */
declare type StrictLink = {
    type: 'link';
    href: string;
    children: Text[];
};
export declare type InlineFromExternalPaste = Text | StrictLink;
export declare function getInlineNodes(text: string): [InlineFromExternalPaste, ...InlineFromExternalPaste[]];
export {};
