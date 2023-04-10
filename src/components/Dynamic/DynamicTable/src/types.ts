export type DynamicTableRowProps = Record<string, any>;

export interface DynamicTableHeaderProps {
    title: string;
    key: string;
    type: "input" | "select";
    source: Nullable<string>;
}
