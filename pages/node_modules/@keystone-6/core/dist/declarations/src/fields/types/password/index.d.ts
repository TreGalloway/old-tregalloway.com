import { BaseListTypeInfo, FieldTypeFunc, CommonFieldConfig } from '../../../types';
export declare type PasswordFieldConfig<ListTypeInfo extends BaseListTypeInfo> = CommonFieldConfig<ListTypeInfo> & {
    /**
     * @default 10
     */
    workFactor?: number;
    validation?: {
        isRequired?: boolean;
        rejectCommon?: boolean;
        match?: {
            regex: RegExp;
            explanation?: string;
        };
        length?: {
            /** @default 8 */
            min?: number;
            max?: number;
        };
    };
    db?: {
        isNullable?: boolean;
        map?: string;
    };
    bcrypt?: Pick<typeof import('bcryptjs'), 'compare' | 'hash'>;
};
export declare const password: <ListTypeInfo extends BaseListTypeInfo>({ bcrypt, workFactor, validation: _validation, ...config }?: PasswordFieldConfig<ListTypeInfo>) => FieldTypeFunc<ListTypeInfo>;
