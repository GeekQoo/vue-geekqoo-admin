<template>
    <n-card hoverable>
        <DynamicTable v-model:value="tableData" v-model:header="tableHeader" :data-source="tableDataSource" debug />
    </n-card>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from "vue";
import type { DynamicTableHeaderProps } from "@/components/Dynamic";
import { DynamicTable } from "@/components/Dynamic";

let tableHeader = ref<DynamicTableHeaderProps[]>([
    { title: "测试表头1", key: "test1", type: "select", source: "source2" },
    { title: "测试表头2", key: "test2", type: "input", source: null },
    { title: "测试表头3", key: "test3", type: "input", source: null },
    { title: "测试表头4", key: "test4", type: "input", source: null }
]);

let tableDataSource = ref([
    {
        label: "数据来源1",
        value: "source1",
        defaultOptions: [
            { label: "11", value: "11" },
            { label: "12", value: "12" }
        ]
    },
    { label: "数据来源2", value: "source2", defaultOptions: [] }
]);

let tableData = ref([]);

onMounted(() => {
    setTimeout(() => {
        tableDataSource.value.forEach((item) => {
            if (item.value === "source2") {
                item.defaultOptions = [
                    { label: "21", value: "21" },
                    { label: "22", value: "22" }
                ];
            }
        });
    }, 1000);
});

watch(
    () => tableData.value,
    (val) => {
        console.log("使用", val);
    },
    { deep: true }
);
</script>
