import { DayPickerContextValue } from '../../../contexts/DayPicker';
import { ActiveModifiers } from '../../../types/Modifiers';
/**
 * Return the class names for the Day element, according to the given active
 * modifiers.
 *
 * Custom class names are set via `modifiersClassNames` or `classNames`,
 * where the first have the precedence.
 */
export declare function getDayClassNames(dayPicker: Pick<DayPickerContextValue, 'modifiersClassNames' | 'classNames'>, activeModifiers: ActiveModifiers): string[];
