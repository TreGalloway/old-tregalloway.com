/**
 * Returns the next month the user can navigate to according to the given
 * options.
 *
 * Please note that the next month is not always the next calendar month:
 *
 * - if after the `toDate` range, is undefined;
 * - if the navigation is paged, is the number of months displayed ahead.
 *
 */
export declare function getNextMonth(startingMonth: Date, options: {
    numberOfMonths?: number;
    fromDate?: Date;
    toDate?: Date;
    pagedNavigation?: boolean;
    today?: Date;
    disableNavigation?: boolean;
}): Date | undefined;
