import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Message {
    id: string;
    text: string;
    isUser: boolean;
    timestamp: Date;
}

const AIPage = () => {
    const [messages, setMessages] = useState<Message[]>([
        { id: '1', text: '你好！我是AI助手，有什么可以帮你的吗？', isUser: false, timestamp: new Date() },
    ]);
    const [inputText, setInputText] = useState('');

    const sendMessage = () => {
        if (inputText.trim()) {
            const newMessage: Message = {
                id: Date.now().toString(),
                text: inputText,
                isUser: true,
                timestamp: new Date(),
            };
            setMessages(prev => [...prev, newMessage]);
            setInputText('');
            // 模拟AI回复
            setTimeout(() => {
                const aiResponse: Message = {
                    id: (Date.now() + 1).toString(),
                    text: '我收到了你的消息，正在思考回复...',
                    isUser: false,
                    timestamp: new Date(),
                };
                setMessages(prev => [...prev, aiResponse]);
            }, 1000);
        }
    };

    const renderMessage = ({ item }: { item: Message }) => (
        <View style={[styles.messageContainer, item.isUser ? styles.userMessage : styles.aiMessage]}>
            <Text style={styles.messageText}>{item.text}</Text>
            <Text style={styles.timestamp}>
                {item.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </Text>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={messages}
                renderItem={renderMessage}
                keyExtractor={item => item.id}
                style={styles.messageList}
                inverted={false}
            />
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={inputText}
                    onChangeText={setInputText}
                    placeholder="输入消息..."
                    multiline
                />
                <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
                    <Icon name="send" size={20} color="#fff" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        height: 60,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    messageList: {
        flex: 1,
        padding: 10,
    },
    messageContainer: {
        maxWidth: '80%',
        marginVertical: 5,
        padding: 10,
        borderRadius: 15,
    },
    userMessage: {
        alignSelf: 'flex-end',
        backgroundColor: '#007AFF',
    },
    aiMessage: {
        alignSelf: 'flex-start',
        backgroundColor: '#E5E5EA',
    },
    messageText: {
        fontSize: 16,
        color: '#333',
    },
    timestamp: {
        fontSize: 12,
        color: '#666',
        marginTop: 5,
        alignSelf: 'flex-end',
    },
    inputContainer: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
    },
    input: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 8,
        marginRight: 10,
        fontSize: 16,
    },
    sendButton: {
        width: 40,
        height: 40,
        backgroundColor: '#007AFF',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default AIPage;
