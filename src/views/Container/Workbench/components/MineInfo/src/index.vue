<template>
    <div class="flex items-center p-4">
        <div class="flex items-center">
            <n-avatar round :size="88" :src="storeUser.userData.avatar" />
            <div class="ml-4">
                <p class="m-0 pt-2">早安，{{ storeUser.userData.username }}，今天又是充满活力的一天！</p>
                <p class="m-0 pt-2">今日多云转晴，20℃ - 25℃！</p>
            </div>
        </div>
        <div class="flex items-center ml-a">
            <n-space size="large">
                <n-statistic label="项目数">18</n-statistic>
                <n-statistic label="待办">66</n-statistic>
                <n-statistic label="消息">88</n-statistic>
            </n-space>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useStoreUser } from "@/store";

let storeUser = useStoreUser();
</script>
