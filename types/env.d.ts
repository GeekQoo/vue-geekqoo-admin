interface ImportMetaEnv {
    readonly VITE_BASE_PATH: string;
    readonly VITE_OUTPUT_DIR: string;
    readonly VITE_API_URL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
