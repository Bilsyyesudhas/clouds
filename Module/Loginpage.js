// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet,Image } from 'react-native';

// const Loginpage = ({navigation}) => {
//   const [mobileNumber, setMobileNumber] = useState('');
//   const [password, setPassword] = useState('');
//   const [mobileNumberError, setmobileNumberError] = useState('');
//   const [passwordError, setPasswordError] = useState('');

//   const handleLogin = () => {
//     // Reset previous errors
//     setmobileNumberError('');
//     setPasswordError('');

//     // Validation rules
//     const mobileNumberRegex = /^\d{10}$/;

//     // Validate email
//     if (!mobileNumber || !mobileNumberRegex.test(mobileNumber)) {
//       mobileNumberError('Please enter a valid number');
//       return;
//     }

//     // Validate password
//     if (!password) {
//       setPasswordError('Please enter your password');
//       return;
//     }

//     console.log('mobileNumber:',mobileNumber);
//     console.log('Password:', password);
//     navigation.navigate('Home');

//   };

//   return (
//     <View style={styles.container}>
//       <Image
//         source={require('./service/vle_logo.png')}
//         style={{ width: '70%',
//         marginVertical:30,
//           resizeMode: 'contain',
//        }}
//       />
//  <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />
//       {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
//       <TextInput
//         style={styles.input}
//         placeholder="mobileNumber"
//         value={mobileNumber}
//         onChangeText={setMobileNumber}
//       />
//       {mobileNumberError ? <Text style={styles.errorText}>{mobileNumberError}</Text> : null}

//       <TouchableOpacity style={styles.button} onPress={handleLogin}>
//         <Text style={styles.buttonText}>Login</Text>
//       </TouchableOpacity>

//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {

//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 30,
//   },

//   input: {
//     width: '100%',
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     borderRadius: 5,
//     marginTop:-100,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//   },
//   button: {
//     backgroundColor: 'blue',
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     marginTop:70,
//     borderRadius: 5,
//     width:"100%",
//     alignItems:'center'
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//   },
//   errorText: {
//     color: 'red',
//     marginBottom: 10,
//   },
// });

// export default Loginpage;

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

export default function Loginpage({navigation,route}) {

  const {data} = route.params;

  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [pincode, setPincode] = useState('');


  function create() {
    database()
      .ref('users/' + phoneNumber)
      .set({
        phoneNumber: phoneNumber,
        password: password,
      })
      .then(() => {
        ToastAndroid.show('LoginIn Successfully', ToastAndroid.SHORT);
      })
      .catch(error => {
        Alert.alert('Error', error.message);
      });
  }
    // ====    to create a user    =====
  const verifyPhoneNumber = async () => {
    try {
      const confirmation = await auth().signInWithPhoneNumber('+917598921017');
      // Show UI to enter verification code (OTP) and get the user input
      // ...
      // For example, you can use a TextInput to get the verification code from the user
      const verificationCode = '123456'; // Get the verification code from user input

      // Confirm the verification code
      await confirmation.confirm(verificationCode);

      const user = confirmation.user;
    } catch (error) {
      console.error('Error creating user with phone number:', error.message);
    }
  };

  const onSubmit = () => {
    create();
    verifyPhoneNumber();
  };
  return (
    <View style={styles.container}>
      <Image
        source={require('./service/vle_logo.png')}
        style={{width: '70%', marginVertical: 30, resizeMode: 'contain'}}
      />
      <TextInput
      editable={false}
        style={styles.input}
        placeholder="Enter your phone number"
        onChangeText={phoneNumber => {
          setPhoneNumber(phoneNumber);
        }}
        value={data}
      />
          
           <TextInput
        style={styles.input}
        placeholder="Enter your pincode"
        onChangeText={pincode => {
          setPincode(pincode);
        }}
        value={pincode}
        secureTextEntry={true} // Hide the entered pincode
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        onChangeText={password => {
          setPassword(password);
        }}
        value={password}
      />
      <View style={styles.button}>
        <Button title="Login" onPress={() => onSubmit()} />
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
    marginVertical: 100,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,

    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 70,
    marginBottom: 150,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
