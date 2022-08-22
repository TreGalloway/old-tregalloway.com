import { DatabaseProvider } from '../../types';
import { InitialisedList } from './types-for-lists';
export declare function printPrismaSchema(lists: Record<string, InitialisedList>, provider: DatabaseProvider, prismaPreviewFeatures?: readonly string[] | null, additionalPrismaDatasourceProperties?: {
    [key: string]: string;
} | null): string;
