import { ref } from "vue";

export function useCommonTable(rowKeyName: string = "id") {
    // 表格数据
    let tableData = ref<UnKnownObject[]>([]);

    // 加载状态
    let tableLoading = ref(false);

    // 表格行key
    let tableRowKey = (row: UnKnownObject) => row[rowKeyName] as string | number;

    // 选中
    let tableSelection = ref<(string | number)[]>([]);

    let changeTableSelection = (rowKeys: (string | number)[]) => {
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
        tableRowKey,
        tableSelection,
        tablePaginationPreset,
        changeTableSelection
    };
}
