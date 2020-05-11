import React, { PureComponent } from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import { RNCamera } from 'react-native-camera';
import RNFetchBlob from 'rn-fetch-blob'
import moment from 'moment';
import { PERMISSIONS, request } from 'react-native-permissions';
import Icon from 'react-native-vector-icons/FontAwesome';

request(
  Platform.select({
    android: PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
    ios: PERMISSIONS.IOS.MEDIA_LIBRARY,
  }),
);

const ENDPOINT = "http://10.0.0.19:3000";

export default class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      recording: false,
      processing: false,
    };
  }

  render() {
    const { recording, processing } = this.state;
    let button = (
      <TouchableOpacity
        onPress={this.startRecording.bind(this)}
        style={styles.capture}
      >
        <Text>
          <Icon name="video-camera" size={30} color="#4F8EF7" />;
        </Text>
      </TouchableOpacity>
    );

    if (recording) {
      button = (
        <TouchableOpacity
          onPress={this.stopRecording.bind(this)}
          style={styles.capture}
        >
          <Text>
            <Icon name='stop-circle' color={'red'} />
          </Text>
        </TouchableOpacity>
      );
    }

    if (processing) {
      button = (
        <View style={styles.capture}>
          <ActivityIndicator animating size={18} />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => { this.camera = ref; }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.auto}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        />
        <View
          style={{ flex: 0, flexDirection: "row", justifyContent: "center" }}
        >
          {button}
        </View>
      </View>
    );
  }

  async startRecording() {
    this.setState({ recording: true });
    // default to mp4 for android as codec is not set
    const { uri, codec = "mp4" } = await this.camera.recordAsync();

    this.setState({ recording: false, processing: true });
    const type = `video/${codec}`;

    const data = new FormData();
    data.append("video", {
      name: "mobile-video-upload",
      type: type,
      uri: uri
    });

    console.log('URI Video:', uri);

    //Gravacao em storage
    const fileName = `videoRecord_${moment().format('DDMMYYYYHHMMSS')}.${codec}`;
    try {
      let fileLocation = `${RNFetchBlob.fs.dirs.DCIMDir}/${fileName}`;
      let result = null;
      await RNFetchBlob.fs.writeFile(fileLocation, uri, 'uri')
        .then((res) => result = res)
        .catch((e) => console.log('Erro ao gravar video:', e));
      console.log('Gravacao em storage feita', result, fileLocation);
    } catch (e) {
      console.error(e);
    }

    /*try {
      const res = await fetch(ENDPOINT, {
        method: "post",
        body: data
      });
    } catch (e) {
      //console.error(e);
      console.log('Nao conseguiu comunit')
    } */

    this.setState({ processing: false });
  }

  stopRecording() {
    console.log('Stop de video');
    this.camera.stopRecording();

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 5,
    alignSelf: 'center',
  },
});
