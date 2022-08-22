/** Controls the navigation state. */
export declare function useNavigationState(): [
    /** The month DayPicker is navigating at */
    month: Date,
    /** Go to the specified month. */
    goToMonth: (month: Date) => void
];
