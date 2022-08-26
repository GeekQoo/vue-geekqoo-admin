<template>
    <n-grid cols="1 600:2 800:3 1000:4 1500:5 2000:6" x-gap="15" y-gap="15">
        <template v-for="item in config">
            <n-grid-item v-if="item.type !== 'datetimerange'">
                <div class="flex-y-center">
                    <span class="flex-fixed-80">{{ item.label }}：</span>
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
                    <template v-if="item.dateFormat">
                        <n-date-picker
                            v-if="item.type === 'date' || item.type === 'datetime'"
                            v-model:formatted-value="form[item.prop]"
                            :placeholder="`请选择${item.label}`"
                            :type="item.type"
                            :value-format="item.dateForamt"
                            class="flex-auto"
                            clearable
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
                    </template>
                </div>
            </n-grid-item>
            <n-grid-item v-else :span="2">
                <div class="flex-y-center">
                    <span class="flex-fixed-80">{{ item.label }}：</span>
                    <template v-if="item.dateFormat">
                        <n-date-picker
                            v-if="item.type === 'datetimerange'"
                            v-model:formatted-value="form[item.prop]"
                            :placeholder="`请选择${item.label}`"
                            :value-format="item.dateForamt"
                            class="flex-auto"
                            clearable
                            type="datetimerange"
                        />
                    </template>
                    <template v-else>
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
import { NButton, NDatePicker, NGrid, NGridItem, NInput, NSelect, NSpace } from "naive-ui";
import type { TableSearchbarConfig, TableSearchbarData, TableSearchbarOptions } from "@/components/TableSearchbar";
import _lodash from "lodash-es";

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
    defaultForm.value = _lodash.cloneDeep(props.form);
});

// 搜索功能
let onSearch = async () => {
    let cloneForm = _lodash.cloneDeep(props.form);
    await emits("update:form", cloneForm);
    emits("search", cloneForm);
};

// 重置功能
let onReset = async () => {
    let cloneForm = _lodash.cloneDeep(defaultForm.value);
    await emits("update:form", cloneForm);
    emits("reset", cloneForm);
};
</script>
