import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function CardScroll() {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.cardScroll}
            contentContainerStyle={styles.cardScrollContent}
        >
            <View style={styles.card}>
                <Image
                    source={{ uri: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400' }}
                    style={styles.cardImage}
                />
                <Text style={styles.cardTitle}>Join our exclusive foodie community</Text>
                <Text style={styles.cardSubtitle}>Ad • Rvwd by 961</Text>
            </View>

            <View style={styles.card}>
                <Image
                    source={{ uri: 'https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
                    style={styles.cardImage}
                />
                <Text style={styles.cardTitle}>Transform your space</Text>
                <Text style={styles.cardSubtitle}>Ad • Sponsored</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    cardScroll: { marginHorizontal: 16 },
    cardScrollContent: { gap: 12, paddingBottom: 8 },
    card: { width: 320, borderRadius: 12, overflow: 'hidden', marginRight: 12 },
    cardImage: { width: '100%', height: 170, borderRadius: 12 },
    cardTitle: { fontSize: 16, fontWeight: '500', color: '#000', paddingVertical: 8 },
    cardSubtitle: { fontSize: 12, color: '#999', fontWeight: '500' },
});
