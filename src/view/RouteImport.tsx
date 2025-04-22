import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { routeDB } from '../Router/RouteDB';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    // 获取底部导航相关的路由配置
    const tabRoutes = routeDB.filter(route => 
        ['home', 'repayment', 'message', 'myself'].includes(route.name)
    );

    if (tabRoutes.length === 0) {
        return null;
    }

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#e54545',
                tabBarInactiveTintColor: '#999',
                tabBarStyle: {
                    height: 50,
                    paddingBottom: 5,
                },
            }}
        >
            {tabRoutes.map(route => (
                <Tab.Screen
                    key={route.name}
                    name={route.name}
                    component={route.component}
                    options={{
                        tabBarLabel: route.options?.title || route.name,
                    }}
                />
            ))}
        </Tab.Navigator>
    );
};

const RouteImport = () => {
    // 获取非底部导航的路由配置
    const stackRoutes = routeDB.filter(route => 
        !['home', 'repayment', 'message', 'myself'].includes(route.name)
    );

    if (stackRoutes.length === 0) {
        return null;
    }

    return (
        <NavigationContainer
            onStateChange={(state) => {
                if (state) {
                    const currentRoute = state.routes[state.index];
                    console.log('Current route:', currentRoute.name);
                }
            }}
        >
            <Stack.Navigator
                initialRouteName="start"
                screenOptions={{
                    headerShown: false,
                }}
            >
                {stackRoutes.map(route => (
                    <Stack.Screen
                        key={route.name}
                        name={route.name}
                        component={route.component}
                        options={route.options}
                    />
                ))}
                <Stack.Screen name="main" component={TabNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RouteImport;
