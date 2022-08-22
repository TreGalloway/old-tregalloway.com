/**
 * Return the months to display in the component according to the number of
 * months and the from/to date.
 */
export declare function getDisplayMonths(month: Date, { reverseMonths, numberOfMonths }: {
    reverseMonths?: boolean;
    numberOfMonths: number;
}): Date[];
