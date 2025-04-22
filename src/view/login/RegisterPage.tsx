import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../types/navigation';

const RegisterPage = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const [phone, setPhone] = React.useState('');
    const [verifyCode, setVerifyCode] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleRegister = () => {

    };

    const handleGetVerifyCode = () => {

    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.backText}>{'<'}</Text>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>注册</Text>
                <TouchableOpacity onPress={() => navigation.navigate('login')}>
                    <Text style={styles.loginText}>去登录</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.welcomeContainer}>
                <Text style={styles.welcomeTitle}>欢迎测测您的额度</Text>
                <Text style={styles.welcomeSubtitle}>请使用本人实名认证的手机号码进行注册</Text>
            </View>

            <View style={styles.inputContainer}>
                <View style={styles.inputWrapper}>
                    <TextInput
                        style={styles.input}
                        placeholder="输入手机号码"
                        placeholderTextColor="#999"
                        value={phone}
                        onChangeText={setPhone}
                    />
                </View>

                <View style={styles.verifyCodeContainer}>
                    <View style={[styles.inputWrapper, styles.verifyCodeInput]}>
                        <TextInput
                            style={styles.input}
                            placeholder="输入验证码"
                            placeholderTextColor="#999"
                            value={verifyCode}
                            onChangeText={setVerifyCode}
                        />
                    </View>
                    <TouchableOpacity style={styles.getCodeButton} onPress={handleGetVerifyCode}>
                        <Text style={styles.getCodeText}>获取验证码</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.inputWrapper}>
                    <TextInput
                        style={styles.input}
                        placeholder="设置密码（6-20位数字或字母组成）"
                        placeholderTextColor="#999"
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                    />
                </View>
            </View>

            <View style={styles.agreementContainer}>
                <Text style={styles.agreementText}>
                    点击注册代表您同意
                    <Text style={styles.agreementLink}>《用户注册及使用协议》</Text>
                </Text>
            </View>

            <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
                <Text style={styles.registerButtonText}>确认注册</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        height: 44,
        backgroundColor: '#282c35',
    },
    backText: {
        fontSize: 24,
        color: '#fff',
        paddingHorizontal: 15,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '500',
        color: '#fff',
    },
    loginText: {
        fontSize: 16,
        color: '#fff',
    },
    welcomeContainer: {
        marginTop: 40,
        marginBottom: 30,
        paddingHorizontal: 20,
    },
    welcomeTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    welcomeSubtitle: {
        fontSize: 16,
        color: '#666',
    },
    inputContainer: {
        paddingHorizontal: 20,
    },
    inputWrapper: {
        backgroundColor: '#fff',
        borderRadius: 8,
        marginBottom: 15,
        paddingHorizontal: 15,
        height: 50,
        justifyContent: 'center',
    },
    input: {
        fontSize: 16,
        color: '#333',
    },
    verifyCodeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    verifyCodeInput: {
        flex: 1,
        marginRight: 10,
        marginBottom: 0,
    },
    getCodeButton: {
        backgroundColor: '#fff',
        height: 50,
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 15,
    },
    getCodeText: {
        color: '#e54545',
        fontSize: 14,
    },
    agreementContainer: {
        paddingHorizontal: 20,
        marginTop: 20,
    },
    agreementText: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
    },
    agreementLink: {
        color: '#e54545',
    },
    registerButton: {
        backgroundColor: '#e54545',
        marginHorizontal: 20,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    registerButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '500',
    },
});

export default RegisterPage;