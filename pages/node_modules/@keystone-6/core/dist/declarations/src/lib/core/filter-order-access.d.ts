import { KeystoneContext } from '../../types';
import { InitialisedList } from './types-for-lists';
export declare function checkFilterOrderAccess(things: {
    fieldKey: string;
    list: InitialisedList;
}[], context: KeystoneContext, operation: 'filter' | 'orderBy'): Promise<void>;
