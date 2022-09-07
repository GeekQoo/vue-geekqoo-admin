<template>
    <n-icon :component="iconCompoent" />
</template>

<script lang="ts" setup>
import { NIcon } from "naive-ui";
import { computed, defineAsyncComponent } from "vue";

let props = defineProps(["icon"]);

let iconCompoent = computed(() => {
    return defineAsyncComponent(async () => {
        return ((await import("@vicons/antd")) as any)[props.icon];
    });
});
</script>
