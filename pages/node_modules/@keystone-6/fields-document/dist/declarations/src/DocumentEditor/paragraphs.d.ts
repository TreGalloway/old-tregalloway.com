import { Editor } from 'slate';
export declare const paragraphElement: () => {
    type: "paragraph";
    children: {
        text: string;
    }[];
};
export declare function withParagraphs(editor: Editor): Editor;
