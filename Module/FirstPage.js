

import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Alert,
  Image,
  ToastAndroid,
} from 'react-native';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

export default function FirstPage({navigation}) {
  const [phoneNumber, setPhoneNumber] = useState('');

const onSubmit = () => { 
navigation.navigate("Register",{
data:phoneNumber
})
}

  
  
  return (
    <View style={styles.container}>
      <Image
        source={require('./service/vle_logo.png')}
        style={{width: '70%', resizeMode: 'contain'}}
      />
      <Text  style={styles.text}>Your Home Services Expert</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your phone number"
        onChangeText={phoneNumber => {
          setPhoneNumber(phoneNumber);
        }}
        value={phoneNumber}
      />
          
      <View style={styles.button}>
        <Button title="Submit" onPress={() => onSubmit()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
   
  },
  text:{
    width: '100%',
    height: 40,
    textAlign:'center',
paddingHorizontal: 10,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,

    
    paddingHorizontal: 10,
  },
  button: {
   
    marginTop: 20,
    marginBottom: 150,
    borderRadius: 5,
    width: '100%',
    
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
