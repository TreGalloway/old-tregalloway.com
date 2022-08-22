export declare function formatTime(time: string): string;
export declare function parseTime(time: string): string | undefined;
export declare function constructTimestamp({ dateValue, timeValue, }: {
    dateValue: string;
    timeValue: string;
}): string;
export declare function deconstructTimestamp(value: string): InnerValue;
export declare function formatOutput(value: string | null): string;
export declare type InnerValue = {
    dateValue: string | null;
    timeValue: string | {
        kind: 'parsed';
        value: string | null;
    };
};
export declare type Value = {
    kind: 'create';
    value: InnerValue;
} | {
    kind: 'update';
    value: InnerValue;
    initial: string | null;
};
