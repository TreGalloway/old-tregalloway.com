import { ComponentSchema } from '../../component-blocks';
import { DocumentFeatures } from '../../views';
import { DocumentFeaturesForNormalization } from '../document-features-normalization';
import { ChildField } from './api';
declare type PathToChildFieldWithOption = {
    path: ReadonlyPropPath;
    options: ChildField['options'];
};
export declare function findChildPropPathsForProp(value: any, schema: ComponentSchema, path: ReadonlyPropPath): PathToChildFieldWithOption[];
export declare function findChildPropPaths(value: Record<string, any>, props: Record<string, ComponentSchema>): {
    path: ReadonlyPropPath | undefined;
    options: ChildField['options'];
}[];
export declare function assertNever(arg: never): never;
export declare type DocumentFeaturesForChildField = {
    kind: 'inline';
    inlineMarks: 'inherit' | DocumentFeatures['formatting']['inlineMarks'];
    documentFeatures: {
        links: boolean;
        relationships: boolean;
    };
    softBreaks: boolean;
} | {
    kind: 'block';
    inlineMarks: 'inherit' | DocumentFeatures['formatting']['inlineMarks'];
    softBreaks: boolean;
    documentFeatures: DocumentFeaturesForNormalization;
};
export declare function getDocumentFeaturesForChildField(editorDocumentFeatures: DocumentFeatures, options: ChildField['options']): DocumentFeaturesForChildField;
export declare function getSchemaAtPropPath(path: ReadonlyPropPath, value: Record<string, unknown>, props: Record<string, ComponentSchema>): undefined | ComponentSchema;
export declare function clientSideValidateProp(schema: ComponentSchema, value: any): boolean;
export declare function getAncestorSchemas(rootSchema: ComponentSchema, path: ReadonlyPropPath, value: unknown): ComponentSchema[];
export declare type ReadonlyPropPath = readonly (string | number)[];
export declare function getValueAtPropPath(value: unknown, inputPath: ReadonlyPropPath): unknown;
export declare function traverseProps(schema: ComponentSchema, value: unknown, visitor: (schema: ComponentSchema, value: unknown, path: ReadonlyPropPath) => void, path?: ReadonlyPropPath): void;
export declare function replaceValueAtPropPath(schema: ComponentSchema, value: unknown, newValue: unknown, path: ReadonlyPropPath): unknown;
export declare function getPlaceholderTextForPropPath(propPath: ReadonlyPropPath, fields: Record<string, ComponentSchema>, formProps: Record<string, any>): string;
export {};
