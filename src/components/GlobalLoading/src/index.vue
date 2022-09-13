<template>
    <div class="global-loading flex-center fixed top-0 left-0 w-screen h-screen z-99999">
        <n-result status="418" title="加载中" description="喝杯茶吧~" size="large">
            <!--<template #icon>-->
            <!--    <n-spin size="large" />-->
            <!--</template>-->
        </n-result>
    </div>
</template>

<script lang="ts" setup>
import { NResult, NSpin } from "naive-ui";
</script>

<style lang="scss" scoped>
.global-loading {
    background: #ffffff;
}
</style>
