import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontSize: 12,
          color: '#000', 
        },
        tabBarStyle: {
          backgroundColor: '#fff',
          height: 60,
          position: 'absolute',
          borderTopColor: '#000',
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: any;

        if (route.name === 'index') iconName = focused ? 'home' : 'home-outline';
        else if (route.name === 'config/index') iconName = focused ? 'settings' : 'settings-outline';
        else if (route.name === 'stats/index') iconName = focused ? 'stats-chart' : 'stats-chart-outline';
        else if (route.name === 'organize/index') iconName = focused ? 'list' : 'list-outline';
        
          return <Ionicons name={iconName} size={24} color={focused ? '#000' : '#000'} />;
        },
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#000',
      })}
    >
    <Tabs.Screen
      name="index"
      options={{
        title: 'Início',
      }}
    />

    <Tabs.Screen
      name="organize/index"
      options={{
        title: 'Organizar',
      }}
    />

    <Tabs.Screen
      name="stats/index"
      options={{
        title: 'Estatísticas',
      }}
    />

    <Tabs.Screen
      name="config/index"
      options={{
        title: 'Configurações',
      }}
    />
    </Tabs>
  );
}