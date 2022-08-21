import { MockMethod } from "vite-plugin-mock";

export default [
    {
        url: "/mock/api/getUserinfo",
        method: "get",
        response: () => ({
            code: 1,
            result: {
                username: "admin",
                nickname: "超级管理员",
                avatar: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            },
            message: "ok",
            type: "success"
        })
    }
] as MockMethod[];
