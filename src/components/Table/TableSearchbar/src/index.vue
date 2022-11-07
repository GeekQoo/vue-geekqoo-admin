<template>
    <n-grid cols="1 600:2 800:3 1000:4 1500:5 2000:6" x-gap="15" y-gap="15">
        <template v-for="item in config">
            <n-grid-item :span="item.span || 1">
                <div class="flex-y-center">
                    <span :style="`flex:0 0 ${item.labelWidth || 'auto'}`">{{ item.label }}：</span>
                    <n-input
                        v-if="item.type === 'input'"
                        v-model:value="form[item.prop]"
                        :placeholder="`请输入${item.label}`"
                        class="flex-auto"
                        clearable
                        type="text"
                    />
                    <n-select
                        v-if="item.type === 'select'"
                        v-model:value="form[item.prop]"
                        :options="options[item.prop]"
                        :placeholder="`请选择${item.label}`"
                        class="flex-auto"
                        clearable
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
                        />
                        <n-date-picker
                            v-if="item.type === 'datetimerange'"
                            v-model:formatted-value="form[item.prop]"
                            :placeholder="`请选择${item.label}`"
                            :value-format="item.dateFormat"
                            class="flex-auto"
                            clearable
                            type="datetimerange"
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
                        />
                        <n-date-picker
                            v-if="item.type === 'datetimerange'"
                            v-model:value="form[item.prop]"
                            :placeholder="`请选择${item.label}`"
                            class="flex-auto"
                            clearable
                            type="datetimerange"
                        />
                    </template>
                </div>
            </n-grid-item>
        </template>
        <n-grid-item suffix>
            <n-space justify="end">
                <n-button type="primary" @click="onSearch">查询</n-button>
                <n-button type="error" @click="onReset">重置</n-button>
            </n-space>
        </n-grid-item>
    </n-grid>
</template>

<script lang="ts" setup>
import { onMounted, PropType, ref } from "vue";
import type { TableSearchbarConfig, TableSearchbarData, TableSearchbarOptions } from "@/components/Table";
import { cloneDeep } from "lodash-es";

let props = defineProps({
    config: {
        type: Array as PropType<TableSearchbarConfig>,
        default: () => []
    },
    options: {
        type: Object as PropType<TableSearchbarOptions>,
        default: () => {}
    },
    form: {
        type: Object as PropType<TableSearchbarData>,
        default: () => {}
    }
});

let emits = defineEmits(["update:form", "search", "reset"]);

// 默认值
let defaultForm = ref({});

onMounted(() => {
    defaultForm.value = cloneDeep(props.form);
});

// 搜索功能
let onSearch = async () => {
    let cloneForm = cloneDeep(props.form);
    await emits("update:form", cloneForm);
    emits("search", cloneForm);
};

// 重置功能
let onReset = async () => {
    let cloneForm = cloneDeep(defaultForm.value);
    await emits("update:form", cloneForm);
    emits("reset", cloneForm);
};
</script>
