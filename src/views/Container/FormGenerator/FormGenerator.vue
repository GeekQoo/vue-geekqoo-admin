<template>
    <div class="form-generator flex">
        <ComponentSelector class="flex-1 mr-2" />
        <FormPreview class="flex-1 ml-2" v-model:dragList="formPreview" />
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { ComponentSelector, FormPreview } from "./components";

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
