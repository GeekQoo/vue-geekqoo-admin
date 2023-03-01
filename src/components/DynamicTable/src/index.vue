<template>
    <div class="dynamic-table">
        <n-space class="mb-20px">
            <n-button secondary type="primary" @click="openHeaderConfigModal">配置表格</n-button>
            <n-button secondary type="success" @click="addTableRow">新增行</n-button>
            <n-button secondary type="error" @click="deleteTableRow">删除行</n-button>
        </n-space>
        <n-data-table
            :columns="tableColumns"
            :data="tableData"
            :row-key="tableRowKey"
            :single-line="false"
            bordered
            striped
            @update:checked-row-keys="changeTableSelection"
        />
        <n-modal v-model:show="headerConfigModal.show">
            <n-card class="w-500px" title="配置表格">
                <n-dynamic-input v-model:value="dynamicTableHeader" :on-create="() => ({ title: '', key: '' })">
                    <template #create-button-default>新增</template>
                    <template #default="{ index, value }">
                        <div class="flex-y-center">
                            <n-input v-model:value="dynamicTableHeader[index].title" type="text" />
                            <n-input v-model:value="dynamicTableHeader[index].key" type="text" />
                        </div>
                    </template>
                </n-dynamic-input>
                <n-space class="mt-20px">
                    <n-button type="primary" @click="confirmDynamicTableHeader">生成表头</n-button>
                    <n-button type="error">取消</n-button>
                </n-space>
                <pre>{{ JSON.stringify(dynamicTableHeader, null, 2) }}</pre>
            </n-card>
        </n-modal>
        <pre v-if="debug">{{ JSON.stringify(tableData, null, 2) }}</pre>
    </div>
</template>

<script lang="ts" setup>
import { h, onMounted, ref } from "vue";
import type { DataTableColumns } from "naive-ui";
import { NInput } from "naive-ui";
import { useCommonTable } from "@/hooks";
import type { DynamicTableHeaderProps, DynamicTableRowProps } from "@/components/DynamicTable";

let props = defineProps({
    debug: {
        type: Boolean,
        default: true
    }
});

onMounted(() => {
    setTableData();
});

let { tableRowKey, tableSelection, changeTableSelection } = useCommonTable("key");

// 表头设置
let headerConfigModal = ref({
    show: false
});

let openHeaderConfigModal = () => {
    headerConfigModal.value.show = true;
};

let confirmDynamicTableHeader = () => {
    tableColumns.value = createTableColumns();
    setTableData();
    tableData.value = [];
    headerConfigModal.value.show = false;
};

let dynamicTableHeader = ref<DynamicTableHeaderProps[]>([]);

// 表格列配置
let tableColumnCount = ref(0);

let createTableColumns = () => {
    let dynamicData: DataTableColumns<DynamicTableRowProps> = dynamicTableHeader.value.map((item) => {
        return {
            title: item.title,
            key: item.key,
            align: "center",
            render: (row: DynamicTableRowProps, index: number) => {
                return h(NInput, {
                    value: row.name,
                    placeholder: `请输入${item.title}`,
                    onUpdateValue: (v) => (tableData.value[index][item.key] = v)
                });
            }
        };
    });
    return [{ type: "selection" }, ...dynamicData];
};

let tableColumns = ref(createTableColumns());

// 表格数据配置
let tableData = ref<DynamicTableRowProps[]>([]);

let createTableRow = () => {
    let keyArray: string[] = dynamicTableHeader.value.map((item) => item.key);
    let tableRow: DynamicTableRowProps = {};
    keyArray.forEach((item) => {
        tableRow[item] = "";
    });
    return {
        key: new Date().getTime(),
        ...tableRow
    };
};

let setTableData = () => {
    tableData.value = [];
    for (let i = 0; i < tableColumnCount.value; i++) {
        tableData.value.push(createTableRow());
    }
};

let addTableRow = () => {
    tableColumnCount.value += 1;
    tableData.value.push(createTableRow());
};

let deleteTableRow = () => {
    if (tableSelection.value.length === 0) {
        window.$message.error("请先选择要删除的行");
        return false;
    }
    tableData.value = tableData.value.filter((item) => !tableSelection.value.includes(item.key));
};
</script>
