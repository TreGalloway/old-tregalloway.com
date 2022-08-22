import { graphql } from './schema';
import { ScalarDBField, DatabaseProvider, FieldTypeWithoutDBField } from '.';
export declare function jsonFieldTypePolyfilledForSQLite<CreateArg extends graphql.Arg<graphql.InputType, any>, UpdateArg extends graphql.Arg<graphql.InputType, any>>(provider: DatabaseProvider, config: FieldTypeWithoutDBField<ScalarDBField<'Json', 'optional'>, CreateArg, UpdateArg, graphql.Arg<graphql.NullableInputType, false>, graphql.Arg<graphql.NullableInputType, false>> & {
    input?: {
        uniqueWhere?: undefined;
        orderBy?: undefined;
    };
}, dbFieldConfig?: {
    map?: string;
    mode?: 'required' | 'optional';
    default?: ScalarDBField<'Json', 'optional'>['default'];
}): import("./next-fields").NextFieldType<{
    kind: "scalar";
    mode: "required" | "optional";
    scalar: "String";
    default: {
        kind: "dbgenerated";
        value: string;
    } | {
        kind: "literal";
        value: string;
    } | undefined;
    map: string | undefined;
}, graphql.Arg<graphql.InputType, boolean> | undefined, UpdateArg, graphql.Arg<graphql.NullableInputType, false>, graphql.Arg<graphql.NullableInputType, false>, graphql.Arg<graphql.NullableInputType, false>, import("./type-info").BaseListTypeInfo> | import("./next-fields").NextFieldType<{
    kind: "scalar";
    mode: "optional";
    scalar: "Json";
    default: {
        kind: "dbgenerated";
        value: string;
    } | {
        kind: "literal";
        value: string;
    } | undefined;
    map: string | undefined;
}, CreateArg, UpdateArg, graphql.Arg<graphql.NullableInputType, false>, graphql.Arg<graphql.NullableInputType, false>, graphql.Arg<graphql.NullableInputType, false>, import("./type-info").BaseListTypeInfo>;
