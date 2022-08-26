import { MockMethod } from "vite-plugin-mock";

export default [
    {
        url: "/mock/api/getUserList",
        method: "get",
        response: () => ({
            code: 1,
            "data|100": [
                {
                    id: "@natural(0,100)",
                    username: "@first",
                    nickname: "@cname",
                    "phone|1": ["13111111111", "13888888888", "18966666666", "15922222222"]
                }
            ],
            message: "ok",
            type: "success",
            total: 100,
            pageSize: 10,
            currentPage: 1
        })
    }
] as MockMethod[];
