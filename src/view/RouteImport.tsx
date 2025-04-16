import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { routeDB } from '../Router/RouteDB';

const Stack = createNativeStackNavigator();

const RouteImport = () => {
    return (
        <NavigationContainer
            onStateChange={(state) => {
                // 可以在这里监听路由状态变化
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
                {routeDB.map((route) => {
                    const screens = [];
                    // 添加主路由
                    screens.push(
                        <Stack.Screen
                            key={route.name}
                            name={route.name}
                            component={route.component}
                            options={route.options}
                        />
                    );
                    // 添加子路由
                    if (route.children) {
                        route.children.forEach((child) => {
                            screens.push(
                                <Stack.Screen
                                    key={`${route.name}.${child.name}`}
                                    name={`${route.name}.${child.name}`}
                                    component={child.component}
                                    options={child.options}
                                />
                            );
                        });
                    }
                    return screens;
                })}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RouteImport;
