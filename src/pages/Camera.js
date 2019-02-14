import React, { Component } from 'react'
import { View, StatusBar, Dimensions, StyleSheet, Alert } from 'react-native'
import QRCodeScanner from 'react-native-qrcode-scanner'

export default class Camera extends Component {
    scanSucess(data) {
        Alert.alert('QRCode', data.data, [{text: 'Confirmo', onPress: () => this.scan.reactivate()}])
    }
    
    render() {
        return (
            <View>
                <StatusBar hidden/>
                <QRCodeScanner 
                  ref={scan => this.scan = scan}
                  onRead={this.scanSucess.bind(this)}
                  showMarker={true}
                  cameraStyle={styles.camera}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    camera: {
        height: Dimensions.get('screen').height,
        width: Dimensions.get('screen').width,
    },
})