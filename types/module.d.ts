declare module "*.vue" {
    import type { DefineComponent } from "vue";
    const component: DefineComponent<{}, {}, any>;
    export default component;
}

// Naive-ui
interface Window {
    $loadingBar: import("naive-ui").LoadingBarProviderInst;
    $dialog: import("naive-ui").DialogProviderInst;
    $message: import("naive-ui").MessageProviderInst;
    $notification: import("naive-ui").NotificationProviderInst;
}
