import { MaterialIcons } from '@expo/vector-icons';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CategoryNav() {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.categoryNav}
            contentContainerStyle={styles.categoryNavContent}
        >
            <TouchableOpacity style={styles.categoryItem}>
                <View style={styles.categoryIcon}>
                    <Image source={require('@/assets/images/ar.png')} style={{ height: 20, width: 20 }} />
                    <View style={styles.newBadge}>
                        <Text style={styles.newBadgeText}>new</Text>
                    </View>
                </View>
                <Text style={styles.categoryLabel}>Rvwd</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.categoryItem}>
                <View style={styles.categoryIcon}>
                    <Image source={require('@/assets/images/dine.png')} style={{ height: 20, width: 20 }} />
                </View>
                <Text style={styles.categoryLabel}>DineOut</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.categoryItem}>
                <View style={styles.categoryIcon}>
                    <Image source={require('@/assets/images/disk.png')} style={{ height: 16, width: 20 }} />
                </View>
                <Text style={styles.categoryLabel}>Events</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.categoryItem}>
                <View style={styles.categoryIcon}>
                    <Image source={require('@/assets/images/sleep.png')} style={{ height: 16, width: 20 }} />
                </View>
                <Text style={styles.categoryLabel}>Stays</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.categoryItem}>
                <Image source={require('@/assets/images/swape.png')} style={{ height: 45, width: 45, borderRadius: 8, marginBottom: 6 }} />
                <Text style={styles.categoryLabel}>Whish</Text>
                <Text style={styles.adLabel}>AD</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.categoryItem}>
                <View style={styles.categoryIcon}>
                    <MaterialIcons name="more-horiz" size={24} color="#FF0000" />
                </View>
                <Text style={styles.categoryLabel}>All</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    categoryNav: { backgroundColor: '#FAF5FA', marginTop: 4 },
    categoryNavContent: { paddingHorizontal: 16, paddingVertical: 16, gap: 16 },
    categoryItem: { alignItems: 'center', marginRight: 8.5 },
    categoryIcon: { width: 45, height: 45, borderRadius: 8, backgroundColor: "#FFFFFF", justifyContent: 'center', alignItems: 'center', marginBottom: 6, position: 'relative' },
    newBadge: { position: 'absolute', top: -2, right: -2, backgroundColor: '#FF0000', borderRadius: 6, paddingHorizontal: 4, paddingVertical: 1 },
    newBadgeText: { color: '#FFF', fontSize: 8, fontWeight: 'bold' },
    categoryLabel: { fontSize: 12, fontWeight: '600', color: '#333', textAlign: 'center' },
    adLabel: { fontSize: 9, color: '#999', marginTop: 2 },
});
