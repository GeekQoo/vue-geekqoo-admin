<template>
    <n-element class="form-generator" tag="div">
        <div class="flex">
            <form-components class="flex-fixed-300" />
            <form-preview v-model="componentProps" class="ml mr" />
            <form-props v-model="componentProps" class="flex-fixed-300" />
        </div>
    </n-element>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { FormComponents, FormPreview, FormProps } from "./components";
import type { FormGeneratorProps } from "./types";

// 选中组件属性
let componentProps = ref<FormGeneratorProps>({});
</script>

<style lang="scss" scoped>
.form-generator {
    height: calc(100vh - 145px);
}
</style>
