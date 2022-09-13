<template>
    <naive-provider>
        <router-view />
    </naive-provider>
</template>

<script lang="ts" setup>
import { NaiveProvider } from "@/components/NaiveProvider";
import { useStoreUser } from "@/store";

let storeUser = useStoreUser();

// 刷新获取用户信息
storeUser.requestUserData();
</script>

<style lang="scss"></style>
