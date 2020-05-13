import React, { Component } from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import { PERMISSIONS, requestMultiple } from 'react-native-permissions';
import VideoRecord from './VideoRecord';

requestMultiple(
  Platform.select({
    android: [PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE, PERMISSIONS.ANDROID.CAMERA, PERMISSIONS.ANDROID.RECORD_AUDIO],
    ios: [PERMISSIONS.IOS.MEDIA_LIBRARY, PERMISSIONS.IOS.CAMERA],
  }),
);

const initialState = {
  showModalAddTask: false,
  uriVideo: null,
}
export default class App extends Component {
  constructor() {
    super();
    this.state = initialState;

    this.setVideo = this.setVideo.bind(this);
  }

  setVideo = (video) => {
    this.setState({uriVideo: video, showModalAddTask: false});
    console.log('video capturado:', video);
  }

  render() {
    return (
      <View style={styles.container}>
        <VideoRecord isVisible={this.state.showModalAddTask} setField={(value) => this.setVideo(value)}
                    onCancel={() => {this.setState( {showModalAddTask: false })}} />
        <TouchableOpacity
          onPress={this.openCamera}
          style={styles.btnOpenCamera}
        >
          <Text style={styles.textBtnOpenCamera}>Gravar vídeo</Text>
        </TouchableOpacity>
      </View>
    );
  }
  openCamera = () => this.setState({showModalAddTask: true});
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  btnOpenCamera: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
  },
  textBtnOpenCamera:{
    fontSize: 24,
    textAlign: 'center',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: 'transparent',
  },
});
