<template>
    <naive-provider>
        <router-view />
    </naive-provider>
</template>

<script lang="ts" setup>
import { NaiveProvider } from "@/components/NaiveProvider";
import { onMounted } from "vue";
import { useStoreUser } from "@/store";

let storeUser = useStoreUser();

onMounted(() => storeUser.requestUserData());
</script>
