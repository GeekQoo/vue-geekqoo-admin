<template>
    <n-card hoverable>
        <DynamicTable v-model:table-header="tableHeader" debug />
    </n-card>
</template>

<script lang="ts" setup>
import { DynamicTable } from "@/components/DynamicTable";

import { ref, watch } from "vue";

let tableHeader = ref([{ title: "1", key: "1" }]);

watch(
    () => tableHeader.value,
    (val) => {
        console.log("使用", val);
    }
);
</script>

<style scoped></style>
