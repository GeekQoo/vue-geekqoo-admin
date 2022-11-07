import type { ConfigEnv, UserConfigExport } from "vite";
import { loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { viteMockServe } from "vite-plugin-mock";
import autoprefixer from "autoprefixer";
import unocss from "unocss/vite";

export default ({ command, mode }: ConfigEnv): UserConfigExport => {
    // vite环境变量
    const viteEnv = loadEnv(mode, process.cwd());

    return {
        plugins: [
            vue(),
            unocss(),
            viteMockServe({
                mockPath: "mock",
                localEnabled: command === "serve",
                prodEnabled: command !== "serve",
                //  这样可以控制关闭mock的时候不让mock打包到最终代码内
                injectCode: `import { setupProdMockServer } from "../mock/mockProdServer";setupProdMockServer();`
            })
        ],
        base: viteEnv.VITE_BASE_PATH, // 开发或生产环境服务的公共基础路径。
        publicDir: "public", // 作为静态资源服务的文件夹。
        resolve: {
            // 设置别名
            alias: {
                "@": "/src/"
            }
        },
        build: {
            outDir: viteEnv.VITE_OUTPUT_DIR, // 指定输出路径（相对于项目根目录)。
            assetsDir: "static", // 指定生成静态资源的存放路径（相对于 build.outDir）。
            target: "es2015", // 设置最终构建的浏览器兼容目标。
            cssTarget: "chrome80" // 此选项允许用户为 CSS 的压缩设置一个不同的浏览器 target，此处的 target 并非是用于 JavaScript 转写目标。
        },
        css: {
            postcss: {
                plugins: [
                    autoprefixer({
                        overrideBrowserslist: ["Android >= 4.0", "iOS >= 7"]
                    })
                ]
            }
        },
        server: {
            host: true, // 指定服务器应该监听哪个 IP 地址。 如果将此设置为 0.0.0.0 或者 true 将监听所有地址，包括局域网和公网地址。
            port: 23333, // 指定开发服务器端口。
            open: false, // 是否自动打开浏览器。
            cors: false, // 为开发服务器配置 CORS。
            proxy: {
                // "/api": {
                //     target: "http://demo.demo",
                //     changeOrigin: true,
                //     ws: true
                // }
            }
        }
    };
};
