/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@keystone-ui/core';
import { ReactNode } from 'react';
import { RenderElementProps } from 'slate-react';
import { ComponentBlock, PreviewPropsForToolbar, ObjectField, ComponentSchema } from './api';
export declare function ChromelessComponentBlockElement(props: {
    renderedBlock: ReactNode;
    componentBlock: ComponentBlock & {
        chromeless: true;
    };
    previewProps: PreviewPropsForToolbar<ObjectField<Record<string, ComponentSchema>>>;
    isOpen: boolean;
    onRemove: () => void;
    attributes: RenderElementProps['attributes'];
}): jsx.JSX.Element;
