/// <reference types="react" />
import { DateRange } from '../types/Matchers';
import { ActiveModifiers } from './Modifiers';
/** The event handler when a day is clicked. */
export declare type DayClickEventHandler = (day: Date, activeModifiers: ActiveModifiers, e: React.MouseEvent) => void;
/** The event handler when a day is focused. */
export declare type DayFocusEventHandler = (day: Date, activeModifiers: ActiveModifiers, e: React.FocusEvent | React.KeyboardEvent) => void;
/** The event handler when a day gets a keyboard event. */
export declare type DayKeyboardEventHandler = (day: Date, activeModifiers: ActiveModifiers, e: React.KeyboardEvent) => void;
/** The event handler when a day gets a mouse event. */
export declare type DayMouseEventHandler = (day: Date, activeModifiers: ActiveModifiers, e: React.MouseEvent) => void;
/** The event handler when a month is changed in the calendar. */
export declare type MonthChangeEventHandler = (month: Date) => void;
/** The event handler when selecting multiple days. */
export declare type SelectMultipleEventHandler = (
/** The selected days */
days: Date[] | undefined, 
/** The day that was clicked triggering the event. */
selectedDay: Date, 
/** The day that was clicked */
activeModifiers: ActiveModifiers, 
/** The mouse event that triggered this event. */
e: React.MouseEvent) => void;
/** The event handler when selecting a range of days. */
export declare type SelectRangeEventHandler = (
/** The current range of the selected days. */
range: DateRange | undefined, 
/** The day that was selected (or clicked) triggering the event. */
selectedDay: Date, 
/** The modifiers of the selected day. */
activeModifiers: ActiveModifiers, e: React.MouseEvent) => void;
/** The event handler when selecting a single day. */
export interface SelectSingleEventHandler {
    (
    /** The selected day, `undefined` when `required={false}` (default) and the day is clicked again. */
    day: Date | undefined, 
    /** The day that was selected (or clicked) triggering the event. */
    selectedDay: Date, 
    /** The modifiers of the selected day. */
    activeModifiers: ActiveModifiers, e: React.MouseEvent): void;
}
/**The event handler when the week number is clicked. */
export declare type WeekNumberClickEventHandler = (
/** The week number that has been clicked. */
weekNumber: number, 
/** The dates in the clicked week. */
dates: Date[], 
/** The mouse event that triggered this event. */
e: React.MouseEvent) => void;
/** The event handler when a day gets a touch event. */
export declare type DayTouchEventHandler = (day: Date, activeModifiers: ActiveModifiers, e: React.TouchEvent) => void;
