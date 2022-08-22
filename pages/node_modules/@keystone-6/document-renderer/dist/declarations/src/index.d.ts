import { ReactElement, ReactNode } from 'react';
declare type Node = Element | Text;
declare type Mark = 'bold' | 'italic' | 'underline' | 'strikethrough' | 'code' | 'superscript' | 'subscript' | 'keyboard';
declare type Element = {
    children: Node[];
    [key: string]: unknown;
};
declare type Text = {
    text: string;
    [key: string]: unknown;
};
declare type Component<Props> = (props: Props) => ReactElement | null;
declare type OnlyChildrenComponent = Component<{
    children: ReactNode;
}> | keyof JSX.IntrinsicElements;
declare type MarkRenderers = {
    [Key in Mark]: OnlyChildrenComponent;
};
interface Renderers {
    inline: {
        link: Component<{
            children: ReactNode;
            href: string;
        }> | 'a';
        relationship: Component<{
            relationship: string;
            data: {
                id: string;
                label: string | undefined;
                data: Record<string, any> | undefined;
            } | null;
        }>;
    } & MarkRenderers;
    block: {
        block: OnlyChildrenComponent;
        paragraph: Component<{
            children: ReactNode;
            textAlign: 'center' | 'end' | undefined;
        }>;
        blockquote: OnlyChildrenComponent;
        code: Component<{
            children: string;
        }> | keyof JSX.IntrinsicElements;
        layout: Component<{
            layout: [number, ...number[]];
            children: ReactElement[];
        }>;
        divider: Component<{}> | keyof JSX.IntrinsicElements;
        heading: Component<{
            level: 1 | 2 | 3 | 4 | 5 | 6;
            children: ReactNode;
            textAlign: 'center' | 'end' | undefined;
        }>;
        list: Component<{
            type: 'ordered' | 'unordered';
            children: ReactElement[];
        }>;
    };
}
export declare const defaultRenderers: Renderers;
export declare type DocumentRendererProps<ComponentBlocks extends Record<string, Component<any>> = Record<string, Component<any>>> = {
    document: Element[];
    renderers?: {
        inline?: Partial<Renderers['inline']>;
        block?: Partial<Renderers['block']>;
    };
    componentBlocks?: ComponentBlocks;
};
export declare function DocumentRenderer<ComponentBlocks extends Record<string, Component<any>>>(props: DocumentRendererProps<ComponentBlocks>): JSX.Element;
export {};
