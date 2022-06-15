import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { FontAwesome5 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import HomeScreen from "./src/screens/HomeScreen";
import DetailScreen from "./src/screens/DetailScreen";
import AboutScreen from "./src/screens/AboutScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" component={Menu} screenOptions={{ 
        headerStyle: {backgroundColor: "#16A085"}, 
        headerTitle: () => (<Text style={styles.headerTitleText}> <FontAwesome5 name="leaf" size={18} color="white" /> Ургамлын зүйлийн мэдээлэл</Text>) }}>
        <Stack.Screen name="Home" component={Menu}
            options={({ navigation }) => ({
            })} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
  function Menu() {
    return (
          <Tab.Navigator
          initialRouteName="Feed"
          tabBarOptions={{
            activeTintColor: '#16A085',
          }}>
            <Tab.Screen 
            name="HomeScreen"
            component={HomeScreen}
            options={{
              tabBarLabel: 'Ургамалын зүйл',
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <FontAwesome5 name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="AboutScreen"
            component={AboutScreen}
            options={{
              tabBarLabel: 'Тухай',
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <FontAwesome5
                  name="question-circle"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
        </Tab.Navigator>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  headerTitleText: {
    color: "white",
    fontSize: 18,
  },
  headerTitleIcon: {
    color: "white",
    fontSize: 25,
  }
})
