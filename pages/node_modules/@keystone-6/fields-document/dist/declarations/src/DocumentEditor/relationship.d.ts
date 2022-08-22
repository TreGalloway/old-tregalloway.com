/** @jsxRuntime classic */
/** @jsx jsx */
/// <reference types="react" />
import { RenderElementProps } from 'slate-react';
import { Editor } from 'slate';
import { jsx } from '@keystone-ui/core';
export declare type Relationships = Record<string, {
    listKey: string;
    /** GraphQL fields to select when querying the field */
    selection: string | null;
    label: string;
}>;
export declare const DocumentFieldRelationshipsContext: import("react").Context<Relationships>;
export declare function useDocumentFieldRelationships(): Relationships;
export declare const DocumentFieldRelationshipsProvider: import("react").Provider<Relationships>;
export declare function withRelationship(editor: Editor): Editor;
export declare function RelationshipButton({ onClose }: {
    onClose: () => void;
}): jsx.JSX.Element;
export declare function RelationshipElement({ attributes, children, element, }: RenderElementProps & {
    element: {
        type: 'relationship';
    };
}): jsx.JSX.Element;
