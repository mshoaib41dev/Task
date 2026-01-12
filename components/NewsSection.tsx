import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface NewsItem { id: string; text: string }
interface NewsSectionProps { newsData: NewsItem[] }

export default function NewsSection({ newsData }: NewsSectionProps) {
    const renderItem = ({ item }: { item: NewsItem }) => (
        <TouchableOpacity style={styles.newsCard}>
            <View style={{ width: 260 }}>
                <Text style={styles.newsText}>{item.text}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.newsSection}>
            <Text style={styles.sectionTitle}>Latest News</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={newsData}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    newsSection: { paddingHorizontal: 16, paddingVertical: 12 },
    sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#000', marginBottom: 8 },
    newsCard: {
        backgroundColor: '#FFF',
        borderRadius: 12,
        paddingVertical: 16,
        paddingHorizontal: 16,
        marginRight: 10,
        marginVertical: 10
    },
    newsText: { fontSize: 15, color: '#333', lineHeight: 22 },
});
