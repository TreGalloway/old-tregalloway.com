/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@keystone-ui/core';
import { Descendant } from 'slate';
import { CardValueComponent, CellComponent, FieldController, FieldControllerConfig, FieldProps } from '@keystone-6/core/types';
import { ComponentBlock } from './component-blocks';
import { Relationships } from './DocumentEditor/relationship';
export declare const Field: ({ field, value, onChange, autoFocus, forceValidation, }: FieldProps<typeof controller>) => jsx.JSX.Element;
export declare const Cell: CellComponent;
export declare const CardValue: CardValueComponent;
export declare const allowedExportsOnCustomViews: string[];
export declare type DocumentFeatures = {
    formatting: {
        inlineMarks: {
            bold: boolean;
            italic: boolean;
            underline: boolean;
            strikethrough: boolean;
            code: boolean;
            superscript: boolean;
            subscript: boolean;
            keyboard: boolean;
        };
        listTypes: {
            ordered: boolean;
            unordered: boolean;
        };
        alignment: {
            center: boolean;
            end: boolean;
        };
        headingLevels: (1 | 2 | 3 | 4 | 5 | 6)[];
        blockTypes: {
            blockquote: boolean;
            code: boolean;
        };
        softBreaks: boolean;
    };
    links: boolean;
    dividers: boolean;
    layouts: [number, ...number[]][];
};
export declare const controller: (config: FieldControllerConfig<{
    relationships: Relationships;
    documentFeatures: DocumentFeatures;
    componentBlocksPassedOnServer: string[];
}>) => FieldController<Descendant[], never> & {
    componentBlocks: Record<string, ComponentBlock>;
    relationships: Relationships;
    documentFeatures: DocumentFeatures;
};
