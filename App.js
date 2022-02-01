import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Feather } from "@expo/vector-icons";

import HomeScreen from "./src/screens/HomeScreen";
import DetailScreen from "./src/screens/DetailScreen";
import AboutScreen from "./src/screens/AboutScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ 
        headerStyle: {backgroundColor: "#266D9F"}, 
        headerTitle: () => (<Text style={styles.headerTitleText}> <Feather name="aperture" color="white" /> Тусгай хамгаалалттай газар нутаг</Text>) }}>
        <Stack.Screen name="Home" component={HomeScreen} options={ ({navigation}) => ({
          headerRight: () => (<Feather name="more-vertical" onPress={ () => { navigation.navigate("About")} } style={styles.headerTitleIcon}/>) }) }/>
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  headerTitleText: {
    color: "white",
    fontSize: 16,
  },
  headerTitleIcon: {
    color: "white",
    fontSize: 18,
  }
})
