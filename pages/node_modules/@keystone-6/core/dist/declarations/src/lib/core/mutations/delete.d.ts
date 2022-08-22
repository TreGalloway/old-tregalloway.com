import { KeystoneContext } from '../../../types';
import { InitialisedList } from '../types-for-lists';
import { UniqueInputFilter } from '../where-inputs';
export declare function deleteMany(uniqueInputs: UniqueInputFilter[], list: InitialisedList, context: KeystoneContext): Promise<Promise<import("../../../types").BaseItem>[]>;
export declare function deleteOne(uniqueInput: UniqueInputFilter, list: InitialisedList, context: KeystoneContext): Promise<import("../../../types").BaseItem>;
