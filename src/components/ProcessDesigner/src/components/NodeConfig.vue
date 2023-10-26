<template>
    <div>
        <n-drawer
            v-model:show="show"
            :block-scroll="false"
            :trap-focus="false"
            placement="right"
            to=".process-designer"
            @update:show="changeModalShow(false)"
        >
            <n-drawer-content closable title="节点配置">
                <n-form label-placement="left" label-width="auto">
                    <n-form-item label="节点ID:">
                        <n-input :default-value="id" disabled />
                    </n-form-item>
                    <n-form-item label="审批人员:">
                        <n-select
                            :options="userSelect.options"
                            v-model:value="userSelect.value"
                            @update:value="changeUserSelect"
                        />
                    </n-form-item>
                </n-form>
            </n-drawer-content>
        </n-drawer>
    </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";

let props = withDefaults(
    defineProps<{
        show: boolean;
        id: string;
        modeler: any;
    }>(),
    { show: () => false }
);

let emits = defineEmits(["update:show"]);

let show = computed({ get: () => props.show, set: (val) => changeModalShow(val) });

let changeModalShow = (show: boolean) => {
    emits("update:show", show);
};

// 模拟审批人
interface UserSelectProps {
    options: Record<string, string>[];
    value: Nullable<string>;
}

let userSelect = ref<UserSelectProps>({
    options: [
        { label: "张三", value: "1" },
        { label: "李四", value: "2" },
        { label: "王五", value: "3" }
    ],
    value: null
});

let changeUserSelect = (value: string, obj: Record<string, string>) => {
    let modeling = props.modeler.get("modeling");
    let elementRegistry = props.modeler.get("elementRegistry");
    modeling.updateProperties(elementRegistry._elements[props.id].element, {
        name: `${obj.label}审批`
    });
};
</script>
