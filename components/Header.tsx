import { Ionicons } from '@expo/vector-icons';
import { Image, StyleSheet, Text, View } from 'react-native';

interface HeaderProps {
    coins: number;
    followers: number;
    chatNotifications: number;
    notifications: number;
}

export default function Header({ coins, followers, chatNotifications, notifications }: HeaderProps) {
    return (
        <View style={styles.header}>
            {/* Left Section */}
            <View style={styles.headerLeft}>
                <Text style={styles.logo}>961</Text>
                <View style={styles.profileIcon}>
                    <Ionicons name="person" size={20} color="#666" />
                </View>
            </View>

            {/* Right Section */}
            <View style={styles.headerRight}>
                {/* Coins */}
                <View style={styles.iconBadge}>
                    <Image source={require('@/assets/images/coin.png')} style={styles.flame} />
                    <Text style={styles.badgeText}>{coins}</Text>
                </View>

                {/* Followers */}
                <View style={styles.iconBadge}>
                    <Image source={require('@/assets/images/logo.png')} style={styles.flame} />
                    <Text style={styles.badgeText}>{followers >= 1000 ? (followers / 1000).toFixed(1) + 'k' : followers}</Text>
                </View>

                {/* Chat Notifications */}
                <View style={styles.notificationIcon}>
                    <Ionicons name="chatbubble-outline" size={20} color="#666" />
                    {chatNotifications > 0 && (
                        <View style={styles.badge}>
                            <Text style={styles.badgeNumber}>
                                {chatNotifications > 99 ? '99+' : chatNotifications}
                            </Text>
                        </View>
                    )}
                </View>

                {/* General Notifications */}
                <View style={styles.notificationIcon}>
                    <Ionicons name="notifications-outline" size={20} color="#666" />
                    {notifications > 0 && (
                        <View style={styles.badge}>
                            <Text style={styles.badgeNumber}>
                                {notifications > 99 ? '99+' : notifications}
                            </Text>
                        </View>
                    )}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: '#FAF5FA',
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    logo: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FF0000',
    },
    profileIcon: {
        width: 24,
        height: 24,
        borderRadius: 16,
        backgroundColor: '#E0E0E0',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#DDD',
    },
    headerRight: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    iconBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    badgeText: {
        fontSize: 13,
        fontWeight: '600',
        color: '#333',
    },
    notificationIcon: {
        position: 'relative',
        marginLeft: 4,
    },
    badge: {
        position: 'absolute',
        top: -4,
        right: -10,
        backgroundColor: '#FF0000',
        borderRadius: 10,
        minWidth: 20,
        height: 14,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#FFF',
        paddingHorizontal: 2,
    },
    badgeNumber: {
        color: '#FFF',
        fontSize: 8,
        fontWeight: 'bold',
    },
    flame: {
        height: 15,
        width: 15,
    },
});
