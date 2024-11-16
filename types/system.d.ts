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
        globalLoading: boolean;
    }

    // 菜单信息
    interface MenuProps {
        type: string | number; // 1:目录 2:菜单 3:按钮
        label: string;
        key: string;
        icon?: string;
        children?: MenuProps[];
    }

    // 用户信息
    interface UserDataProps {
        username?: string;
        avatar?: string;
        menu?: MenuProps[];
    }
}
