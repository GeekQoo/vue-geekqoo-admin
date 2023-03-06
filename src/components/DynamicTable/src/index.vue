<template>
    <div class="dynamic-table">
        <n-space class="mb-20px">
            <n-button secondary type="primary" @click="openHeaderModal">配置表头</n-button>
            <n-button :disabled="tableHeader.length <= 0" secondary type="success" @click="addTableRow">
                新增行
            </n-button>
            <n-button :disabled="tableHeader.length <= 0" secondary type="error" @click="deleteTableRow">
                删除行
            </n-button>
        </n-space>
        <!--表头配置-->
        <n-modal v-model:show="headerModal.show">
            <n-card class="w-500px" closable title="配置表头" @close="closeHeaderModal">
                <n-dynamic-input v-model:value="headerModal.list" :on-create="() => ({ title: '', key: '' })">
                    <template #create-button-default>新增</template>
                    <template #default="{ index, value }">
                        <n-grid x-gap="10" y-gap="10">
                            <n-grid-item :span="12">
                                <n-input
                                    v-model:value="headerModal.list[index].title"
                                    placeholder="请输入表头标题"
                                    type="text"
                                />
                            </n-grid-item>
                            <n-grid-item :span="12">
                                <n-input
                                    v-model:value="headerModal.list[index].key"
                                    placeholder="请输入表头Key"
                                    type="text"
                                />
                            </n-grid-item>
                        </n-grid>
                    </template>
                </n-dynamic-input>
                <n-alert v-if="tableHeader.length > 0" class="mt-20px" type="warning">
                    重新生成表头会清空已输入数据，请谨慎处理！
                </n-alert>
                <n-space class="mt-20px">
                    <n-button type="primary" @click="setTableHeader">生成表头</n-button>
                </n-space>
                <pre v-if="debug">{{ JSON.stringify(tableHeader, null, 2) }}</pre>
            </n-card>
        </n-modal>
        <n-data-table
            :columns="tableColumns"
            :data="tableRow"
            :row-key="tableRowKey"
            :single-line="false"
            bordered
            striped
            @update:checked-row-keys="changeTableSelection"
        />
        <pre v-if="debug">{{ JSON.stringify(tableRow, null, 2) }}</pre>
    </div>
</template>

<script lang="ts" setup>
import { h, ref } from "vue";
import type { DataTableColumns } from "naive-ui";
import { NInput } from "naive-ui";
import { useCommonTable } from "@/hooks";
import type { DynamicTableHeaderProps, DynamicTableRowProps } from "@/components/DynamicTable";

let props = defineProps({
    debug: { type: Boolean, default: false }
});

let { tableRowKey, tableSelection, changeTableSelection, checkTableSelectionEmpty } = useCommonTable("key");

// 表头配置
let headerModal = ref<{
    show: boolean;
    list: DynamicTableHeaderProps[];
}>({
    show: false,
    list: []
});

let openHeaderModal = () => (headerModal.value.show = true);

let closeHeaderModal = () => (headerModal.value.show = false);

let tableHeader = ref<DynamicTableHeaderProps[]>([]);

let setTableHeader = () => {
    tableHeader.value = headerModal.value.list;
    tableColumns.value = createTableColumns();
    clearTableRow();
    closeHeaderModal();
};

// NDataTable列配置
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
                    onUpdateValue: (v) => (tableRow.value[index][item.key] = v)
                });
            }
        };
    });
    return [{ type: "selection" }, ...dynamicData];
};

let tableColumns = ref();

// NDataTable行配置
let tableRowCount = ref(0);

let tableRow = ref<DynamicTableRowProps[]>([]);

let createTableRow = () => {
    let keyArray = tableHeader.value.map((item) => item.key);
    let tableRow: DynamicTableRowProps = Object.fromEntries(keyArray.map((key) => [key, ""]));
    return { key: new Date().getTime(), ...tableRow };
};

let clearTableRow = () => {
    tableRow.value = [];
    tableRowCount.value = 0;
};

let addTableRow = () => {
    tableRowCount.value += 1;
    tableRow.value.push(createTableRow());
};

let deleteTableRow = () => {
    checkTableSelectionEmpty("请先选择要删除的行");
    tableRow.value = tableRow.value.filter((item) => !tableSelection.value.includes(item.key));
};
</script>
