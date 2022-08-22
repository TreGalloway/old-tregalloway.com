import { Block } from '..';
import { InlineFromExternalPaste } from './utils';
export declare function deserializeHTML(html: string): DeserializedNodes;
declare type DeserializedNode = InlineFromExternalPaste | Block;
declare type DeserializedNodes = [DeserializedNode, ...DeserializedNode[]];
export declare function deserializeHTMLNode(el: globalThis.Node): DeserializedNode[];
export {};
