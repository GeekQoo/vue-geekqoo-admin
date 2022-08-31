export type TableActionsProps = {
    actionType?: "button";
    label: string;
    type?: "default" | "tertiary" | "primary" | "success" | "info" | "warning" | "error";
    size?: "tiny" | "small" | "medium" | "large";
    onClick?: () => void;
    disabled?: () => boolean;
}[];
