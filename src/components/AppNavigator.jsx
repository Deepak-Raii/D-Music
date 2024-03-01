import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from './Splash';
import ParentNavigator from '../navigations/ParentNavigator';
import Profile from './Profile';
import MainNavigator from '../navigations/MainNavigator';
import Library from './Library';
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={Splash}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="ParentScreen"
        component={ParentNavigator}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="ProfileScreen"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Library"
        component={Library}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
