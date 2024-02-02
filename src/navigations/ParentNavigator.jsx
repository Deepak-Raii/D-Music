import { View, Text } from 'react-native'
import React from 'react'
import DrawerNavigator from './DrawerNavigator'

const ParentNavigator = () => {
  return (
    <View style={{flex:1}}>
        <DrawerNavigator />
    </View>
  )
}

export default ParentNavigator