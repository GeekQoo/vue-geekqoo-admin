import type { MenuOption } from "naive-ui";

declare global {
    declare namespace App {
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
        interface MenuProps extends MenuOption {
            type: string | number; // 1:目录 2:菜单 3:按钮
        }

        // 用户信息
        interface UserDataProps {
            username?: string;
            avatar?: string;
            menu?: MenuProps[];
        }
    }
}
