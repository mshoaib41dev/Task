import CardScroll from '@/components/CardScroll';
import CategoryNav from '@/components/CategoryNav';
import GreetingSection from '@/components/GreetingSection';
import Header from '@/components/Header';
import NewsSection from '@/components/NewsSection';
import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomePage() {
  const userName = "Anthony";
  const currentHour = new Date().getHours();
  const newsData = [
    { id: '1', text: "Multiple Israeli airstrikes in South Lebanon in sudden escalation." },
    { id: '2', text: "Multiple Israeli airstrikes in South Lebanon in sudden escalation." },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header coins={523} followers={19900} chatNotifications={15} notifications={120} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <GreetingSection userName={userName} currentHour={currentHour} />
        <CategoryNav />
        <View style={styles.main}>
          <Text style={styles.sectionTitle}>Install Now </Text>
          <MaterialIcons name="arrow-forward-ios" size={18} color="#666" />
        </View>
        <CardScroll />
        <NewsSection newsData={newsData} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAF5FA' },
  main: {
    flexDirection: 'row', paddingHorizontal: 16, marginBottom: 15,
    alignItems: 'center',
  },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#000' }
});
