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
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { NCard } from "naive-ui";
import {
    TableSearchbar,
    TableSearchbarConfig,
    TableSearchbarData,
    TableSearchbarOptions
} from "@/components/TableSearchbar";

onMounted(() => {
    getSearchOptions();
});

// 搜索项
let searchConfig = ref<TableSearchbarConfig>([
    {
        prop: "username",
        type: "input",
        label: "用户名"
    },
    {
        prop: "type",
        type: "select",
        label: "用户类型"
    },
    {
        prop: "date",
        type: "date",
        label: "选择日期",
        dateFormat: "YYYY-MM-DD"
    },
    {
        prop: "datetime",
        type: "datetime",
        label: "日期时间",
        dateFormat: "YYYY-MM-DD hh:mm:ss"
    },
    {
        prop: "datetimerange",
        type: "datetimerange",
        label: "日期区间",
        dateFormat: "YYYY-MM-DD hh:mm:ss",
        span: 2
    }
]);

let searchOptions = ref<TableSearchbarOptions>({
    type: []
});

let searchForm = ref<TableSearchbarData>({
    username: null,
    type: null,
    date: null,
    datetime: null,
    datetimerange: null
});

let getSearchOptions = () => {
    setTimeout(() => {
        searchOptions.value.type = [
            { label: "超级管理员", value: 1 },
            { label: "普通用户", value: 2 }
        ];
    }, 3000);
};

let onSubmit = () => {
    console.log(searchForm.value);
};
</script>
