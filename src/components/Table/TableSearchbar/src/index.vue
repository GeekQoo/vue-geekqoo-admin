<template>
    <n-grid cols="1 600:2 800:3 1000:4 1500:5 2000:6" x-gap="15" y-gap="15">
        <template v-for="item in config">
            <n-grid-item :span="item.span || 1">
                <div class="flex-y-center">
                    <span :style="`flex: 0 0 ${item.labelWidth || 80}px`">{{ item.label }}：</span>
                    <n-input
                        v-if="item.type === 'input'"
                        v-model:value="form[item.prop]"
                        :placeholder="`请输入${item.label}`"
                        class="flex-auto"
                        clearable
                        type="text"
                        @click="onComponentClick"
                    />
                    <n-select
                        v-if="item.type === 'select'"
                        v-model:value="form[item.prop]"
                        :label-field="item.labelField || 'label'"
                        :options="options[item.prop]"
                        :placeholder="`请选择${item.label}`"
                        :value-field="item.valueField || 'value'"
                        class="flex-auto"
                        clearable
                        @click="onComponentClick"
                    />
                    <!--日期时间组件-->
                    <template v-if="item.dateFormat">
                        <n-date-picker
                            v-if="item.type === 'date' || item.type === 'datetime'"
                            v-model:formatted-value="form[item.prop]"
                            :placeholder="`请选择${item.label}`"
                            :type="item.type"
                            :value-format="item.dateFormat"
                            class="flex-auto"
                            clearable
                            @click="onComponentClick"
                        />
                        <n-date-picker
                            v-if="item.type === 'datetimerange'"
                            v-model:formatted-value="form[item.prop]"
                            :placeholder="`请选择${item.label}`"
                            :value-format="item.dateFormat"
                            class="flex-auto"
                            clearable
                            type="datetimerange"
                            @click="onComponentClick"
                        />
                    </template>
                    <template v-else>
                        <n-date-picker
                            v-if="item.type === 'date' || item.type === 'datetime'"
                            v-model:value="form[item.prop]"
                            :placeholder="`请选择${item.label}`"
                            :type="item.type"
                            class="flex-auto"
                            clearable
                            @click="onComponentClick"
                        />
                        <n-date-picker
                            v-if="item.type === 'datetimerange'"
                            v-model:value="form[item.prop]"
                            :placeholder="`请选择${item.label}`"
                            class="flex-auto"
                            clearable
                            type="datetimerange"
                            @click="onComponentClick"
                        />
                    </template>
                </div>
            </n-grid-item>
        </template>
        <n-grid-item suffix>
            <n-space justify="end">
                <n-button type="primary" @click="onSearch">查询</n-button>
                <n-button type="error" @click="onReset">重置</n-button>
                <slot name="buttons" />
            </n-space>
        </n-grid-item>
    </n-grid>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref, watch } from "vue";
import type { TableSearchbarConfig, TableSearchbarData, TableSearchbarOptions } from "@/components/Table";
import { cloneDeep } from "lodash-es";
import { useThrottleFn } from "@vueuse/core";

const props = withDefaults(
    defineProps<{
        autoSearch?: boolean;
        config: TableSearchbarConfig;
        options: TableSearchbarOptions;
        form: TableSearchbarData;
    }>(),
    {
        autoSearch: () => false,
        config: () => [],
        options: () => ({}),
        form: () => ({})
    }
);

const emits = defineEmits(["update:form", "search", "componentClick", "reset"]);

const form = computed({
    get: () => props.form,
    set: (value) => emits("update:form", value)
});

// 默认值
const defaultForm = ref({});

onMounted(() => {
    defaultForm.value = cloneDeep(props.form);
});

// 聚焦事件
const onComponentClick = () => {
    emits("componentClick", form.value);
};

// 搜索功能
const onSearch = async () => {
    emits("search", form.value);
};

// 重置功能
const onReset = async () => {
    emits("reset", defaultForm.value);
};

const throttleSearch = useThrottleFn(() => {
    onSearch();
}, 200);

watch(
    () => cloneDeep(form.value),
    () => {
        if (props.autoSearch) {
            throttleSearch();
        }
    },
    {
        deep: true
    }
);
</script>
