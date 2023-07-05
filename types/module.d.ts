declare module "*.vue" {
    import type { DefineComponent } from "vue";
    const component: DefineComponent<{}, {}, any>;
    export default component;
}
declare module "autoprefixer";
declare module "lodash-es";
declare module "@vueuse/core";
declare module "dayjs";

// Naive-ui
interface Window {
    $loadingBar: import("naive-ui").LoadingBarProviderInst;
    $dialog: import("naive-ui").DialogProviderInst;
    $message: import("naive-ui").MessageProviderInst;
    $notification: import("naive-ui").NotificationProviderInst;
}
