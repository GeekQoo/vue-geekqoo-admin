import { MockMethod } from "vite-plugin-mock";

export default [
    {
        url: "/mock/api/getUserList",
        method: "get",
        timeout: 1000,
        response: () => ({
            code: 1,
            "data|10": [
                {
                    id: "@natural(0,10000)",
                    username: "@first",
                    nickname: "@cname",
                    "phone|1": ["13111111111", "13888888888", "18966666666", "15922222222"]
                }
            ],
            message: "ok",
            type: "success",
            total: 50,
            pageSize: 10,
            currentPage: 1
        })
    }
] as MockMethod[];
