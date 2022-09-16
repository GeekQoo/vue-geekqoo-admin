<template>
    <div class="flex items-center flex-wrap p-10px">
        <n-grid x-gap="10" y-gap="10">
            <n-grid-item v-for="index in 6" :span="8">
                <n-card class="text-center cursor-pointer" hoverable>
                    <dynamic-icon icon="UserOutlined" size="30" />
                    <span class="block mt-2">这是标题</span>
                </n-card>
            </n-grid-item>
        </n-grid>
    </div>
</template>

<script lang="ts" setup>
import { NCard, NGrid, NGridItem } from "naive-ui";
import { DynamicIcon } from "@/components/DynamicIcon";
</script>
