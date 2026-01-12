import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#FF0000',
        tabBarInactiveTintColor: '#999',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#FAF5FA',
          height: 75,
          paddingBottom: 15,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <Text style={[styles.logoText, { color: focused ? '#FF0000' : '#999' }]}>961</Text>
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="list" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: '',
          tabBarIcon: ({ color, size }) => (
            <View style={styles.chatIconContainer}>
              <Ionicons name="chatbubble-outline" size={size} color={color} />
              <View style={styles.refreshCircle}>
                <Ionicons name="refresh" size={10} color={color} />
              </View>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          title: '',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="stats-chart" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="plus"
        options={{
          title: '',
          tabBarIcon: ({ focused }) => (
            <View style={[styles.plusButton, focused && styles.plusButtonActive]}>
              <Text style={[styles.plusText, focused && styles.plusTextActive]}>plus</Text>
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  logoText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  chatIconContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  refreshCircle: {
    position: 'absolute',
    bottom: -2,
    right: -4,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EEE',
  },
  plusButton: {
    backgroundColor: '#E0E0E0',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    minWidth: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusButtonActive: {
    backgroundColor: 'red',
  },
  plusText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#666',
  },
  plusTextActive: {
    color: '#333',
  },
});