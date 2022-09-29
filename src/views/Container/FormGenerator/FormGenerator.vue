<template>
    <div class="form-generator flex">
        <ComponentSelector class="flex-1 mr-2" />
        <FormPreview v-model:dragList="formPreview" class="flex-1 ml-2" />
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
}
</style>
