import { ref } from "vue";
import type { DataTableRowKey } from "naive-ui";

export function useCommonTable<T = UnKnownObject>(rowKeyName?: keyof T) {
    // 表格数据
    const tableData = ref<T[]>([]);

    // 加载状态
    const tableLoading = ref(false);

    // 表格行key
    const tableRowKey = (row: T) => (rowKeyName ? row[rowKeyName] : "") as string | number;

    // 选中
    const tableSelection = ref<DataTableRowKey[]>([]);

    const changeTableSelection = (rowKeys: DataTableRowKey[]) => {
        tableSelection.value = rowKeys;
    };

    // 分页预设
    const tablePaginationPreset = {
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
        tableRowKey,
        tableSelection,
        tablePaginationPreset,
        changeTableSelection
    };
}
