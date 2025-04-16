import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../types/navigation';

const HomePage = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();


    const uniRoute = () => {
        navigation.navigate('login');
    };

    return (
        <View style={styles.container}>
            <View>
                <Text>home页</Text>
            </View>
            <Button
                title="退出登录"
                onPress={uniRoute}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    homeHead: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 40,
        backgroundColor: '#f0f0f0',

    },

});

export default HomePage;
