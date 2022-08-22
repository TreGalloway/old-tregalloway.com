import * as t from 'io-ts';
import { RelationshipData } from './DocumentEditor/component-blocks/api';
import { Mark } from './DocumentEditor/utils';
export declare type TextWithMarks = {
    type?: never;
    text: string;
} & {
    [Key in Mark | 'insertMenu']: true | undefined;
};
declare type Inline = TextWithMarks | Link | Relationship;
declare type Link = {
    type: 'link';
    href: string;
    children: Children;
};
declare type Relationship = {
    type: 'relationship';
    relationship: string;
    data: RelationshipData | null;
    children: Children;
};
declare type Children = (Block | Inline)[];
declare type Layout = {
    type: 'layout';
    layout: number[];
    children: Children;
};
declare type OnlyChildrenElements = {
    type: 'blockquote' | 'layout-area' | 'code' | 'divider' | 'list-item' | 'list-item-content' | 'ordered-list' | 'unordered-list';
    children: Children;
};
declare type Heading = {
    type: 'heading';
    level: 1 | 2 | 3 | 4 | 5 | 6;
    textAlign: 'center' | 'end' | undefined;
    children: Children;
};
declare type Paragraph = {
    type: 'paragraph';
    textAlign: 'center' | 'end' | undefined;
    children: Children;
};
declare type ComponentBlock = {
    type: 'component-block';
    component: string;
    props: Record<string, any>;
    children: Children;
};
declare type ComponentProp = {
    type: 'component-inline-prop' | 'component-block-prop';
    propPath: (string | number)[] | undefined;
    children: Children;
};
declare type Block = Layout | OnlyChildrenElements | Heading | ComponentBlock | ComponentProp | Paragraph;
export declare type ElementFromValidation = Block | Inline;
export declare const editorCodec: t.ArrayC<t.Type<Block, Block, unknown>>;
export declare function isRelationshipData(val: unknown): val is RelationshipData;
export declare function validateDocumentStructure(val: unknown): asserts val is ElementFromValidation[];
export {};
