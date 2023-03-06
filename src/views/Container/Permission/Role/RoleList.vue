<template>
    <n-card hoverable>
        <DynamicTable v-model:data="tableData" v-model:header="tableHeader" debug />
    </n-card>
</template>

<script lang="ts" setup>
import { DynamicTable } from "@/components/DynamicTable";

import { ref, watch } from "vue";

let tableHeader = ref([{ title: "测试", key: "test" }]);

let tableData = ref([
    {
        test: "123123",
        key: 1678093815209
    }
]);

watch(
    () => tableData.value,
    (val) => {
        console.log("使用", val);
    },
    { deep: true }
);
</script>

<style scoped></style>
