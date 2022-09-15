<template>
    <div class="workbench">
        <vue-draggable v-model="draggableList" class="draggable-container flex flex-wrap" item-key="index" tag="div">
            <template #item="{ element, index }">
                <n-card :class="index === 2 ? 'span-2' : 'span-1'" hoverable>
                    {{ element.title }}
                </n-card>
            </template>
        </vue-draggable>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { NCard } from "naive-ui";
import VueDraggable from "vuedraggable";

let draggableList = ref([
    { title: "测试模块1", name: "test1" },
    { title: "测试模块2", name: "test2" },
    { title: "测试模块3", name: "test3" },
    { title: "测试模块4", name: "test4" },
    { title: "测试模块5", name: "test5" }
]);
</script>

<style lang="scss" scoped>
.workbench {
    .draggable-container {
        margin: -5px;

        .n-card {
            margin: 5px;
        }

        .span-1 {
            flex: 0 0 calc(50% - 10px);
        }

        .span-2 {
            flex: 0 0 calc(100% - 10px);
        }
    }
}
</style>
