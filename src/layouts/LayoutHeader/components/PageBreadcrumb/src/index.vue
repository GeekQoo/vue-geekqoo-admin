<template>
    <div class="page-breadCrumb">
        <n-breadcrumb>
            <n-breadcrumb-item v-for="item in $route.meta.breadcrumb">{{ item }}</n-breadcrumb-item>
        </n-breadcrumb>
    </div>
</template>

<script lang="ts" setup>
import { usePublic } from "@/hooks";

let { $route } = usePublic();
</script>
