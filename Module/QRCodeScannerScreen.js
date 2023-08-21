import React, {useState } from 'react';
import {  Text, TouchableOpacity,TextInput, StyleSheet, Linking } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { request, PERMISSIONS } from 'react-native-permissions';
import QRCodeScanner from 'react-native-qrcode-scanner';


const QRCodeScannerScreen = ({ navigation }) => {
  const [inputText, setInputText] = useState(''); // State for the input text

  const handleInputChange = text => {
    setInputText(text);
  };
  const onSuccess = e => {
    Linking.openURL(e.data).catch(err =>
      console.error('An error occurred', err)
    );

    // Navigate to another screen after scanning the QR code
    // navigation.navigate("Home",{
    //   data:phoneNumber
    //   }) // Replace 'TargetScreen' with the actual target screen name
  };

  return (
    <><TextInput
      style={styles.input}
      onChangeText={handleInputChange}
      value={inputText}
      placeholder="Enter something..." /><QRCodeScanner
        onRead={onSuccess}
        flashMode={RNCamera.Constants.FlashMode.torch}
        
        bottomContent={<TouchableOpacity style={styles.buttonTouchable}>
          
          <Text style={styles.buttonText} onPress={() => navigation.navigate('login')}>Back</Text>
        </TouchableOpacity>} /></>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 16,
    paddingHorizontal: 8,
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  }
});

export default QRCodeScannerScreen;
