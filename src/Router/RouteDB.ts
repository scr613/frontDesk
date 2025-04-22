import { NavigationProp } from '@react-navigation/native';
import HomePage from '../view/home/HomePage.tsx';
import LoginPage from '../view/login/LoginPage.tsx';
import StartPage from '../view/start/startPage.tsx';
import StartLogin from '../view/start/startLogin.tsx';
import RegisterPage from '../view/login/RegisterPage.tsx';

// import { lazy } from 'react';
// 路由配置类型定义
export interface RouteConfig {
    name: string;
    component: React.ComponentType<any>;
    options?: {
        title?: string;
        [key: string]: any;
    };
    auth?: boolean;
    params?: Record<string, any>;
    children?: RouteConfig[];
}

// 路由配置
export const routeDB: RouteConfig[] = [
    {
        name: 'start',
        component: StartPage,
        options: { title: '启动页' },
    },
    {
        name: 'home',
        component: HomePage,
        options: { title: '首页' },
    },
    {
        name: 'login',
        component: LoginPage,
        options: { title: '登录' },
    },
    {
        name: 'startLogin',
        component: StartLogin,
        options: { title: '启动登录' },
    },
    {
        name:'register',
        component: RegisterPage,
        options: { title: '注册' },
    },
];

// 从 routeDB 自动生成路由参数类型
type ExtractRouteNames<T extends RouteConfig[]> = {
    [K in T[number] as K['name']]: undefined
} & {
    [K in T[number] as K extends { children: RouteConfig[] }
        ? K['children'][number]['name']
        : never]: undefined
};

export type RootStackParamList = ExtractRouteNames<typeof routeDB>;

// 导航类型
export type NavigationType = NavigationProp<RootStackParamList>;
