import { BaseListTypeInfo, FieldAccessControl, FieldData } from '../types';
export declare function hasReadAccessControl<ListTypeInfo extends BaseListTypeInfo>(access: FieldAccessControl<ListTypeInfo> | undefined): boolean;
export declare function hasCreateAccessControl<ListTypeInfo extends BaseListTypeInfo>(access: FieldAccessControl<ListTypeInfo> | undefined): boolean;
export declare function getResolvedIsNullable(validation: undefined | {
    isRequired?: boolean;
}, db: undefined | {
    isNullable?: boolean;
}): boolean;
export declare function assertReadIsNonNullAllowed<ListTypeInfo extends BaseListTypeInfo>(meta: FieldData, config: {
    access?: FieldAccessControl<ListTypeInfo> | undefined;
    graphql?: {
        read?: {
            isNonNull?: boolean;
        };
    };
}, resolvedIsNullable: boolean): void;
export declare function assertCreateIsNonNullAllowed<ListTypeInfo extends BaseListTypeInfo>(meta: FieldData, config: {
    access?: FieldAccessControl<ListTypeInfo> | undefined;
    graphql?: {
        create?: {
            isNonNull?: boolean;
        };
    };
}): void;
