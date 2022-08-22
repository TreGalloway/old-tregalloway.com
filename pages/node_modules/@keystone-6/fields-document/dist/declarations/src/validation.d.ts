import { ComponentBlock } from './DocumentEditor/component-blocks/api';
import { ReadonlyPropPath } from './DocumentEditor/component-blocks/utils';
import { Relationships } from './DocumentEditor/relationship';
import { ElementFromValidation } from './structure-validation';
import { DocumentFeatures } from './views';
export declare class PropValidationError extends Error {
    path: ReadonlyPropPath;
    constructor(message: string, path: ReadonlyPropPath);
}
export declare function getValidatedNodeWithNormalizedComponentFormProps(node: ElementFromValidation, componentBlocks: Record<string, ComponentBlock>, relationships: Relationships): ElementFromValidation;
export declare function validateAndNormalizeDocument(value: unknown, documentFeatures: DocumentFeatures, componentBlocks: Record<string, ComponentBlock>, relationships: Relationships): import("slate").Descendant[];
