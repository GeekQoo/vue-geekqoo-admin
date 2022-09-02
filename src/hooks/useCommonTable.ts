import { ref } from "vue";
import type { DataTableRowKey } from "naive-ui";

export function useCommonTable() {
    // 表格数据
    let tableData = ref([]);

    // 加载状态
    let tableLoading = ref(false);

    // 选中
    let tableSelection = ref<DataTableRowKey[]>([]);

    let changeTableSelection = (rowKeys: DataTableRowKey[]) => {
        tableSelection.value = rowKeys;
    };

    return {
        tableData,
        tableLoading,
        tableSelection,
        changeTableSelection
    };
}
