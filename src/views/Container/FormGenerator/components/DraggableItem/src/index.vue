<template>
    <div
        :style="{ flex: `0 0 ${(element.row / 6) * 100}%` }"
        class="draggable-item flex-y-center box-border p-2"
        @contextmenu="openContextMenu"
    >
        <span
            v-if="element.showLabel"
            :style="{ flex: `0 0 ${element.labelWidth ? element.labelWidth + 'px' : 'auto'}` }"
            class="text-right mr-4"
        >
            {{ element.label }}
        </span>
        <template v-if="element.type === 'button'">
            <n-button block class="flex-1">
                {{ element.buttonText }}
            </n-button>
        </template>
        <template v-if="element.type === 'input'">
            <n-input class="flex-1" />
        </template>
        <n-dropdown
            :on-clickoutside="contextMenuClickoutside"
            :options="contextMenuOptions"
            :show="contextMenuShow"
            :x="contextMenuPosition.x"
            :y="contextMenuPosition.y"
            trigger="manual"
            @select="contextMenuSelect"
        />
    </div>
</template>

<script lang="ts" setup>
import { NButton, NDropdown, NInput } from "naive-ui";
import { nextTick, ref } from "vue";
import { renderDynamicIcon } from "@/components/DynamicIcon";

let props = defineProps({
    element: {
        type: Object,
        default: () => ({})
    },
    showMenu: {
        type: Boolean,
        default: false
    }
});

let emits = defineEmits(["update:element", "edit", "delete"]);

// 右键菜单
let contextMenuShow = ref(false);

let contextMenuOptions = ref([
    { label: "编辑", key: "edit", icon: renderDynamicIcon("EditOutlined") },
    { label: "删除", key: "delete", icon: renderDynamicIcon("DeleteOutlined") }
]);

let contextMenuPosition = ref({
    x: 0,
    y: 0
});

let openContextMenu = (e: MouseEvent) => {
    if (!props.showMenu) return false;
    e.preventDefault();
    contextMenuShow.value = false;
    nextTick().then(() => {
        contextMenuShow.value = true;
        contextMenuPosition.value = {
            x: e.clientX,
            y: e.clientY
        };
    });
};

let contextMenuClickoutside = () => {
    contextMenuShow.value = false;
};

let contextMenuSelect = (key: string) => {
    contextMenuShow.value = false;
    if (key === "edit") {
        emits("edit");
    } else if (key === "delete") {
        emits("delete");
    }
};
</script>
