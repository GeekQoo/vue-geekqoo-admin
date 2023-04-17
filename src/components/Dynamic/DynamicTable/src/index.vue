<template>
    <div class="dynamic-table">
        <n-space class="mb-20px">
            <n-button secondary type="primary" @click="openHeaderModal">配置表头</n-button>
            <n-button :disabled="header.length <= 0" secondary type="success" @click="addTableRow"> 新增行</n-button>
            <n-button :disabled="header.length <= 0" secondary type="error" @click="deleteTableRow"> 删除行</n-button>
        </n-space>
        <!--表头配置-->
        <n-modal v-model:show="headerModal.show">
            <n-card class="w-800px" closable title="配置表头" @close="closeHeaderModal">
                <n-grid class="mb-10px" style="width: calc(100% - 88px)" x-gap="10" y-gap="10">
                    <n-grid-item v-for="item in ['表头标题', '表头key', '组件类型', '数据来源']" :span="6">
                        <n-tag :bordered="false" class="w-100% flex-center" size="large" type="primary">
                            {{ item }}
                        </n-tag>
                    </n-grid-item>
                </n-grid>
                <n-dynamic-input v-model:value="headerModal.list" :on-create="() => ({ title: '', key: '' })">
                    <template #create-button-default>新增</template>
                    <template #default="{ index, value }">
                        <n-grid x-gap="10" y-gap="10">
                            <n-grid-item :span="6">
                                <n-input
                                    v-model:value="headerModal.list[index].title"
                                    class="w-100%"
                                    placeholder="请输入表头标题"
                                    type="text"
                                />
                            </n-grid-item>
                            <n-grid-item :span="6">
                                <n-input
                                    v-model:value="headerModal.list[index].key"
                                    class="w-100%"
                                    placeholder="请输入表头Key"
                                    type="text"
                                />
                            </n-grid-item>
                            <n-grid-item :span="6">
                                <n-select
                                    v-model:value="headerModal.list[index].type"
                                    :options="typeOptions"
                                    class="w-100%"
                                    placeholder="请选择组件类型"
                                />
                            </n-grid-item>
                            <n-grid-item :span="6">
                                <n-select
                                    v-if="headerModal.list[index].type === 'select'"
                                    v-model:value="headerModal.list[index].source"
                                    :options="dataSource"
                                    class="w-100%"
                                    placeholder="请选择数据来源"
                                />
                                <n-tag v-else class="w-100% flex-center" size="large">无需数据源</n-tag>
                            </n-grid-item>
                        </n-grid>
                    </template>
                </n-dynamic-input>
                <n-alert v-if="header.length > 0" class="mt-20px" type="warning">
                    重新生成表头会清空已输入数据，请谨慎处理！
                </n-alert>
                <n-space class="mt-20px">
                    <n-button type="primary" @click="setTableHeader">生成表头</n-button>
                </n-space>
                <pre v-if="debug">{{ JSON.stringify(header, null, 2) }}</pre>
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
import { h, nextTick, ref, watch } from "vue";
import type { DataTableColumns, SelectGroupOption, SelectOption } from "naive-ui";
import { NInput, NSelect } from "naive-ui";
import { useCommonTable } from "@/hooks";
import type { DynamicTableHeaderProps, DynamicTableRowProps } from "@/components/Dynamic/DynamicTable";

interface Props {
    // 是否显示代码，默认false
    debug: boolean;
    // 表头配置
    header: DynamicTableHeaderProps[];
    // 表格数据
    value: DynamicTableRowProps[];
    // 下拉框数据来源
    dataSource: (SelectOption | SelectGroupOption)[];
}

let props = withDefaults(defineProps<Props>(), {
    debug: false,
    header: () => [],
    value: () => [],
    dataSource: () => []
});

let emits = defineEmits(["update:header", "update:value"]);

let { tableRowKey, tableSelection, changeTableSelection } = useCommonTable<DynamicTableRowProps>("key");

let typeOptions = [
    { label: "输入框", value: "input" },
    { label: "下拉框", value: "select" }
];

// 表头配置
let headerModal = ref({
    show: false,
    list: props.header
});

let openHeaderModal = () => (headerModal.value.show = true);

let closeHeaderModal = () => (headerModal.value.show = false);

let setTableHeader = async () => {
    emits("update:header", headerModal.value.list);
    await nextTick();
    tableColumns.value = createTableColumns();
    clearTableRow();
    closeHeaderModal();
};

// 选项管理
let optionList = ref<Record<string, (SelectOption | SelectGroupOption)[]>>({});

let setOptionList = () => {
    props.dataSource.forEach((item) => {
        optionList.value[item.value as string] = item.defaultOptions as (SelectOption | SelectGroupOption)[];
    });
};

watch(
    () => props.dataSource,
    (val) => setOptionList(),
    { deep: true, immediate: true }
);

// NDataTable列配置
let createTableColumns = () => {
    let dynamicData: DataTableColumns<DynamicTableRowProps> = props.header.map((item) => {
        return {
            title: item.title,
            key: item.key,
            align: "center",
            maxWidth: 500,
            resizable: true,
            render: (row: DynamicTableRowProps, index: number) => {
                if (item.type === "input") {
                    return h(NInput, {
                        value: row[item.key],
                        clearable: true,
                        placeholder: `请输入${item.title}`,
                        onUpdateValue: (v) => (tableData.value[index][item.key] = v)
                    });
                } else if (item.type === "select") {
                    return h(NSelect, {
                        value: row[item.key],
                        filterable: true,
                        clearable: true,
                        options: optionList.value[item.source as string],
                        placeholder: `请选择${item.title}`,
                        onUpdateValue: (v) => (tableData.value[index][item.key] = v)
                    });
                } else return "组件异常";
            }
        };
    });
    return dynamicData.length > 0 ? [{ type: "selection" }, ...dynamicData] : [];
};

let tableColumns = ref(createTableColumns());

// NDataTable行配置
let tableData = ref<DynamicTableRowProps[]>(props.value);

watch(
    () => tableData.value,
    (val) => emits("update:value", val),
    { deep: true }
);

let tableRowCount = ref(tableData.value.length);

let createTableRow = () => {
    let keyArray = props.header.map((item) => item.key);
    let tableRow: DynamicTableRowProps = Object.fromEntries(keyArray.map((key) => [key, null]));
    return { key: new Date().getTime(), ...tableRow };
};

let clearTableRow = () => {
    tableData.value = [];
    tableRowCount.value = 0;
};

let addTableRow = () => {
    tableRowCount.value += 1;
    tableData.value.push(createTableRow());
};

let deleteTableRow = () => {
    if (tableSelection.value.length < 1) {
        window.$message.error("请先选择要删除的行");
        return false;
    }
    tableData.value = tableData.value.filter((item) => !tableSelection.value.includes(item.key));
};
</script>
