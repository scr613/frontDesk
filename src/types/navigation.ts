import { NavigationType,RootStackParamLists } from '../Router/RouteDB';

// 导出路由相关类型
export type { NavigationType };

// 定义导航参数类型
export type NavigationParams = {
    [K in keyof RootStackParamList]: RootStackParamList[K];
};

// 定义路由状态类型
export interface RouteState {
    index: number;
    routes: Array<{
        name: keyof RootStackParamList;
        params?: NavigationParams[keyof NavigationParams];
    }>;
}

// 定义导航事件类型
export type NavigationEvent = {
    data: {
        action: {
            type: string;
            payload?: any;
        };
        state: RouteState;
    };
};

export type RootStackParamList = RootStackParamLists
