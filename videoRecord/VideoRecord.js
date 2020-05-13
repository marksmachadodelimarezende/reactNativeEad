import React, { PureComponent } from 'react';
import { Modal, Text, TouchableOpacity, View, ActivityIndicator, StyleSheet } from 'react-native';
import { RNCamera } from 'react-native-camera';
import RNFetchBlob from 'rn-fetch-blob'
import moment from 'moment';

const initialState = { recording: false, processing: false };

export default class PdInputVideo extends PureComponent {
    constructor() {
        super();
        this.state = initialState;
    }

    render() {
        const { recording, processing } = this.state;
        let button = (
            <TouchableOpacity
                onPress={this.startRecording.bind(this)}
                style={styles.capture}
            >
                <View>
                    <Text style={styles.btnStartRecord} />
                </View>
            </TouchableOpacity>
        );

        if (recording) {
            button = (
                <TouchableOpacity
                    onPress={this.stopRecording.bind(this)}
                    style={styles.capture}
                >
                    <Text style={styles.btnStopRecord} />
                </TouchableOpacity>
            );
        }

        if (processing) {
            button = (
                <View style={styles.capture}>
                    <ActivityIndicator animating size={22} style={{ flex: 1, justifyContent: 'center' }} />
                </View>
            );
        }

        return (
            <Modal onRequestClose={this.props.onCancel}
                visible={this.props.isVisible}
                animationType='slide' transparent={true}>
                <View style={styles.container}>
                    <RNCamera
                        style={styles.preview}
                        ref={ref => { this.camera = ref; }}
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
                    >
                        <View>
                            {button}
                        </View>
                    </RNCamera>
                </View>
            </Modal>
        );
    }

    async startRecording() {
        this.setState({ recording: true });
        // default to mp4 for android as codec is not set
        const { uri, codec = "mp4" } = await this.camera.recordAsync();

        this.setState({ recording: false, processing: true });
        const type = `video/${codec}`;

        console.log('URI Video:', uri);
        this.props.setField(uri);

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
            const data = new FormData();
            data.append("video", {
                name: "mobile-video-upload",
                type: type,
                uri: uri
            });
            const res = await fetch(ENDPOINT, {
                method: "post",
                body: data
            });
        } catch (e) {
            //console.error(e);
            console.log('Nao conseguiu comunit')
        } //*/

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
        backgroundColor: 'black',
    },
    preview: {
        flex: 11,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    capture: {
        backgroundColor: 'white',
        alignItems: 'center',
        marginBottom: 20,
        height: 60,
        width: 60,
        borderRadius: 50,
    },
    btnStartRecord: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'red',
        width: 50,
        height: 50,
        margin: 5,
        borderRadius: 50,
    },
    btnStopRecord: {
        backgroundColor: 'black',
        width: 40,
        height: 40,
        margin: 10,
        borderRadius: 5,
    },
});