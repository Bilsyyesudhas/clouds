// import Ionicons from 'react-native-vector-icons/Ionicons';
// import React, { useState } from 'react';
// import { Text, View, Modal, TouchableOpacity } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Sandbox } from './Module/sandbox';
// import Service from './Module/Service';
// import Servicerequest from './Module/Servicerequest';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { createStackNavigator } from '@react-navigation/stack';
// import Painting from './Module/painiting';
// import Loginpage from './Module/Loginpage';
// import Catagory from './Module/Catagory';

// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

// export default function App() {

//   const [showModal, setShowModal] = useState(false)

//   return (
//     <>
//       <NavigationContainer>
//         <Tab.Navigator

//           screenOptions={({ route }) => ({
//             tabBarIcon: ({ focused, color, size }) => {
//               let iconName;

//               if (route.name === 'Home') {
//                 iconName = focused
//                   ? 'home'
//                   : 'home';
//               } else if (route.name === 'Login') {
//                 iconName = focused ? 'lock-open' : 'lock-open';
//               }
//               else if (route.name === 'Service') {
//                 iconName = focused ? 'ios-list' : 'ios-list-outline';
//               }

//               // You can return any component that you like here!
//               // return  <Ionicons name={iconName} size={size}
//               // color={color} />
//               return <Ionicons name={iconName} size={20} />
//                 ;
//             },
//             tabBarActiveTintColor: 'tomato',
//             tabBarInactiveTintColor: 'gray',
//           })}
//         >

//           <Tab.Screen name="Home" component={Sandbox} options={{
//             headerTitle: () => (
//               <View style={{
//                 flexDirection: 'row', backgroundColor: 'blue', width: '110%', paddingVertical: 20,
//                 paddingHorizontal: 20, justifyContent: 'center', alignItems: 'center', marginLeft: -15
//               }}>
//                 <Text style={{ paddingLeft: 100, fontWeight: 'bold', color: '#fff' }}>CAPE CLOUD</Text>
//                 <Ionicons name="person" size={20} color={"red"} style={{ paddingLeft: 150 }} onPress={() => setShowModal(true)} />
//               </View>
//             ),
//           }} />
//           <Tab.Screen name="Login" component={Loginpage} />
//           <Tab.Screen name="Service" component={Service} />

//         </Tab.Navigator>
//       </NavigationContainer>
//       <Modal
//         visible={showModal}
//         onRequestClose={() => setShowModal(false)}
//         transparent
//       >
//         <View style={{ borderRadius: 10, backgroundColor: '#F5F5F5', height: 100, width: 350, marginTop: 55, justifyContent: 'center', flexDirection: 'column', alignItems: "center", marginHorizontal: 20 }}>

//           <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, width: 350 }}>
//             <TouchableOpacity style={{ width: 350, paddingTop: 30, flexDirection: 'row', paddingBottom: 10 }} >
//               <Icon name='user' size={20} style={{ paddingHorizontal: 5 }} />
//               <Text style={{ textAlign: 'left', }}>Profile</Text>
//             </TouchableOpacity>
//           </View>
//           <View>
//             <TouchableOpacity style={{ width: 350, paddingTop: 30, flexDirection: 'row', paddingBottom: 10 }}>
//               <Icon name='user' size={20} style={{ paddingHorizontal: 5 }} />
//               <Text style={{ textAlign: 'left', }}>logout</Text>
//             </TouchableOpacity>
//           </View>

//         </View>
//       </Modal>

//     </>
//   );
// }

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Sandbox} from './Module/sandbox';
import Painting from './Module/painiting';
import React, {useContext, useState, useEffect} from 'react';
import {Text, View, Modal, TouchableOpacity} from 'react-native';

import Homecleaning from './Module/Stack/Homecleaning';
import Electrician from './Module/Stack/Electrician';
import Tv from './Module/Stack/Tv';
import Service from './Module/Service';
import Cctv from './Module/Stack/Cctv';
import Inverter from './Module/Stack/Inverter';
import Laundry from './Module/Stack/Laundry';
import Eventmanagement from './Module/Stack/Eventmanagement';
import Automobile from './Module/Stack/Automobile';
import Tailoring from './Module/Stack/Tailoring';
import Beautyparlour from './Module/Stack/Beautyparlour';
import Interior from './Module/Stack/Interior';
import Installation from './Module/Stack/Installation';
import Toolservice from './Module/Stack/Toolservice';
import Pickers from './Module/Stack/Pickers';
import Itservices from './Module/Stack/Itservices';
import Loginpage from './Module/Loginpage';
import {Servicerequest} from './Module/Servicerequest';

import LoginScreen from './Module/LoginScreen';

import {AuthContext} from './Module/Stack/AuthProvider';
import Homenavigation from './Module/Homenavigation';
import * as firebase from '@react-native-firebase/app';
import Sliderstack from './Module/Sliderstack';
import RegistrationScreen from './Module/RegistrationScreen';
import Agro from './Module/Agro';
import QRCodeScannerScreen from './Module/QRCodeScannerScreen';
import FirstPage from './Module/FirstPage';

import Slider from './Module/Slider';
import Cart from './Module/Cart';
// import {Profile} from './Module/Profile';
import {Profile} from './Module/Profile'


const App = () => {
  const [showModal, setShowModal] = useState(false);
  //  const [initializing, setInitializing] = useState(true);
  //  const [user, setUser] = useState(null);
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const firebaseConfig = {
    apiKey: 'AIzaSyCP9wScWAuwmbServMyZ970yhiGPcyPKws',
    authDomain: 'todoapp-eeeb7.firebaseapp.com',
    databaseURL: 'https://capecloud-b64b1-default-rtdb.firebaseio.com',
    projectId: 'capecloud-b64b1',
    storageBucket: 'gs://capecloud-b64b1.appspot.com/',
    messagingSenderId: '715067470333',
    appId: '1:715067470333:android:ca0688ebc76e3d0aeb2994',
  };

  //    useEffect(() => {
  //      const subscriber = auth().onAuthStateChanged((user) => {
  //        setUser(user);
  //        if (initializing) {
  //          setInitializing(false);
  //        }
  //      });

  //  return subscriber;
  //    }, []);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const onAuthStateChanged = user => {
    setUser(user);
    if (initializing) setInitializing(false);
  };
  //  try {
  //   //  firebase.initializeApp(firebaseConfig);
  //   firebase.initializeApp(firebaseConfig);
  //  } catch (error) {
  //  }

  //  if (initializing) {
  //    return null;
  //  }

  console.log(user, 'USER');

  // const handleLogin = async () => {
  //   try {
  //     const confirmation = await auth().signInWithPhoneNumber(phoneNumber,  appVerifier);
  //     setVerificationId(confirmation.verificationId);
  //     setOpenModal(true)
  //   } catch (error) {
  //     console.log('Error sending verification code:', error);
  //   }
  // };

  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      
      <Stack.Navigator initialRouteName='first'>
        {user ? (
          <>
            <Stack.Screen
              name="Home"
              component={Sandbox}
              options={{
                headerShown: false,
              }}
            />
               {/* <Stack.Screen name="profile" component={Profile} /> */}
          
            <Stack.Screen name="Service" component={Service} />
            <Stack.Screen name="painting" component={Painting} />
            <Stack.Screen name="Homecleaning" component={Homecleaning} />
            <Stack.Screen name="Electrician" component={Electrician} />
            <Stack.Screen name="Tv" component={Tv} />
            <Stack.Screen name="Cctv" component={Cctv} />
            <Stack.Screen name="Inverter" component={Inverter} />
            <Stack.Screen name="Laundry" component={Laundry} />
            <Stack.Screen name="Eventmanagement" component={Eventmanagement} />
            <Stack.Screen name="Beautyparlour" component={Beautyparlour} />
            <Stack.Screen name="Tailoring" component={Tailoring} />
            <Stack.Screen name="Automobile" component={Automobile} />
            <Stack.Screen name="Interior" component={Interior} />
            <Stack.Screen name="Installation" component={Installation} />
            <Stack.Screen name="Toolservice" component={Toolservice} />
            <Stack.Screen name="PackersandMovers" component={Pickers} />
            <Stack.Screen name="ITservices" component={Itservices} />
            <Stack.Screen name="Servicerequest" component={Servicerequest} />
            <Stack.Screen name="Agro Smart" component={Agro} />
            <Stack.Screen name="Happy Home" component={Slider} />
           
            {/* <Stack.Screen name="Sliderstack" component={Sliderstack}
           options={{headerShown:(false),}}/> */}
      </>

        ) : (
          <> 
         
          
         <Stack.Screen name="first" component={FirstPage}  options={{headerShown:(false),}}/>
           <Stack.Screen name="Register" component={LoginScreen} />
            <Stack.Screen name="login" component={Loginpage} />
            <Stack.Screen name="reg" component={QRCodeScannerScreen} />
          
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
