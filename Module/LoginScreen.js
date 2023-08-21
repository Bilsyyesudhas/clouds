import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Image } from 'react-native';

const LoginScreen= ({navigation,route}) => {
  const {data} = route.params;
  console.log(data, 'datta');
  const handleLogin = () => {
    navigation.navigate('login',{
      data:data
    });

  };
const handleQr = () =>{
   navigation.navigate('reg');
}
  return (
    <View style={styles.container}>
      <Image
        source={require('./service/vle_logo.png')}
        style={{ width: '70%',
        marginVertical:30,
          resizeMode: 'contain',
       }}
      />
      <TouchableOpacity color={'green'} onPress={handleLogin}>
      <TextInput
            placeholder="ManualRegistration"
            style={styles.input}
          editable={false}
          />
          </TouchableOpacity>
          <TouchableOpacity  color={'green'}onPress={handleQr}>
   <TextInput
            placeholder="Qr code"
            style={styles.value}
          
            
            editable={false}
          />
</TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    marginBottom:350,
  },

  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    borderRadius: 5,
    marginTop:5,
   
paddingHorizontal:100,
  },
  value:{
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    borderRadius: 5,
    marginTop:5,
   
paddingHorizontal:138,
  },
 
});

export default LoginScreen;





























//2nd email type

// import React, { useState, useEffect } from 'react';
// import { StyleSheet, Text, View, Button ,TextInput, ToastAndroid} from 'react-native';

// import { SignInWithEmailAndPassword } from './Utilities';

// const LoginScreen = () => {
//   const [email, setEmail] = useState('bilsydhas@gmail.com');
//   const [password, setPassword] = useState('');
//   const [user, setUser] = useState();

//   useEffect(() => {
//     const unsubscribe = auth().onAuthStateChanged((user) => {
//       setUser(user);
//     });
//     return () => unsubscribe();
//   }, []);

//   const handleLogin = async () => {
//     try {
//       await SignInWithEmailAndPassword(email, password);
//       console.log("login successfully");
//     } catch (error) {
//       if (error.code === 'auth/wrong-password') {
//         ToastAndroid.show('Wrong Password', ToastAndroid.SHORT);
//       } else if (error.code === 'auth/user-not-found') {
//         ToastAndroid.show('User Not Found', ToastAndroid.SHORT);
//       }
//       console.log(error, 'login error');
//     }
//   };





//   return (
//     <View style={styles.container}>
//       <Text>Login Page</Text>
//       <TextInput
//         placeholder="Email"
//         value={email}
//         onChangeText={(text) => setEmail(text)}
//       />
//       <TextInput
//         placeholder="Password"
//         value={password}
//         onChangeText={(text) => setPassword(text)}
//         secureTextEntry={true}
//       />
//       <Button title="Login" onPress={handleLogin} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default LoginScreen;
// 3rd type start




// const LoginScreen = () => {
//   const [phoneNumber, setPhoneNumber] = useState('');

//   const handlePhoneNumberChange = (inputPhoneNumber) => {
//     setPhoneNumber(inputPhoneNumber);
//   };

  // const handleSubmit = () => {
  
  //   

  //   signInWithPhoneNumber(auth, phoneNumber)
  //     .then((confirmationResult) => {
        
  //     })
  //     .catch((error) => {
  //       Alert.alert('Error', 'Failed to send SMS verification code');
  //     });
  // };


//   const handleSubmit = async () => {
//         try {
//           await signInWithPhoneNumber(phoneNumber, password);
//           console.log("login successfully");
//         } catch (error) {
//           if (error.code === 'auth/wrong-password') {
//             ToastAndroid.show('Wrong Password', ToastAndroid.SHORT);
//           } else if (error.code === 'auth/user-not-found') {
//             ToastAndroid.show('User Not Found', ToastAndroid.SHORT);
//           }
//           console.log(error, 'login error');
//         }
//       };




//   return (
//     <View>
//       <TextInput
//         placeholder="Enter your phone number"
//         onChangeText={handlePhoneNumberChange}
//         value={phoneNumber}
//       />
//       <Button title="Login" onPress={handleSubmit} />
//     </View>
//   );
// };

// export default LoginScreen;


