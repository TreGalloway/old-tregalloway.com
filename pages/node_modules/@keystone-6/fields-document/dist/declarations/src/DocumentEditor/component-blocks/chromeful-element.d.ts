/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@keystone-ui/core';
import { ReactNode } from 'react';
import { RenderElementProps } from 'slate-react';
import { PreviewPropsForToolbar, ObjectField, ComponentSchema, ComponentBlock } from './api';
export declare function ChromefulComponentBlockElement(props: {
    children: ReactNode;
    renderedBlock: ReactNode;
    componentBlock: ComponentBlock & {
        chromeless?: false;
    };
    previewProps: PreviewPropsForToolbar<ObjectField<Record<string, ComponentSchema>>>;
    elementProps: Record<string, unknown>;
    onRemove: () => void;
    attributes: RenderElementProps['attributes'];
}): jsx.JSX.Element;
