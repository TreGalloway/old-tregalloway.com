import { DateRange } from '../../../types/Matchers';
/**
 * Add a day to an existing range.
 *
 * The returned range takes in account the `undefined` values and if the added
 * day is already present in the range.
 */
export declare function addToRange(day: Date, range?: DateRange): DateRange | undefined;
