<template>
    <n-layout-content :native-scrollbar="false">
        <div class="page-container">
            <router-view />
        </div>
    </n-layout-content>
</template>

<script lang="ts" setup>
import { NLayoutContent } from "naive-ui";
</script>
