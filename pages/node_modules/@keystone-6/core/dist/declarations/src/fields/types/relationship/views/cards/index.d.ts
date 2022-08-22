/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@keystone-ui/core';
import { FieldProps, ListMeta } from '../../../../../types';
import { controller } from '../index';
export declare function Cards({ localList, field, foreignList, id, value, onChange, forceValidation, }: {
    foreignList: ListMeta;
    localList: ListMeta;
    id: string | null;
    value: {
        kind: 'cards-view';
    };
} & FieldProps<typeof controller>): jsx.JSX.Element;
