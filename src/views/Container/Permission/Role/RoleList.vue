<template>
    <n-card hoverable>
        <DynamicTable v-model:data="tableData" v-model:header="tableHeader" :data-source="tableDataSource" debug />
    </n-card>
</template>

<script lang="ts" setup>
import type { DynamicTableHeaderProps } from "@/components/Dynamic";
import { DynamicTable } from "@/components/Dynamic";

import { ref, watch } from "vue";

let tableHeader = ref<DynamicTableHeaderProps[]>([
    { title: "测试1", key: "test1", type: "select", source: null },
    { title: "测试2", key: "test2", type: "input", source: null }
]);

let tableDataSource = ref<{ label: string; value: string }[]>([
    { label: "数据来源1", value: "source1" },
    { label: "数据来源2", value: "source2" }
]);

let tableData = ref([]);

watch(
    () => tableData.value,
    (val) => {
        console.log("使用", val);
    },
    { deep: true }
);
</script>

<style scoped></style>
