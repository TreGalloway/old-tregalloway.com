import { GraphQLResolveInfo } from 'graphql';
import { FindManyArgsValue, BaseItem, KeystoneContext } from '../../../types';
import { PrismaFilter, UniquePrismaFilter, UniqueInputFilter, InputFilter } from '../where-inputs';
import { InitialisedList } from '../types-for-lists';
export declare function mapUniqueWhereToWhere(uniqueWhere: UniquePrismaFilter): PrismaFilter;
export declare function checkFilterAccess(list: InitialisedList, context: KeystoneContext, inputFilter: InputFilter): Promise<void>;
export declare function accessControlledFilter(list: InitialisedList, context: KeystoneContext, resolvedWhere: PrismaFilter, accessFilters: boolean | InputFilter): Promise<PrismaFilter>;
export declare function findOne(args: {
    where: UniqueInputFilter;
}, list: InitialisedList, context: KeystoneContext): Promise<BaseItem | null>;
export declare function findMany({ where, take, skip, orderBy: rawOrderBy }: FindManyArgsValue, list: InitialisedList, context: KeystoneContext, info: GraphQLResolveInfo, extraFilter?: PrismaFilter): Promise<BaseItem[]>;
export declare function count({ where }: {
    where: Record<string, any>;
}, list: InitialisedList, context: KeystoneContext, info: GraphQLResolveInfo, extraFilter?: PrismaFilter): Promise<number>;
