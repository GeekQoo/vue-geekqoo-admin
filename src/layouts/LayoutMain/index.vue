<template>
    <n-layout-content :native-scrollbar="false">
        <div class="page-container">
            <transition name="fade-slide" mode="out-in" appear>
                <router-view />
            </transition>
        </div>
    </n-layout-content>
</template>

<script lang="ts" setup>
import { NLayoutContent } from "naive-ui";
</script>
