<template>
    <div class="form-generator flex">
        <div class="flex-fixed-200">
            <ComponentPreview v-model:dragList="componentPreview" />
        </div>
        <div class="flex-1 ml-4">
            <FormPreview v-model:dragList="formPreview" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { ComponentPreview, FormPreview } from "./components";

let componentPreview = ref([{ name: "按钮", type: "button" }]);

let formPreview = ref([]);
</script>

<style lang="scss" scoped>
.form-generator {
    height: calc(100vh - 145px);

    .draggable-default {
    }

    .draggable-drag {
        opacity: 0.1;
    }

    .draggable-ghost {
        background: rgba(#000000, 0);
        border: 1px dashed #999999;
        width: 100%;

        :deep(.n-card-header) {
            opacity: 0;
        }

        :deep(.n-card__content) {
            border-color: transparent;
            opacity: 0;
        }
    }
}
</style>
