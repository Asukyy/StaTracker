import React from 'react';
import { StyleSheet, Text, View, Button, Image, Header } from 'react-native';
import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const tab = createBottomTabNavigator();

function HomeScreen() {
  
  return (
    <View style={styles.container}>
      <Text style={{ fontSize:15, marginBottom:300}} >Connect to your account !</Text>
      <Button
        title="Connect"
        onPress={() => alert('Button with adjusted color pressed')}
      />
    </View>
  );
}

function MyStatsScreen() {
  return (
    <View style={styles.container}>
      <Text>My Stats!</Text>
    </View>
  );
}

function Autorisations() {
  return (
    <View style={styles.container}>
      <Text>Autorisations!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={styles.container}>
            <View style={{borderBottomColor: 'black', borderBottomWidth: 1, marginBottom: 20, marginTop: 20}}>
        <Text style={{fontSize: 15}} onPress={() => alert(<Button title="Connect" /> )}>Theme</Text>
        </View>
      <View style={{borderBottomColor: 'black', borderBottomWidth: 1, marginBottom: 20, marginTop: 20}}>
        <Text style={{fontSize: 15}}>Notifications</Text>
        </View>
        <View style={{borderBottomColor: 'black', borderBottomWidth: 1, marginBottom: 20, marginTop: 20}}>
        <Text style={{fontSize: 15}}>A propos</Text>
        </View>
        <View style={{borderBottomColor: 'black', borderBottomWidth: 1, marginBottom: 20, marginTop: 20}}>
        <Text style={{fontSize: 15}}>Aide</Text>
        </View>
        <View style={{borderBottomColor: 'black', borderBottomWidth: 1, marginBottom: 20, marginTop: 20}}>
        <Text style={{fontSize: 15}}>Deconnexion</Text>
        </View>

    </View>
  );
}

export default function App() {
  return (

      <NavigationContainer>
        <tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = "home"
            } else if (route.name === 'Settings') {
              iconName = "settings"
            }
            else if (route.name === 'My Stats') {
              iconName = "stats-chart"
            }
            else if (route.name === 'Autorisations') {
              iconName = "shield-checkmark"
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        >
          <tab.Screen name="Home" component={HomeScreen} />
          <tab.Screen name="My Stats" component={MyStatsScreen} />
          <tab.Screen name="Autorisations" component={Autorisations} />
          <tab.Screen name="Settings" component={SettingsScreen} />
        </tab.Navigator>
      </NavigationContainer>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});



