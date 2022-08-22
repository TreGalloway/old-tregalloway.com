import { Editor, Path } from 'slate';
import { ComponentBlock } from './api';
export declare function updateComponentBlockElementProps(editor: Editor, componentBlock: ComponentBlock, prevProps: Record<string, unknown>, newProps: Record<string, unknown>, basePath: Path, setElement: (partialElement: {
    props: Record<string, unknown>;
}) => void): void;
