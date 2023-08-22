

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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

import {Profile} from './Module/Profile'
import { Sandbox } from './Module/sandbox';

import SmartHistory from './Module/SmartHistory';
import { MyTab } from './Module/MyTab';



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
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='first'>
        {user ? (
          <>
         <Stack.Screen name='home'  options={{
                headerShown: false,
              }}>
            {() => (
              <Tab.Navigator>
                   <Tab.Screen
                  name='Catagories'
                  component={Sandbox}
                  options={{
                    headerShown: false,
                    tabBarLabel: 'Catagories',
                    tabBarIcon: ({ color, size }) => (
                      <Ionicons name='menu' color={color} size={size} />
                    ),
                  }}
                />
               <Tab.Screen name='Service Request' component={Sliderstack}   options={{
                    headerShown: false,
                    tabBarLabel: 'Service Request',
                    tabBarIcon: ({ color, size }) => (
                      <Ionicons name='push' color={color} size={size} />
                    ),
                  }} />
                 <Tab.Screen name='AgroSmart Request' component={SmartHistory}   options={{
                    headerShown: false,
                    tabBarLabel: 'AgroSmart Request',
                    tabBarIcon: ({ color, size }) => (
                      <Ionicons name='enter' color={color} size={size} />
                    ),
                  }} /> 
                {/* Add more tab screens as needed */}
              </Tab.Navigator>
            )}
          </Stack.Screen>
            <Stack.Screen
              name="Home"
              component={Sandbox}
              options={{
                headerShown: false,
              }}
            />
               <Stack.Screen name="profile" component={Profile} />
          
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
