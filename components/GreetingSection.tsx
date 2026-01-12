import { Image, StyleSheet, Text, View } from 'react-native';

interface GreetingProps {
    userName: string;
    currentHour: number;
}

export default function GreetingSection({ userName, currentHour }: GreetingProps) {
    const greeting = currentHour < 12 ? 'Good morning' : currentHour < 18 ? 'Good afternoon' : 'Good evening';

    return (
        <View style={styles.greetingSection}>
            <Text style={styles.greetingText}>{greeting}, {userName}</Text>
            <View style={styles.weatherSection}>
                <Image source={require('@/assets/images/sun.png')} style={{ height: 25, width: 25 }} />
                <Text style={styles.weatherText}>24°C</Text>
                <Text style={styles.weatherText2}> Partly Cloudy</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    greetingSection: {
        paddingHorizontal: 16,
        paddingVertical: 20,
        alignItems: 'center',
    },
    greetingText: {
        fontSize: 32,
        fontWeight: '500',
        textAlign: 'center',
        color: '#000',
        marginBottom: 12,
        width: "70%"
    },
    weatherSection: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    weatherText: { fontSize: 15, fontWeight: '500', color: '#333' },
    weatherText2: { fontSize: 14, fontWeight: '400', color: '#2E3137' },
});
