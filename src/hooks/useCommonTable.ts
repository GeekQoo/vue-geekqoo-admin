import { ref } from "vue";
import type { DataTableRowKey } from "naive-ui";

export function useCommonTable() {
    // 表格数据
    let tableData = ref([]);

    // 选中
    let tableSelection = ref<DataTableRowKey[]>([]);

    let changeTableSelection = (rowKeys: DataTableRowKey[]) => {
        tableSelection.value = rowKeys;
    };

    return {
        tableData,
        tableSelection,
        changeTableSelection
    };
}
