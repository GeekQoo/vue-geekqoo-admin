<template>
    <naive-provider>
        <router-view />
    </naive-provider>
</template>

<script lang="ts" setup>
import { NaiveProvider } from "@/components/NaiveProvider";
// 模拟获取用户信息
import { GET_USERINFO } from "@/api/auth";
import { onMounted } from "vue";
import { useStoreUser } from "@/store";

let storeUser = useStoreUser();

onMounted(() => {
    getUserInfo();
});

let getUserInfo = () => {
    GET_USERINFO({}).then((res) => {
        storeUser.setUserData(res.data.data);
        console.log(res.data.data);
    });
};
</script>

<style lang="scss"></style>
