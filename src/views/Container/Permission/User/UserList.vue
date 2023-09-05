<template>
    <div class="user-list">
        <n-card hoverable>
            <table-searchbar
                v-model:form="searchForm"
                :config="searchConfig"
                :options="searchOptions"
                @search="onSearch"
            />
        </n-card>
        <n-card class="mt" hoverable>
            <n-space class="mb">
                <n-button secondary type="primary">新增</n-button>
                <n-button secondary type="error" @click="onDelete()">删除</n-button>
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
                :checked-row-keys="tableSelection"
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
import { DELETE_USERS, GET_USER_LIST } from "@/api/permission/user";
import { useCommonTable } from "@/hooks";

interface RowProps {
    id: string | number;
    username: string;
    nickname: string;
    phone: string | number;
}

onMounted(() => {
    getSearchOptions();
    getTableData();
});

// 搜索项
let searchConfig = ref<TableSearchbarConfig>([
    {
        prop: "username",
        type: "input",
        label: "用户名"
    },
    {
        prop: "roleId",
        type: "select",
        label: "所属角色"
    },
    {
        prop: "createTime",
        type: "date",
        label: "注册时间",
        dateFormat: "yyyy-MM-dd"
    }
]);

let searchOptions = ref<TableSearchbarOptions>({
    roleId: [
        { label: "超级管理员", value: 1 },
        { label: "普通用户", value: 2 }
    ]
});

let searchForm = ref<TableSearchbarData>({
    username: null,
    roleId: null,
    createTime: null
});

let getSearchOptions = () => {};

let onSearch = () => {
    getTableData();
};

// 数据列表
let { tableData, tableLoading, tableRowKey, tableSelection, changeTableSelection, tablePaginationPreset } =
    useCommonTable<RowProps>("id");

let tableColumns: DataTableColumns<RowProps> = [
    {
        type: "selection"
    },
    {
        title: "ID",
        key: "id",
        align: "center"
    },
    {
        title: "用户名",
        key: "username",
        align: "center"
    },
    {
        title: "姓名",
        key: "nickname",
        align: "center"
    },
    {
        title: "手机号",
        key: "phone",
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
                        onClick: () => {}
                    },
                    {
                        label: "删除",
                        tertiary: true,
                        type: "error",
                        onClick: () => {
                            onDelete(row.id);
                        }
                    }
                ]
            });
        }
    }
];

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
    GET_USER_LIST<RowProps[]>({
        ...searchForm.value
    }).then((res) => {
        tableData.value = res.data.data ?? [];
        tablePagination.itemCount = res.data.total ?? 0;
        tableLoading.value = false;
    });
};

// 删除
let onDelete = (id?: string | number) => {
    if (!id && tableSelection.value.length < 1) {
        window.$message.error("请选择要删除的数据");
        return false;
    }
    window.$dialog.warning({
        title: "警告",
        content: `确定删除${id ? "该" : "选中"}用户吗？`,
        positiveText: "删除",
        negativeText: "取消",
        onPositiveClick: () => {
            DELETE_USERS({ ids: tableSelection.value.join(",") }).then((res) => {
                if (res.data.code === 1) {
                    window.$message.success("删除成功");
                    onSearch();
                }
            });
        }
    });
};
</script>
