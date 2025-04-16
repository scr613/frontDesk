import React, { useEffect, useMemo } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
    Animated,
    Platform,
} from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
type RootStackParamList = {
    Login: undefined;
};
const { width, height } = Dimensions.get('window');

const StartPage = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const fadeAnim = useMemo(() => new Animated.Value(0), []);
    useEffect(() => {
        // 直接开始动画
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1500,
            useNativeDriver: true,
        }).start();

        // 设置定时器跳转到登录页
        const timer = setTimeout(() => {
            navigation.navigate('login');
        }, 2000);

        return () => clearTimeout(timer);
    }, [navigation, fadeAnim]);


    return (
        <View style={styles.container}>
            <Animated.View style={[styles.content, { opacity: fadeAnim }]}>
                <Image
                    source={require('../../assets/logo.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />
                <Text style={styles.title}>荣获金球小微金融铂金奖</Text>
                <Text style={styles.version}>2018年世界银行、G20共同颁发</Text>
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#282b33',
        paddingHorizontal: width * 0.1,
        paddingTop: Platform.OS === 'ios' ? 40 : 20,
        marginTop: -height * 0.3,
    },
    content: {
        width: '100%',
        alignItems: 'center',
    },
    logo: {
        width: width * 0.4,
        height: width * 0.4,
        marginBottom: height * 0.03,
    },
    title: {
        fontSize: width * 0.08,
        fontWeight: 'bold',
        color: '#f0c06e',
        marginBottom: height * 0.02,
        textAlign: 'center',
    },
    version: {
        fontSize: width * 0.04,
        color: '#fff',
        textAlign: 'center',
    },
});

export default StartPage;
