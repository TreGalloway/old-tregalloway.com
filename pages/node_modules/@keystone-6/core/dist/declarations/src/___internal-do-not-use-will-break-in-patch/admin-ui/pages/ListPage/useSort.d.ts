import { ListMeta } from '../../../../types';
export declare function useSort(list: ListMeta, orderableFields: Set<string>): {
    direction: "ASC" | "DESC";
    field: string;
} | null;
