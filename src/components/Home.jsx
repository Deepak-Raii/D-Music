import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  StatusBar,
  Image,
} from 'react-native';
import {useState, useEffect} from 'react';
import React from 'react';
import colors from '../common/colors';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons/faHeart';
import {
  faBackward,
  faEllipsis,
  faForward,
  faPlay,
  faRepeat,
  faShuffle,
} from '@fortawesome/free-solid-svg-icons';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import Slider from '@react-native-community/slider';


const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const Home = () => {
  const [currentTime, setCurrentTime] = useState(26);
  const [totalDuration, setTotalDuration] = useState(100);

  const onSliderValueChange = value => {
    setCurrentTime(value);
  };

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
          <Text style={Style.songTitle}>Ringtone</Text>
          <FontAwesomeIcon icon={faEllipsis} color="white" size={30} />
        </View>

        <View style={{width: '100%', alignSelf: 'center'}}>
          <Slider
            style={Style.slider}
            minimumValue={0}
            maximumValue={totalDuration}
            value={currentTime}
            onValueChange={onSliderValueChange}
            minimumTrackTintColor="#2979FF"
            maximumTrackTintColor="#BDBDBD"
            thumbTintColor="#2979FF"
          />
          <View style={Style.durationView}>
            <Text style={Style.time}>01 : 14</Text>
            <Text style={Style.time}>04 : 45</Text>
          </View>
        </View>

        <View style={Style.btnView}>
          <FontAwesomeIcon icon={faShuffle} color="white" size={18} />
          <FontAwesomeIcon icon={faBackward} color="white" size={30} />
          <FontAwesomeIcon icon={faPlay} color="white" size={60} />
          <FontAwesomeIcon icon={faForward} color="white" size={30} />
          <FontAwesomeIcon icon={faRepeat} color="white" size={18} />
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
  mainView2: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: height * 0.6 - height * 0.12,
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
    fontSize: responsiveFontSize(4),
    fontWeight: '700',
  },
  songRowView: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
  },
  btnView: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  seekbarView: {
    height: 3,
    width: '85%',
    backgroundColor: 'white',
    borderRadius: 100,
    alignSelf: 'center',
  },
  durationView: {
    width: '85%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 15,
  },
  time: {
    color: colors.SECONDARY_COLOR,
  },
  slider: {
    width: '95%',
    alignSelf:'center'
  },
});
