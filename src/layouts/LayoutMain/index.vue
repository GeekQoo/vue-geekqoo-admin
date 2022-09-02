<template>
    <n-layout-content :native-scrollbar="false">
        <div class="page-container">
            <router-view v-slot="{ Component }">
                <transition :name="storeDesign.getPageAnimation" mode="out-in" appear>
                    <component :is="Component" />
                </transition>
            </router-view>
        </div>
    </n-layout-content>
</template>

<script lang="ts" setup>
import { NLayoutContent } from "naive-ui";
import { useStoreDesign } from "@/store";

let storeDesign = useStoreDesign();
</script>
