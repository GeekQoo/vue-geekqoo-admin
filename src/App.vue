<template>
    <naive-provider>
        <GlobalLoading v-if="storeDesign.getGlobalLoading" />
        <router-view />
    </naive-provider>
</template>

<script lang="ts" setup>
import { NaiveProvider } from "@/components/NaiveProvider";
import { GlobalLoading } from "@/components/GlobalLoading";
import { useStoreUser, useStoreDesign } from "@/store";

let storeUser = useStoreUser();
let storeDesign = useStoreDesign();

// 刷新获取用户信息
storeUser.requestUserData();
</script>

<style lang="scss"></style>
