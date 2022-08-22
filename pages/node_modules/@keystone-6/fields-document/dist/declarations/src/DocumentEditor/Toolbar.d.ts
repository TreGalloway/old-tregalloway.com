/** @jsxRuntime classic */
/** @jsx jsx */
import { HTMLAttributes } from 'react';
import { jsx } from '@keystone-ui/core';
import { DocumentFeatures } from '../views';
export declare function Toolbar({ documentFeatures, viewState, }: {
    documentFeatures: DocumentFeatures;
    viewState?: {
        expanded: boolean;
        toggle: () => void;
    };
}): jsx.JSX.Element;
export declare const IconBase: (props: HTMLAttributes<HTMLOrSVGElement>) => jsx.JSX.Element;
