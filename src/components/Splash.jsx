import { View, Text, Platform, SafeAreaView, StyleSheet } from 'react-native'
import React, { useEffect } from 'react';
import colors from '../common/colors';
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
    const navigation = useNavigation();
    useEffect(()=>{
        setTimeout(()=>{
            navigation.replace("ParentScreen");

        },2000)

    },[])
  return (
    <SafeAreaView style={Style.mainView}>
      <View style={Style.dView}><Text style={Style.dText}>D</Text></View><Text style={Style.musicText}> Music</Text>
    </SafeAreaView>
  )
}

export default Splash

const Style = StyleSheet.create({
    mainView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        backgroundColor:colors.PRIMARY_COLOR
    },
    dView:{
        height:100,
        width:100,
        backgroundColor:colors.SECONDARY_COLOR,
        fontSize:30,
        borderRadius:50,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
        
    },
    dText:{
        fontSize:70,
        fontWeight:"700",
        color:'#0a0a16'
    },
    musicText:{
        fontSize:60,
        fontWeight:'700',
        color:'white',
        letterSpacing:1,
        // textShadowColor:"white",
        // textShadowOffset:{height:100,width:100},
        // textShadowRadius:100,
    }
})