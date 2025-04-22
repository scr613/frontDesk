import React, { useEffect, useMemo } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
    Animated,
    TouchableOpacity,
} from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../types/navigation';

const { width, height } = Dimensions.get('window');

const StartLogin = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const fadeAnim = useMemo(() => new Animated.Value(0), []);

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1500,
            useNativeDriver: true,
        }).start();
    }, [fadeAnim]);

    return (
        <View style={styles.container}>
            <View style={styles.overlay}>
                <Animated.View style={[styles.content, { opacity: fadeAnim }]}>
                    <Image
                        source={require('../../assets/logo.png')}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                    <Text style={styles.title}>一次授信 终身使用</Text>
                    <Text style={styles.subtitle}>随时随地 随借随还</Text>

                    <TouchableOpacity
                        style={styles.mainButton}
                        onPress={() => {}}
                    >
                        <Text style={styles.mainButtonText} onPress={() => navigation.navigate('login')}>测测我的额度</Text>
                    </TouchableOpacity>

                    <View style={styles.helpContainer}>
                        <Text style={styles.helpText}>如何测试我的额度？</Text>
                    </View>

                    <View style={styles.bottomButtons}>
                        <TouchableOpacity
                            style={styles.loginButton}
                            onPress={() => navigation.navigate('login')}
                        >
                            <Text style={styles.buttonText}>登录</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.registerButton}
                            onPress={() => navigation.navigate('register')}
                        >
                            <Text style={[styles.buttonText, styles.registerText]}>注册</Text>
                        </TouchableOpacity>
                    </View>
                </Animated.View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8ecef',
    },
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: width * 0.1,
    },
    logo: {
        width: width * 0.25,
        height: width * 0.25,
        marginBottom: height * 0.04,
    },
    title: {
        fontSize: width * 0.06,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: height * 0.02,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: width * 0.045,
        color: '#666',
        marginBottom: height * 0.06,
        textAlign: 'center',
    },
    mainButton: {
        backgroundColor: '#e54545',
        width: '100%',
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: height * 0.03,
    },
    mainButtonText: {
        color: '#fff',
        fontSize: width * 0.045,
        fontWeight: 'bold',
    },
    helpContainer: {
        marginBottom: height * 0.08,
    },
    helpText: {
        fontSize: width * 0.035,
        color: '#999',
        textDecorationLine: 'underline',
        lineHeight: 60,
    },
    helpButton: {
        backgroundColor: '#e54545',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        marginBottom: height * 0.08,
    },
    bottomButtons: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        position: 'absolute',
        bottom: height * 0.05,
    },
    loginButton: {
        marginRight: width * 0.1,
    },
    registerButton: {
        marginLeft: width * 0.1,
    },
    buttonText: {
        fontSize: width * 0.04,
        color: '#e54545',
    },
    registerText: {
        color: '#e54545',
    },
});

export default StartLogin;
