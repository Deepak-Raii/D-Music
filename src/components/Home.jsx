import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  StatusBar,
  Image,
} from 'react-native';
import React from 'react';
import colors from '../common/colors';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons/faHeart';
import {faBackward, faEllipsis, faForward, faPlay, faRepeat, faShuffle} from '@fortawesome/free-solid-svg-icons';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const Home = () => {
  return (
    <SafeAreaView style={Style.mainView}>
      <StatusBar hidden />
      <View style={Style.mainView1}>
        <View style={Style.mainView1InnerView}>
          <View style={Style.profileView}>
            <Image
              style={Style.musicPic}
              source={require('../images/music-women.jpg')}
            />
          </View>
        </View>
      </View>
      

      <View style={Style.mainView2}>
      <View style={Style.songRowView}>
        <FontAwesomeIcon icon={faHeart} color="white" size={30} />
        <Text style={Style.songTitle}>Song 1</Text>
        <FontAwesomeIcon icon={faEllipsis} color="white" size={30} />
      </View>

      <View style={Style.btnView}>
        <FontAwesomeIcon icon={faShuffle} color='white' size={20}/>
        <FontAwesomeIcon icon={faBackward} color='white' size={30}/>
        <FontAwesomeIcon icon={faPlay} color='white' size={40}/>
        <FontAwesomeIcon icon={faForward} color='white' size={30}/>
        <FontAwesomeIcon icon={faRepeat} color='white' size={20}/>
      </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const Style = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: colors.PRIMARY_COLOR,
  },
  mainView1: {
    // backgroundColor: 'white',
    height: height * 0.4,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  mainView2:{
    display:'flex',
    justifyContent:'space-between', alignItems:'center',
    width:'100%',
    height:height*0.6-height*0.12

  },
  mainView1InnerView: {
    backgroundColor: '#fb6b21',
    height: height * 0.3,
    width: '100%',
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    shadowColor: '#66354a',
    shadowOffset: {height: 6, width: 1},
    shadowOpacity: 0.7,
    shadowRadius: 2,
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileView: {
    position: 'absolute',
    bottom: -50,
    backgroundColor: 'white',
    height: 180,
    width: 180,
    borderRadius: 100,
    // borderWidth: 2,
    // borderColor: colors.PRIMARY_COLOR,
    shadowColor: '#66354a',
    shadowOffset: {height: 15, width: 1},
    shadowOpacity: 1,
    shadowRadius: 50,
  },
  musicPic: {
    height: 180,
    width: 180,
    borderRadius: 100,
    objectFit: 'cover',
  },
  songTitle: {
    color: colors.SECONDARY_COLOR,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '700',
    marginTop: 10,
  },
  songRowView: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
  },
  btnView:{
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    width:'95%',
    flexDirection:'row',
    alignSelf:'center'
  }
});
