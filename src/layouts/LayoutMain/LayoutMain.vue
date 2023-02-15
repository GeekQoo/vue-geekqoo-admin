<template>
    <n-layout-content :native-scrollbar="false">
        <div class="page-container">
            <GlobalLoading v-if="storeDesign.globalLoading" />
            <router-view v-slot="{ Component }">
                <transition :name="storeDesign.pageAnimation" mode="out-in" appear>
                    <component :is="Component" />
                </transition>
            </router-view>
        </div>
    </n-layout-content>
</template>

<script lang="ts" setup>
import { GlobalLoading } from "@/components/GlobalLoading";
import { useStoreDesign } from "@/store";

let storeDesign = useStoreDesign();
</script>
