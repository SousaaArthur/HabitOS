import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './src/pages/home';

type RootStackParamList = {
  Tabs: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontSize: 12,
          color: '#000', 
        },
        tabBarStyle: {
          backgroundColor: '#fafafa',
          height: 60,
          position: 'absolute',
          borderTopColor: '#000',
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: any;

          if (route.name === 'Home') iconName = focused ? 'home' : 'home-outline';
          else if (route.name === 'Config') iconName = focused ? 'settings' : 'settings-outline';
          else if (route.name === 'Stats') iconName = focused ? 'stats-chart' : 'stats-chart-outline';

          return <Ionicons name={iconName} size={24} color={focused ? '#000' : '#000'} />;
        },
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#000',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarLabel: 'Início' }} />
      <Tab.Screen name="Stats" component={HomeScreen} options={{ tabBarLabel: 'Estatísticas' }} />
      <Tab.Screen name="Config" component={HomeScreen} options={{ tabBarLabel: 'Configurações' }} />
    </Tab.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tabs" component={TabRoutes} />
        {/* Aqui você pode enfiar outras rotas da stack no futuro */}
      </Stack.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}