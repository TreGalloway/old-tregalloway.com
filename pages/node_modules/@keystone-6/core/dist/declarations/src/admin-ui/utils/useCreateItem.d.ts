import { ComponentProps } from 'react';
import { ApolloError } from '../apollo';
import { ListMeta } from '../../types';
import { Fields } from '.';
declare type CreateItemHookResult = {
    state: 'editing' | 'loading' | 'created';
    shouldPreventNavigation: boolean;
    error?: ApolloError;
    props: ComponentProps<typeof Fields>;
    create: () => Promise<{
        id: string;
        label: string | null;
    } | undefined>;
};
export declare function useCreateItem(list: ListMeta): CreateItemHookResult;
export {};
