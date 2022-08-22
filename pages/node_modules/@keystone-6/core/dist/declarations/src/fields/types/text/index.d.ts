import { BaseListTypeInfo, CommonFieldConfig, FieldTypeFunc } from '../../../types';
export declare type TextFieldConfig<ListTypeInfo extends BaseListTypeInfo> = CommonFieldConfig<ListTypeInfo> & {
    isIndexed?: true | 'unique';
    ui?: {
        displayMode?: 'input' | 'textarea';
    };
    validation?: {
        /**
         * Makes the field disallow null values and require a string at least 1 character long
         */
        isRequired?: boolean;
        match?: {
            regex: RegExp;
            explanation?: string;
        };
        length?: {
            min?: number;
            max?: number;
        };
    };
    defaultValue?: string;
    graphql?: {
        create?: {
            isNonNull?: boolean;
        };
        read?: {
            isNonNull?: boolean;
        };
    };
    db?: {
        isNullable?: boolean;
        map?: string;
        /**
         * The underlying database type.
         * Only some of the types are supported on PostgreSQL and MySQL.
         * The native type is not customisable on SQLite.
         * See Prisma's documentation for more information about the supported types.
         *
         * https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference#string
         */
        nativeType?: 'Text' | `VarChar(${number})` | `Char(${number})` | `Bit(${number})` | 'VarBit' | 'Uuid' | 'Xml' | 'Inet' | 'Citext' | 'TinyText' | 'MediumText' | 'LargeText';
    };
};
export declare const text: <ListTypeInfo extends BaseListTypeInfo>({ isIndexed, defaultValue: _defaultValue, validation: _validation, ...config }?: TextFieldConfig<ListTypeInfo>) => FieldTypeFunc<ListTypeInfo>;
export declare type TextFieldMeta = {
    displayMode: 'input' | 'textarea';
    shouldUseModeInsensitive: boolean;
    isNullable: boolean;
    validation: {
        isRequired: boolean;
        match: {
            regex: {
                source: string;
                flags: string;
            };
            explanation: string | null;
        } | null;
        length: {
            min: number | null;
            max: number | null;
        };
    };
    defaultValue: string | null;
};
