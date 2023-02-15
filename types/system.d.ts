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
}
