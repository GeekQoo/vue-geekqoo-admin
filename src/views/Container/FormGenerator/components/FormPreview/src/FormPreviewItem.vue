<template>
    <n-form-item
        :label="element.label"
        :label-width="element.labelWidth"
        :show-label="element.showLabel"
        :show-require-mark="element.showRequireMark"
    >
        <template v-if="element.type === 'button'">
            <n-button :type="element.buttonType" block>
                {{ element.buttonText }}
            </n-button>
        </template>
        <template v-if="element.type === 'input'">
            <n-input :placeholder="`请输入${element.label}`" />
        </template>
        <template v-if="element.type === 'select'">
            <n-select
                :options="element.options"
                :placeholder="`请选择${element.label}`"
                label-field="label"
                value-field="value"
            />
        </template>
    </n-form-item>
</template>

<script lang="ts" setup>
let props = defineProps({
    element: { type: Object, default: () => ({}) }
});
</script>
