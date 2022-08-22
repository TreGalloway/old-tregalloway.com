/**
 * Returns the next previous the user can navigate to, according to the given
 * options.
 *
 * Please note that the previous month is not always the previous calendar
 * month:
 *
 * - if before the `fromDate` date, is `undefined`;
 * - if the navigation is paged, is the number of months displayed before.
 *
 */
export declare function getPreviousMonth(startingMonth: Date, options: {
    numberOfMonths?: number;
    fromDate?: Date;
    toDate?: Date;
    pagedNavigation?: boolean;
    today?: Date;
    disableNavigation?: boolean;
}): Date | undefined;
