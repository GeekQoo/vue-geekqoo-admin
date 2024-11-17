import { h } from "vue";
import DynamicIcon from "./src/index.vue";
import type { IconProps } from "naive-ui";

const renderDynamicIcon = (icon: string, config?: IconProps) => {
    return () => h(DynamicIcon, { icon, ...config });
};

export { DynamicIcon, renderDynamicIcon };
