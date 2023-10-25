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
                </n-form>
            </n-drawer-content>
        </n-drawer>
    </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";

let props = withDefaults(defineProps<{ show: boolean; id: string; modeler: any }>(), { show: () => false });

let emits = defineEmits(["update:show"]);

let show = computed({ get: () => props.show, set: (val) => changeModalShow(val) });

let changeModalShow = (show: boolean) => {
    emits("update:show", show);
};
</script>
