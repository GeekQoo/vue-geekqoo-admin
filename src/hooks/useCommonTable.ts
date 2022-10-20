import { ref } from "vue";
import type { DataTableRowKey } from "naive-ui";

export function useCommonTable() {
    // 表格数据
    let tableData = ref<any[]>([]);

    // 加载状态
    let tableLoading = ref(false);

    // 选中
    let tableSelection = ref<DataTableRowKey[]>([]);

    let changeTableSelection = (rowKeys: DataTableRowKey[]) => {
        tableSelection.value = rowKeys;
    };

    // 分页预设
    let tablePaginationPreset = {
        page: 1,
        pageSize: 10,
        itemCount: 0,
        pageSizes: [10, 50, 100],
        showSizePicker: true,
        showQuickJumper: true,
        displayOrder: ["size-picker", "pages", "quick-jumper"]
    };

    return {
        tableData,
        tableLoading,
        tableSelection,
        tablePaginationPreset,
        changeTableSelection
    };
}
