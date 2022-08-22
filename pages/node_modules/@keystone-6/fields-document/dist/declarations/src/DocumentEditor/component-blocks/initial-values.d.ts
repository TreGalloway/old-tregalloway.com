import { ComponentSchema, ComponentBlock } from '../../component-blocks';
export declare function getInitialValue(type: string, componentBlock: ComponentBlock): {
    type: "component-block";
    component: string;
    props: any;
    children: {
        type: "component-inline-prop" | "component-block-prop";
        propPath: import("./utils").ReadonlyPropPath | undefined;
        children: ({
            type: "paragraph";
            children: {
                text: string;
            }[];
            text?: undefined;
        } | {
            text: string;
            type?: undefined;
            children?: undefined;
        })[];
    }[];
};
export declare function getInitialPropsValue(schema: ComponentSchema): any;
export declare function getInitialPropsValueFromInitializer(schema: ComponentSchema, initializer: any): any;
export declare function updateValue(schema: ComponentSchema, currentValue: any, updater: any): any;
