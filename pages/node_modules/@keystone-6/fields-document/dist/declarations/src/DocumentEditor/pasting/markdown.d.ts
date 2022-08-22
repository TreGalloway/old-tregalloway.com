import { Block } from '..';
import { InlineFromExternalPaste } from './utils';
export declare function deserializeMarkdown(markdown: string): (Block | InlineFromExternalPaste)[];
