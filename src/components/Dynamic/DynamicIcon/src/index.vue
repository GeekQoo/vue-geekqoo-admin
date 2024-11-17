<template>
    <n-icon :component="iconComponent" />
</template>

<script lang="ts" setup>
import { computed } from "vue";
import * as icons from "@vicons/antd";

const props = defineProps(["icon"]);

const iconComponent = computed(() => (icons as any)[props.icon]);
</script>
