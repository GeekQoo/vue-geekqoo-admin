import type { App } from "vue";
import {
    create,
    NAlert,
    NAvatar,
    NBreadcrumb,
    NBreadcrumbItem,
    NButton,
    NCard,
    NCheckbox,
    NCollapse,
    NCollapseItem,
    NColorPicker,
    NDataTable,
    NDatePicker,
    NDivider,
    NDrawer,
    NDrawerContent,
    NDropdown,
    NDynamicInput,
    NElement,
    NForm,
    NFormItem,
    NFormItemGi,
    NGrid,
    NGridItem,
    NIcon,
    NInput,
    NInputNumber,
    NLayout,
    NLayoutContent,
    NLayoutHeader,
    NLayoutSider,
    NMenu,
    NModal,
    NResult,
    NScrollbar,
    NSelect,
    NSlider,
    NSpace,
    NSpin,
    NStatistic,
    NSwitch,
    NTable,
    NTabPane,
    NTabs,
    NTag,
    NTree,
    NTreeSelect
} from "naive-ui";

const naive = create({
    components: [
        NAlert,
        NAvatar,
        NBreadcrumb,
        NBreadcrumbItem,
        NButton,
        NCard,
        NCheckbox,
        NCollapse,
        NCollapseItem,
        NColorPicker,
        NDataTable,
        NDatePicker,
        NDivider,
        NDrawer,
        NDrawerContent,
        NDropdown,
        NDynamicInput,
        NElement,
        NForm,
        NFormItem,
        NFormItemGi,
        NGrid,
        NGridItem,
        NIcon,
        NInput,
        NInputNumber,
        NLayout,
        NLayoutContent,
        NLayoutHeader,
        NLayoutSider,
        NMenu,
        NModal,
        NResult,
        NScrollbar,
        NSelect,
        NSlider,
        NSpace,
        NSpin,
        NStatistic,
        NSwitch,
        NTable,
        NTabPane,
        NTabs,
        NTag,
        NTree,
        NTreeSelect
    ]
});

export function setupNaive(app: App<Element>) {
    app.use(naive);
}
