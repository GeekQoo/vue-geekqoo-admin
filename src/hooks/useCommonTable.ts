import { ref } from "vue";
import type { DataTableRowKey } from "naive-ui";

export function useCommonTable() {
    // 表格分页默认配置
    let tablePaginationConfig = {
        pageSizes: [10, 50, 100],
        showSizePicker: true,
        showQuickJumper: true,
        displayOrder: ["size-picker", "pages", "quick-jumper"]
    };

    // 表格数据
    let tableData = ref([]);

    // 选中
    let tableSelection = ref<DataTableRowKey[]>([]);

    let changeTableSelection = (rowKeys: DataTableRowKey[]) => {
        tableSelection.value = rowKeys;
    };

    return {
        tablePaginationConfig,
        tableData,
        tableSelection,
        changeTableSelection
    };
}
