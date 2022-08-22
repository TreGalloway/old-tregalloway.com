import { ComponentSchema, ValueForComponentSchema, GenericPreviewProps } from './api';
export declare function getKeysForArrayValue(value: readonly unknown[]): readonly string[];
export declare function setKeysForArrayValue(value: readonly unknown[], elementIds: readonly string[]): void;
export declare function getNewArrayElementKey(): string;
export declare function createGetPreviewProps<Schema extends ComponentSchema, ChildFieldElement>(rootSchema: Schema, rootOnChange: (cb: (val: ValueForComponentSchema<Schema>) => ValueForComponentSchema<Schema>) => void, getChildFieldElement: (path: readonly string[]) => ChildFieldElement): (value: ValueForComponentSchema<Schema>) => GenericPreviewProps<Schema, ChildFieldElement>;
