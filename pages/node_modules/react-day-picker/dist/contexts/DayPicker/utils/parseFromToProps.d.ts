import { DayPickerBase } from '../../../types/DayPickerBase';
/** Return the `fromDate` and `toDate` prop values values parsing the DayPicker props. */
export declare function parseFromToProps(props: Pick<DayPickerBase, 'fromYear' | 'toYear' | 'fromDate' | 'toDate' | 'fromMonth' | 'toMonth'>): {
    fromDate: Date | undefined;
    toDate: Date | undefined;
};
