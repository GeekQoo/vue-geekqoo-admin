export default [
    // 登录
    {
        path: "/login",
        name: "Login",
        component: () => import("../views/Auth/Login.vue")
    },
    // 主体
    {
        path: "/",
        redirect: "/workbench",
        name: "Layout",
        component: () => import("../layouts/index.vue"),
        children: [
            {
                path: "/workbench",
                name: "Workbench",
                meta: {
                    title: "工作台",
                    breadcrumb: ["仪表盘", "工作台"]
                },
                component: () => import("../views/Container/Workbench/Workbench.vue")
            },
            {
                path: "/user/list",
                name: "UserList",
                meta: {
                    title: "用户列表",
                    breadcrumb: ["用户管理", "用户列表"]
                },
                component: () => import("../views/Container/Permission/User/UserList.vue")
            },
            {
                path: "/role/list",
                name: "RoleList",
                meta: {
                    title: "角色列表",
                    breadcrumb: ["用户管理", "角色列表"]
                },
                component: () => import("../views/Container/Permission/Role/RoleList.vue")
            }
        ]
    }
];
