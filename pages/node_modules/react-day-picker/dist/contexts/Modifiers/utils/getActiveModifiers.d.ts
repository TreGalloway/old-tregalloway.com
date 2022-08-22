import { ActiveModifiers, Modifiers } from '../../../types/Modifiers';
/** Return the active modifiers for the given day. */
export declare function getActiveModifiers(day: Date, 
/** The modifiers to match for the given date. */
modifiers: Modifiers, 
/** The month where the day is displayed, to add the "outside" modifiers.  */
displayMonth?: Date): ActiveModifiers;
