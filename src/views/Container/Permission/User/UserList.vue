<template>
    <div class="user-list">
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
                :columns="tableColumns"
                :data="tableData"
                :pagination="tablePagination"
                :single-line="false"
                bordered
                striped
            />
        </n-card>
    </div>
</template>

<script lang="ts" setup>
import { h, onMounted, ref } from "vue";
import type { DataTableColumns } from "naive-ui";
import { NButton, NCard, NDataTable } from "naive-ui";
import type { TableSearchbarConfig, TableSearchbarData, TableSearchbarOptions } from "@/components/TableSearchbar";
import { TableSearchbar } from "@/components/TableSearchbar";
import { GET_USERINFO } from "@/api/permission/user";

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

// 数据列表
let tableData = ref([]);

let tableColumns = ref<DataTableColumns<RowProps>>([
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
        width: 100,
        render(row) {
            return h(
                NButton,
                {
                    size: "small",
                    type: "primary",
                    onClick: () => {
                        console.log(111, row);
                    }
                },
                { default: () => "编辑" }
            );
        }
    }
]);

let tablePagination = ref({
    pageSizes: [10, 100],
    showSizePicker: true,
    showQuickJumper: true,
    displayOrder: ["size-picker", "pages", "quick-jumper"],
    page: 1,
    pageSize: 10,
    itemCount: 0,
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
    GET_USERINFO({}).then((res) => {
        tableData.value = res.data.data;
        tablePagination.value.itemCount = res.data.total;
        console.log(111, res.data.data);
    });
};

let onSubmit = () => {
    console.log(searchForm.value);
};
</script>
