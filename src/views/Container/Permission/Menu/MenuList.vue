<template>
    <div class="menu-list">
        <n-card hoverable>
            <table-searchbar
                v-model:form="searchForm"
                :config="searchConfig"
                :options="searchOptions"
                @search="onSubmit"
            />
        </n-card>
        <n-card class="mt" hoverable>
            <n-space class="mb">
                <n-button secondary type="primary">新增</n-button>
                <n-button secondary type="error">删除</n-button>
            </n-space>
            <n-data-table
                :columns="tableColumns"
                :data="tableData"
                :loading="tableLoading"
                :pagination="tablePagination"
                :row-key="tableRowKey"
                :single-line="false"
                bordered
                remote
                striped
                @update:checked-row-keys="changeTableSelection"
            />
        </n-card>
    </div>
</template>

<script lang="ts" setup>
import { h, onMounted, reactive, ref } from "vue";
import type { DataTableColumns } from "naive-ui";
import type { TableSearchbarConfig, TableSearchbarData, TableSearchbarOptions } from "@/components/Table";
import { TableActions, TableSearchbar } from "@/components/Table";
import { DynamicIcon } from "@/components/DynamicIcon";
import { GET_MENU_LIST } from "@/api/permission/menu";
import { useCommonTable } from "@/hooks";

interface RowProps {
    id: string | number;
    name: string;
    parentName: string;
    icon: string;
}

onMounted(() => {
    getSearchOptions();
    getTableData();
});

// 搜索项
let searchConfig = ref<TableSearchbarConfig>([
    {
        prop: "name",
        type: "input",
        label: "菜单名称"
    },
    {
        prop: "parentName",
        type: "select",
        label: "父级菜单"
    }
]);

let searchOptions = ref<TableSearchbarOptions>({
    parentName: [
        { label: "父级菜单", value: 1 },
        { label: "菜单父级", value: 2 }
    ]
});

let searchForm = ref<TableSearchbarData>({
    name: null,
    parentName: null
});

let getSearchOptions = () => {};

// 数据列表
let { tableData, tableLoading, tableRowKey, tableSelection, changeTableSelection, tablePaginationPreset } =
    useCommonTable();

let tableColumns = ref<DataTableColumns<RowProps>>([
    {
        type: "selection"
    },
    {
        title: "ID",
        key: "id",
        align: "center"
    },
    {
        title: "菜单图标",
        key: "icon",
        align: "center",
        width: 80,
        render: (row) => h(DynamicIcon, { icon: row.icon, size: 25 })
    },
    {
        title: "菜单名称",
        key: "name",
        align: "center"
    },
    {
        title: "父级菜单",
        key: "parentName",
        align: "center"
    },
    {
        title: "操作",
        key: "actions",
        align: "center",
        width: 150,
        render(row) {
            return h(TableActions, {
                type: "button",
                buttonActions: [
                    {
                        label: "编辑",
                        tertiary: true,
                        onClick: () => {
                            console.log(111, row);
                        }
                    },
                    {
                        label: "删除",
                        tertiary: true,
                        type: "error",
                        onClick: () => {
                            console.log(222, row);
                        }
                    }
                ]
            });
        }
    }
]);

let tablePagination = reactive({
    ...tablePaginationPreset,
    onChange: (page: number) => {
        tablePagination.page = page;
        getTableData();
    },
    onUpdatePageSize: (pageSize: number) => {
        tablePagination.pageSize = pageSize;
        tablePagination.page = 1;
        getTableData();
    }
});

let getTableData = () => {
    tableLoading.value = true;
    GET_MENU_LIST({}).then((res) => {
        tableData.value = res.data.data;
        tablePagination.itemCount = res.data.total;
        tableLoading.value = false;
    });
};

let onSubmit = () => {
    console.log(searchForm.value);
    console.log(tableSelection.value);
};
</script>
