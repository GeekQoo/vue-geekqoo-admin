import { MockMethod } from "vite-plugin-mock";

export default [
    {
        url: "/mock/api/user",
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
    },
    {
        url: "/mock/api/user",
        method: "delete",
        timeout: 1000,
        response: () => ({
            code: 1,
            message: "ok",
            type: "success"
        })
    },
    {
        url: "/mock/api/getMenuList",
        method: "get",
        timeout: 1000,
        response: () => ({
            code: 1,
            "data|10": [
                {
                    id: "@natural(0,10000)",
                    name: "@ctitle(4)",
                    parentName: "@ctitle(4)",
                    "icon|1": [
                        "ProjectOutlined",
                        "UserOutlined",
                        "HeartOutlined",
                        "FundViewOutlined",
                        "AppstoreOutlined",
                        "CarOutlined",
                        "ClearOutlined",
                        "CodepenOutlined"
                    ]
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
