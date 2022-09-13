<template>
    <naive-provider>
        <router-view />
    </naive-provider>
</template>

<script lang="ts" setup>
import { NaiveProvider } from "@/components/NaiveProvider";
import { useStoreUser } from "@/store";

// 刷新获取用户信息
let storeUser = useStoreUser();
storeUser.requestUserData();
</script>

<style lang="scss"></style>
