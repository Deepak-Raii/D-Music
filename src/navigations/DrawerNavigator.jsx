import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainNavigator from './MainNavigator';
const Drawer = createDrawerNavigator();

const TabNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="MainNavigator"
        component={MainNavigator}
        options={{
          headerShown: false,
        }}
      />
      {/* <Drawer.Screen name='Home' component={Home} options={{
          headerShown:false,
          headerTitle:'',
          headerStyle:{
            backgroundColor:colors.PRIMARY_COLOR
          }
        }}/> */}
    </Drawer.Navigator>
  );
};

export default TabNavigator;
