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
            <n-data-table
                :loading="tableLoading"
                :columns="tableColumns"
                :data="tableData"
                :pagination="tablePagination"
                :row-key="(row) => row.id"
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
import { h, onMounted, ref } from "vue";
import type { DataTableColumns, PaginationProps } from "naive-ui";
import { NCard, NDataTable } from "naive-ui";
import type { TableSearchbarConfig, TableSearchbarData, TableSearchbarOptions } from "@/components/TableSearchbar";
import { TableSearchbar } from "@/components/TableSearchbar";
import { TableActions } from "@/components/TableActions";
import { GET_MENU_LIST } from "@/api/permission/menu";
import { useCommonTable } from "@/hooks";

type RowProps = {
    id: string | number;
    username: string;
    nickname: string;
    phone: string | number;
};

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
let { tableData, tableLoading, tableSelection, changeTableSelection } = useCommonTable();

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
                        onClick: () => {
                            console.log(111, row);
                        }
                    },
                    {
                        label: "删除",
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

let tablePagination = ref<PaginationProps>({
    page: 1,
    pageSize: 10,
    itemCount: 0,
    pageSizes: [10, 50, 100],
    showSizePicker: true,
    showQuickJumper: true,
    displayOrder: ["size-picker", "pages", "quick-jumper"],
    onChange: (page: number) => {
        tablePagination.value.page = page;
        getTableData();
    },
    onUpdatePageSize: (pageSize: number) => {
        tablePagination.value.pageSize = pageSize;
        tablePagination.value.page = 1;
        getTableData();
    }
});

let getTableData = () => {
    tableLoading.value = true;
    GET_MENU_LIST({}).then((res) => {
        tableData.value = res.data.data;
        tablePagination.value.itemCount = res.data.total;
        tableLoading.value = false;
    });
};

let onSubmit = () => {
    console.log(searchForm.value);
    console.log(tableSelection.value);
};
</script>
