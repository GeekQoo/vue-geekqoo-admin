<template>
    <n-icon :component="iconCompoent" />
</template>

<script lang="ts" setup>
import { NIcon } from "naive-ui";
import { computed } from "vue";
import * as icons from "@vicons/antd";

let props = defineProps(["icon"]);

let iconCompoent = computed(() => (icons as any)[props.icon]);
</script>
