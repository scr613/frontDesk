import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import { RootStackParamList } from '../../types/navigation';

const { width } = Dimensions.get('window');

const HomePage = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();


    const imgSwiper = [
        {
            _id: '1',
            imgUrl: 'https://picsum.photos/800/400',
        },
        {
            _id: '2',
            imgUrl: 'https://picsum.photos/800/400?random=2',
        },
        {
            _id: '3',
            imgUrl: 'https://picsum.photos/800/400?random=3',
        },
    ];

    // 添加贷款产品数据
    const loanProducts = [
        {
            id: '1',
            title: '公积金贷',
            maxAmount: 150000,
            description: '公积金交满1年即可申请',
        },
        {
            id: '2',
            title: '芝麻贷',
            maxAmount: 100000,
            description: '芝麻信用分600以上即可申请',
        },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.swiperContainer}>
                    <Swiper  
                        autoplay
                        autoplayTimeout={3}
                        showsPagination
                        dotStyle={styles.dotStyle}
                        activeDotStyle={styles.activeDotStyle}
                    >
                        {
                            imgSwiper.map((item) => (
                                <View key={item._id} style={styles.slide}>
                                    <Image
                                        source={{ uri: item.imgUrl }}
                                        style={styles.image}
                                    />
                                </View>
                            ))
                        }
                    </Swiper>
                </View>
                <View style={styles.cardContainer}>
                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>总额度 (元)</Text>
                        <Text style={styles.cardValue}>暂无额度</Text>
                        <TouchableOpacity style={styles.checkButton}>
                            <Text style={styles.checkButtonText}>测测我的额度</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.quickLinks}>
                        <TouchableOpacity style={styles.linkItem}>
                            <Text style={styles.linkText}>借款帮助</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.linkItem}>
                            <Text style={styles.linkText}>息费计息</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.loanListContainer}>
                    {loanProducts.map(product => (
                        <View key={product.id} style={styles.loanItem}>
                            <View style={styles.loanInfo}>
                                <Text style={styles.loanTitle}>{product.title}</Text>
                                <Text style={styles.loanAmount}>
                                    最高可申请贷款(元) {product.maxAmount.toLocaleString()}
                                </Text>
                                <Text style={styles.loanDesc}>{product.description}</Text>
                            </View>
                            <TouchableOpacity
                                style={styles.loanButton}
                            >
                                <Text style={styles.loanButtonText}>立即借款</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollContent: {
        flex: 1,
    },
    content: {
        padding: 16,
    },
    tabBar: {
        flexDirection: 'row',
        height: 50,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },
    tabItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabText: {
        fontSize: 14,
        color: '#333',
    },
    swiperContainer: {
        height: 200,
        marginBottom: 20,
        overflow: 'hidden',  // 添加这行确保图片不会溢出容器
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',  // 添加这行
    },
    image: {
        width: width - 32,  // 减去padding的值
        height: '100%',
        resizeMode: 'contain',  // 修改为contain以确保图片完整显示
        borderRadius: 8,  // 可选：添加圆角
    },
    dotStyle: {
        backgroundColor: 'rgba(255,255,255,.3)',
        width: 8,
        height: 8,
        borderRadius: 4,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3,
    },
    activeDotStyle: {
        backgroundColor: '#fff',
        width: 8,
        height: 8,
        borderRadius: 4,
    },
    cardContainer: {
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    card: {
        alignItems: 'center',
        paddingVertical: 20,
    },
    cardTitle: {
        fontSize: 16,
        color: '#666',
        marginBottom: 10,
    },
    cardValue: {
        fontSize: 24,
        color: '#333',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    checkButton: {
        backgroundColor: '#e54545',
        paddingHorizontal: 30,
        paddingVertical: 12,
        borderRadius: 25,
    },
    checkButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '500',
    },
    quickLinks: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        paddingTop: 20,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },
    linkItem: {
        backgroundColor: '#f5f7fa',
        paddingHorizontal: 30,
        paddingVertical: 12,
        borderRadius: 8,
    },
    linkText: {
        color: '#666',
        fontSize: 14,
    },
    loanListContainer: {
        marginTop: 20,
    },
    loanItem: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 2,
    },
    loanInfo: {
        flex: 1,
    },
    loanTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 8,
    },
    loanAmount: {
        fontSize: 14,
        color: '#666',
        marginBottom: 4,
    },
    loanDesc: {
        fontSize: 12,
        color: '#999',
    },
    loanButton: {
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#e54545',
    },
    loanButtonText: {
        color: '#e54545',
        fontSize: 14,
        fontWeight: '500',
    },
});

export default HomePage;
