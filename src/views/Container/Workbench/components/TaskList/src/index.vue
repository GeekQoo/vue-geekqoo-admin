<template>
    <div class="p-4 pt-0">
        <n-tabs type="line">
            <n-tab-pane name="待办" />
            <n-tab-pane name="已完成" />
        </n-tabs>
        <n-data-table
            :loading="tableLoading"
            :columns="tableColumns"
            :data="tableData"
            :row-key="tableRowKey"
            :single-line="false"
            bordered
            remote
            striped
        />
    </div>
</template>

<script lang="ts" setup>
import { useCommonTable } from "@/hooks";
import { onMounted, ref } from "vue";
import type { DataTableColumns } from "naive-ui";

interface RowProps {
    id: string | number;
    taskName: string;
    createName: string;
    createTime: string;
}

onMounted(() => {
    getTableData();
});

let { tableData, tableLoading, tableRowKey } = useCommonTable<RowProps>("id");

let tableColumns = ref<DataTableColumns<RowProps>>([
    {
        title: "任务名称",
        key: "taskName",
        align: "center"
    },
    {
        title: "发起人",
        key: "createName",
        align: "center"
    },
    {
        title: "发起时间",
        key: "createTime",
        align: "center"
    }
]);

let getTableData = () => {
    for (let i = 0; i < 5; i++) {
        tableData.value.push({
            id: i,
            taskName: "今天需要写12小时的代码",
            createName: "资本家",
            createTime: "2022-09-16"
        });
    }
};
</script>
