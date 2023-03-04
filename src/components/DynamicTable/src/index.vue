<template>
    <div class="dynamic-table">
        <n-space class="mb-20px">
            <n-button secondary type="primary" @click="openTableHeaderModal">配置表头</n-button>
            <n-button secondary type="success" @click="addTableRow">新增行</n-button>
            <n-button secondary type="error" @click="deleteTableRow">删除行</n-button>
        </n-space>
        <!--表头配置-->
        <n-modal v-model:show="tableHeaderModal.show">
            <n-card class="w-500px" closable title="配置表头" @close="closeTableHeaderModal">
                <n-dynamic-input v-model:value="tableHeader" :on-create="() => ({ title: '', key: '' })">
                    <template #create-button-default>新增</template>
                    <template #default="{ index, value }">
                        <n-grid x-gap="10" y-gap="10">
                            <n-grid-item :span="12">
                                <n-input
                                    v-model:value="tableHeader[index].title"
                                    placeholder="请输入表头标题"
                                    type="text"
                                />
                            </n-grid-item>
                            <n-grid-item :span="12">
                                <n-input
                                    v-model:value="tableHeader[index].key"
                                    placeholder="请输入表头Key"
                                    type="text"
                                />
                            </n-grid-item>
                        </n-grid>
                    </template>
                </n-dynamic-input>
                <n-alert class="mt-20px" type="warning">重新生成表头会清空已输入数据，请谨慎处理！</n-alert>
                <n-space class="mt-20px">
                    <n-button type="primary" @click="setTableHeader">生成表头</n-button>
                </n-space>
                <pre v-if="debug">{{ JSON.stringify(tableHeader, null, 2) }}</pre>
            </n-card>
        </n-modal>
        <n-data-table
            :columns="tableColumns"
            :data="tableData"
            :row-key="tableRowKey"
            :single-line="false"
            bordered
            striped
            @update:checked-row-keys="changeTableSelection"
        />
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
    debug: { type: Boolean, default: false }
});

onMounted(() => setTableData());

let { tableRowKey, tableSelection, changeTableSelection } = useCommonTable("key");

// 表头设置
let tableHeaderModal = ref({ show: false });

let openTableHeaderModal = () => {
    tableHeaderModal.value.show = true;
};

let closeTableHeaderModal = () => {
    tableHeaderModal.value.show = false;
};

let setTableHeader = () => {
    tableColumns.value = createTableColumns();
    setTableData();
    tableData.value = [];
    closeTableHeaderModal();
};

let tableHeader = ref<DynamicTableHeaderProps[]>([]);

// 表格列配置
let tableColumnCount = ref(0);

let createTableColumns = () => {
    let dynamicData: DataTableColumns<DynamicTableRowProps> = tableHeader.value.map((item) => {
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
    let keyArray: string[] = tableHeader.value.map((item) => item.key);
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
