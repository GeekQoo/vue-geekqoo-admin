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
        redirect: "/user/list",
        name: "Layout",
        component: () => import("../layouts/index.vue"),
        children: [
            {
                path: "/user/list",
                name: "UserList",
                meta: {
                    title: "用户管理",
                    breadcrumb: ["用户管理"]
                },
                component: () => import("../views/Container/Permission/User/UserList.vue")
            },
            {
                path: "/role/list",
                name: "RoleList",
                meta: {
                    title: "角色管理",
                    breadcrumb: ["角色管理"]
                },
                component: () => import("../views/Container/Permission/Role/RoleList.vue")
            }
        ]
    }
];
