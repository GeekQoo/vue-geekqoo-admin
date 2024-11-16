import { defineConfig } from "unocss";

export default defineConfig({
    content: {
        pipeline: {
            exclude: ["node_modules", ".git", ".idea", "dist", "public", "build"]
        }
    },
    rules: [
        [/^flex-fixed-(\d+)$/, ([, d]) => ({ flex: `0 0 ${d}px` })],
        [/^wh-(.+)$/, ([, d]) => ({ width: `${d}`, height: `${d}` })]
    ],
    shortcuts: {
        "flex-center": "flex justify-center items-center",
        "flex-x-center": "flex justify-center",
        "flex-y-center": "flex items-center",
        "absolute-tl": "absolute top-0 left-0",
        "absolute-tr": "absolute top-0 right-0 ",
        "absolute-bl": "absolute bottom-0 left-0",
        "absolute-br": "absolute bottom-0 right-0",
        "fixed-tl": "fixed left-0 top-0",
        "fixed-tr": "fixed right-0 top-0",
        "fixed-bl": "fixed left-0 bottom-0",
        "fixed-br": "fixed right-0 bottom-0",
        "transition-base": "transition-all duration-300 ease-in-out",
        "wh-screen": "w-screen h-screen"
    }
});
