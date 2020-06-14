import * as React from 'react';
import { Button, View, Text, TouchableOpacity, Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Mapa from './src/map';
import Sono from './src/monitoring';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
      <Stack.Navigator
        initialRouteName="Mapa"
        screenOptions={{
          headerStyle: {
             backgroundColor: '#04383f' 
            },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}>
        <Stack.Screen name="Mapa" component={Mapa} options={
          { title: 'Mapa' }
          }/>
      </Stack.Navigator>
  );
}

function SettingsStack() {
  return (
    <Stack.Navigator
      initialRouteName="Monitorar"
      screenOptions={{
        headerStyle: { backgroundColor: '#04383f' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' }
      }}>
      <Stack.Screen name="Monitorar" component={Sono} options={{ title: 'Monitorar Sono' }}/>
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        tabBarOptions={{
          activeTintColor: '#04383f',
        }}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarLabel: 'Mapa',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="google-maps" color={color} size={size} />
            ),
          }}  />
        <Tab.Screen
          name="SettingsStack"
          component={SettingsStack}
          options={{
            tabBarLabel: 'Monitorar Sono',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="sleep" color={color} size={size} />
            ),
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;