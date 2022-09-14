import { MockMethod } from "vite-plugin-mock";

export default [
    {
        url: "/mock/api/login",
        method: "post",
        timeout: 1000,
        response: () => ({
            code: 1,
            data: {
                token: "0123456789"
            },
            message: "ok",
            type: "success"
        })
    },
    {
        url: "/mock/api/getUserinfo",
        method: "get",
        timeout: 1000,
        response: () => ({
            code: 1,
            data: {
                username: "admin",
                nickname: "超级管理员",
                avatar: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
                menu: [
                    {
                        label: "仪表盘",
                        key: 1,
                        icon: "ProjectOutlined",
                        children: [
                            {
                                label: "工作台",
                                key: "Workbench"
                            }
                        ]
                    },
                    {
                        label: "用户管理",
                        key: 0,
                        icon: "UserOutlined",
                        children: [
                            {
                                label: "用户列表",
                                key: "UserList"
                            },
                            {
                                label: "角色列表",
                                key: "RoleList"
                            }
                        ]
                    }
                ]
            },
            message: "ok",
            type: "success"
        })
    }
] as MockMethod[];
