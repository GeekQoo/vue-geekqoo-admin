// 路由导航条
export interface NavigationProps {
    title: string;
    name: string;
}

// 系统设置
export interface DesignProps {
    currentTheme: string;
    pageAnimation: string;
    themeColor: string;
    pageZoom: number;
    globalLoading: boolean;
}

// 菜单信息
export interface MenuProps {
    type: string | number; // 1:目录 2:菜单 3:按钮
    label: string;
    key: string;
    icon?: string;
    children?: MenuProps[];
}

// 用户信息
export interface UserDataProps {
    username?: string;
    avatar?: string;
    menu?: MenuProps[];
}
