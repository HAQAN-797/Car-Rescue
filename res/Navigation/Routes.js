//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Home,Login,Signup,Menu, Background, CarRescue, FuelSharing, ContactMechanic, Points } from '..';
import NavigationStrings from '../constant/NavigationStrings';
import { NavigationContainer } from 'react-native-screens/native-stack';
 // Import createNativeStackNavigator from react-native-screens/native-stack

// create a component
const Stack = createNativeStackNavigator();
const Routes = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name={NavigationStrings.Home} component={Home} />
          <Stack.Screen name={NavigationStrings.Login} component={Login} />
          <Stack.Screen name={NavigationStrings.Signup} component={Signup} />
          <Stack.Screen name={NavigationStrings.Background} component={Background} />
          <Stack.Screen name={NavigationStrings.CarRescue} component={CarRescue} />
          <Stack.Screen name={NavigationStrings.FuelSharing} component={FuelSharing} />
          <Stack.Screen name={NavigationStrings.ContactMechanic} component={ContactMechanic} />
          <Stack.Screen name={NavigationStrings.Points} component={Points} />
          <Stack.Screen name={NavigationStrings.Menu} component={Menu} />
        </Stack.Navigator>
      </NavigationContainer>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Routes;
