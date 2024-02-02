import {View, Text, Dimensions, StatusBar} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../components/Home';
import Profile from '../components/Profile';
import colors from '../common/colors';
const Tab = createBottomTabNavigator();
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faHome,
  faUserAlt,
} from '@fortawesome/free-solid-svg-icons';
import Playlist from '../components/Playlist';
import {faListDots} from '@fortawesome/free-solid-svg-icons/faListDots';

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.PRIMARY_COLOR,
        tabBarInactiveTintColor: colors.SECONDARY_COLOR,
        tabBarStyle: {
          position: 'absolute',
          bottom: 3,
          height: Dimensions.get('window').height * 0.08,
          marginLeft: 5,
          marginRight: 5,
          borderRadius: 50,
          backgroundColor: '#fb6b21',
          opacity: 0.9,
          elevation:2,
          shadowColor:'white',
        },
      }}>
      <Tab.Screen
        component={Home}
        name="Home"
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <FontAwesomeIcon icon={faHome} color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        component={Playlist}
        name="Playlist"
        options={{
          headerShown: true,
          tabBarIcon: ({color, size}) => (
            <FontAwesomeIcon icon={faListDots} color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        component={Profile}
        name="Profile"
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <FontAwesomeIcon icon={faUserAlt} color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
