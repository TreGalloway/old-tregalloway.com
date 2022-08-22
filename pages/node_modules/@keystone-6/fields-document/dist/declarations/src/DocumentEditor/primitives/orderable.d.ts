/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@keystone-ui/core';
import { ReactNode } from 'react';
export declare function OrderableList(props: {
    onChange: (elements: readonly {
        key: string;
    }[]) => void;
    elements: readonly {
        key: string;
    }[];
    children: ReactNode;
}): jsx.JSX.Element;
export declare function OrderableItem(props: {
    elementKey: string;
    children: ReactNode;
}): jsx.JSX.Element;
export declare function RemoveButton(): jsx.JSX.Element;
export declare function DragHandle(): jsx.JSX.Element;
export declare const dragIcon: jsx.JSX.Element;
