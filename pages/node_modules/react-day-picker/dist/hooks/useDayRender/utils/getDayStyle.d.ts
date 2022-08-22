/// <reference types="react" />
import { DayPickerContextValue } from '../../../contexts/DayPicker';
import { ActiveModifiers } from '../../../types/Modifiers';
/** Return the style for the Day element, according to the given active modifiers. */
export declare function getDayStyle(dayPicker: Pick<DayPickerContextValue, 'modifiersStyles' | 'styles'>, activeModifiers: ActiveModifiers): React.CSSProperties;
