<template>
    <n-icon :component="iconComponent" />
</template>

<script lang="ts" setup>
import { computed } from "vue";
import * as icons from "@vicons/antd";

let props = defineProps(["icon"]);

let iconComponent = computed(() => (icons as any)[props.icon]);
</script>
