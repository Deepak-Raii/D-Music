import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, PermissionsAndroid } from 'react-native';
import MusicFiles from 'react-native-get-music-files';
import Sound from 'react-native-sound';
import RNFS from 'react-native-fs';


const Library = () => {
  useEffect(() => {
    requestAudioPermission()
  }, []);

  async function requestAudioPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'Fetch Audio',
          message: 'This app needs access to your microphone to record audio.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      console.log("permission : ",granted);
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("in granted")
        getMp3Files();
        
      } else {
        console.log('storage permission denied');
        getMp3Files();
      }
    } catch (err) {
      console.warn(err);
    }
  }

  const getMp3Files = async () => {
    try {
      const files = await RNFS.readDir(RNFS.ExternalStorageDirectoryPath);

      for (let index = 0; index < files.length; index++) {
        console.log(`file ${index+1} : ${files[index].name}`)
        
      }


      ///////////////////////////////  start using this, first  console it ///////////////////////////////////

      // const mp3Files = files.filter(file => file.name.endsWith('.mp3'));
      // console.log('MP3 files:', files);
    } catch (error) {
      console.error('Error getting MP3 files:', error);
    }
  };

  // const getMp3Files = async () => {
  //   try {
  //     console.log("in try");
  //     const tracks = await MusicFiles.getAll({
  //       id: true,
  //       artist: true,
  //       duration: true,
  //       cover: true,
  //       genre: true,
  //       title: true,
  //       fileName: true,
  //       minimumSongDuration: 10000,
  //     });
  //     console.log("tracks : ", tracks);
  //     const mp3Files = tracks.filter((track) => track.fileName.endsWith('.mp3'));
  //     console.log('MP3 files:', mp3Files);
  //   } catch (error) {
  //     console.error('Error getting MP3 files:', error);
  //   }
  // };
  return (
    <View>
      <Text>Library</Text>
      <TouchableOpacity onPress={getMp3Files}>
        <Text>Get MP3 files</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Library;

