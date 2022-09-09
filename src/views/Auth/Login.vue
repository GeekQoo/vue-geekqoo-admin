<template>
    <n-element tag="div" class="auth-login flex-center">
        <n-card class="login-box w-100 p-2 border-rd-4 filter-drop-shadow">
            <div class="logo-box flex-center">
                <span>GeekQoo后台模板</span>
            </div>
            <n-input class="mt-4" v-model:value="loginForm.username" placeholder="请输入用户名" size="large" />
            <n-input
                v-model:value="loginForm.password"
                class="mt-4"
                placeholder="请输入密码"
                type="password"
                size="large"
            />
            <div class="mt-4 flex-y-center">
                <n-checkbox v-model:checked="isSavePassword">保存密码</n-checkbox>
                <a class="forget-password ml-a cursor-pointer transition-200">忘记密码？</a>
            </div>
            <n-button class="mt-4" block type="primary" size="large">登录</n-button>
            <n-divider>其它账号登录</n-divider>
            <n-space>
                <n-button type="primary" ghost>测试账号</n-button>
                <n-button type="primary" ghost>测试账号</n-button>
            </n-space>
        </n-card>
    </n-element>
</template>

<script lang="ts" setup>
import { NElement, NCard, NSpace, NInput, NButton, NCheckbox, NDivider } from "naive-ui";
import { ref } from "vue";

let loginForm = ref({
    username: "",
    password: ""
});

let isSavePassword = ref(false);
</script>

<style lang="scss">
.auth-login {
    width: 100vw;
    height: 100vh;
    background: #dee8ff;

    .login-box {
        .logo-box {
            font-size: 30px;
            color: var(--primary-color);
            font-weight: bold;
        }

        .forget-password {
            &:hover {
                color: var(--primary-color);
            }
        }
    }
}
</style>
