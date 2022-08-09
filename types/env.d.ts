interface ImportMetaEnv {
    readonly VITE_BASE_PATH: string;
    readonly VITE_OUTPUT_DIR: string;
    readonly VITE_API_URL: string;
    readonly VITE_USE_MOCK: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
