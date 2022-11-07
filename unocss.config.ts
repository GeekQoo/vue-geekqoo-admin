import { defineConfig } from "unocss";

export default defineConfig({
    exclude: ["node_modules", ".git", ".idea", "dist", "public", "build"],
    rules: [
        [/^flex-fixed-(\d+)$/, ([, d]) => ({ flex: `0 0 ${d}px` })],
        [/^wh-(.+)$/, ([, d]) => ({ width: `${d}`, height: `${d}` })],
        [/^ptb-(.+)$/, ([, d]) => ({ "padding-top": `${d}`, "padding-bottom": `${d}` })],
        [/^plr-(.+)$/, ([, d]) => ({ "padding-left": `${d}`, "padding-right": `${d}` })],
        [/^mtb-(.+)$/, ([, d]) => ({ "margin-top": `${d}`, "margin-bottom": `${d}` })],
        [/^mlr-(.+)$/, ([, d]) => ({ "margin-left": `${d}`, "margin-right": `${d}` })]
    ],
    shortcuts: {
        "flex-center": "flex justify-center items-center",
        "flex-x-center": "flex justify-center",
        "flex-y-center": "flex items-center",
        "absolute-tl": "absolute top-0 left-0",
        "absolute-tr": "absolute top-0 right-0 ",
        "absolute-bl": "absolute bottom-0 left-0",
        "absolute-br": "absolute bottom-0 right-0",
        "transition-base": "transition-all duration-300 ease-in-out"
    }
});
