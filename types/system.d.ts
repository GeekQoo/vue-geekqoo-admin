import type { MenuOption } from "naive-ui";

declare global {
    declare namespace App {
        // 响应类型
        interface ResponseProps<T = unknown> {
            code: number;
            data?: T;
            total?: Nullable<number>;

            [key: string]: unknown;
        }

        // 路由导航条
        interface NavigationProps {
            title: string;
            name: string;
        }

        // 系统设置
        interface DesignProps {
            currentTheme: string;
            pageAnimation: string;
            themeColor: string;
            pageZoom: number;
            menuMode: string;
            globalLoading: boolean;
        }

        // 菜单信息
        type MenuProps = MenuOption & {
            type: string | number; // 1:目录 2:菜单 3:按钮
            children?: MenuProps[];
        };

        // 用户信息
        interface UserDataProps {
            username?: string;
            avatar?: string;
            menu?: MenuProps[];
        }
    }
}
